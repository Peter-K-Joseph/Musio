let player;
let systemPlayer = {
    time: {
        current: 0,
        end: 10
    },
    play: false,
    next: null,
    prev: null,
    playback: null,
    setsrc: document.createElement('audio')
}

// Sync Library from Backend
const syncTrack = () => {
    $("#song_list").append(`<div class="w-100 h-100 align-center"><div><center><svg xmlns="http://www.w3.org/2000/svg" class="icon-poster" width="16" height="16"fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16"><path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" /></svg><h3>No Tracks Found</h3></center></div></div>`);
    console.info("[BACKGROUND SERVICES] Starting Sync")
    console.log(`http://127.0.0.1/api/music`)
    $.get(`http://127.0.0.1/api/music`)
        .done((val) => {
            $("#currently_playing_name").html("Syncing Tracks");
            $("#currently_playing_artist").html("We are currently updating tracks. Please Wait");

            const calc_duration = (stream) => { // Function to calculate the amount of time for the song in seconds [2:00 min => 120 sec]
                stream = stream.split(":");
                let calc = 0;
                for (let i = 0; i < stream.length; i++) { (stream.length - 1 != i) ? (calc = calc + parseFloat(stream[i]) * 60) : (calc = calc + parseFloat(stream[i])); }
                return calc;
            }

            if (val.length == 0) {
                $("#song_list").html(`<div class="w-100 h-100 align-center"><div><center><svg xmlns="http://www.w3.org/2000/svg" class="icon-poster" width="16" height="16"fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16"><path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" /></svg><h3>Empty Folder</h3></center></div></div>`);
            } else {
                $("#song_list").html("")
            }

            for (let x = 0; x < val.length - 1; x++) {
                const color = random_bg_color();
                $("#song_list").append(`<div data-link="${val[x]["link"]}" data-album="${val[x]["album"]}" data-artist="${val[x]["artist"]}" data-name="${val[x]["name"]}" data-listicate="${x}" data-duration="${calc_duration(val[x]["duration"])}" class="music align-center liked player_activatable"><div class="num"><i class="fas fa-play"></i></div><div class="album liked" style="background-color: ${color[0]}; color: ${color[1]}; border-radius: 5px; font-size: 2rem; text-align: center;">${(val[x]["album"][0] != undefined) ? val[x]["album"][0] : val[x]["name"][0]}</div><div class="name"><span class="song-name">${val[x]["name"]}</span><br><span class="artist">${val[x]["album"]} by <span style="padding: 0; margin:0 ;opacity: .5">${val[x]["artist"]}</span></span></div><button class="more_icon"></button><div class="time">${val[x]["duration"]}</div></div>`)
            }

            update_main("No Tracks Playing", "Select a music to start playing", "");
            $(".player_activatable").on("click", (e) => { musicPlayBack(e) })
        })
        .fail(() => {
            Notiflix.Confirm.Init({ titleColor: "#c63232", okButtonBackground: "#ff0000", cancelButtonBackground: "#d8d8d8", cancelButtonColor: "#000000", });
            Notiflix.Confirm.Show('Error Syncing Tracks', 'An error occurred while getting track list. Would you like to resync library?', 'Re-sync Library', 'Close', resync());
            $("#song_list").html(`<div class="w-100 h-100 align-center"><div>    <center><svg xmlns="http://www.w3.org/2000/svg" class="icon-poster" width="16" height="16"            fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16">            <path                d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />        </svg>        <h3>Coundn't Sync Song List. Try Resyncing...</h3>    </center></div></div>`);
            update_main("Sync Failed", "Unable to complete sync request", false)
        })
}

const resync = () => {
    Notiflix.Loading.Pulse('Updating Song List');
    $("#song_list").html(`<div class="w-100 h-100 align-center"><div>    <center><svg xmlns="http://www.w3.org/2000/svg" class="icon-poster" width="16" height="16"            fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16">            <path                d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />        </svg>        <h3>Updating Song List</h3>    </center></div></div>`);
    update_main("Updating Track List", "Please wait while we update the song list", false);
    $.get(`http://127.0.0.1/api/sync`).done(() => {
        Notiflix.Loading.Remove();
        Notiflix.Notify.Success('Music Library Updated');
        syncTrack();
    })
}
syncTrack()

const play_youtube = (link_selector, id) => { //Play Music from Youtube
    $(".lyrics-tab").html(`<div id="player_youtube_live" data-plyr-provider="youtube" data-plyr-embed-id="${link_selector}"></div>`)
    player = new Plyr('#player_youtube_live');
    player.autoplay = true;
    if ($(".lyrics-tab").hasClass("disabled")) { lyric_button() }
    $(".lyrics-tab").addClass("detached");
    update_main('<i class="fab fa-youtube"></i> Getting Video Information...', "<i>Streaming from Youtube</i>", `'https://i.ytimg.com/vi/${link_selector}/maxresdefault.jpg'`)
    const updateName = () => {
        if (player.config.title == "")
            setTimeout(updateName, 100)
        else
            update_main('<i class="fab fa-youtube"></i> ' + player.config.title, "<i>Streaming from Youtube</i>", `'https://i.ytimg.com/vi/${link_selector}/maxresdefault.jpg'`)
    }
    updateName()
    setTimeout(() => { playerController(true, true, "youtube") }, 2500)
}

const update_main = (song_name, song_artist, song_art) => { //Update Name and Album/Artist and the Albumart in the Player
    $("#currently_playing_art").css("background-image", `url(${song_art})`)
    $("#currently_playing_name").html(song_name)
    $("#currently_playing_artist").html(song_artist)
}

const playerController = (state, isNew, playbackOn) => {
    let player_pause = "fa-pause";
    let player_play = "fa-play";
    let streaming = "fa-stream";

    const change_state = (player_state_active) => {
        //Player state when true means song is playing else paused
        if (player_state_active === true) {
            systemPlayer.play = true;
            if (systemPlayer.playback == "youtube") player.play();
            $("#play_music_state").html(`<i class="fas ${player_pause}" onclick="playerController(false, false)"></i>`);
        } else {
            systemPlayer.play = false;
            if (systemPlayer.playback == "youtube") player.pause();
            $("#play_music_state").html(`<i class="fas ${player_play}" onclick="playerController(true, false)"></i>`);
        }
    }

    const timer = () => {
        if (systemPlayer.playback == "youtube")
            $(`#music-slider`).css("width", `${(player.currentTime / player.duration) * 100}%`);
        if (systemPlayer.playback == "system") {
            $(`#track_player`).css("width", `${(systemPlayer.setsrc.currentTime / systemPlayer.time.end) * 100}%`);
        }

        if (document.getElementById("music-slider").style.width == "100%") {
            change_state(false)
        }
        
        if (systemPlayer.play === true) { setTimeout(() => { timer() }, 100) }
    }

    $("#track_player").on("click", () => {
        if (systemPlayer.playback == "youtube") {
            player.currentTime = (document.getElementById("track_player").value / 100) * player.duration;
        }
        if (systemPlayer.playback == "system") {
            systemPlayer.setsrc.currentTime = (document.getElementById("track_player").value / 100) * systemPlayer.time.end;
        }

    })

    if (state == true) change_state(true)
    else change_state(false)

    if (isNew == true) {
        timer();
        systemPlayer.playback = playbackOn;
    }
}

const musicPlayBack = (target) => {
    update_main($(target.currentTarget).attr("data-name"), `${$(target.currentTarget).attr("data-album")} by ${$(target.currentTarget).attr("data-artist")}`, `linear-gradient(45deg, ${random_bg_color()[0]}, ${random_bg_color()[1]})`)
    $.post(`http://localhost:8000/server/index.php?id=${$(target.currentTarget).attr("data-listicate")}`)
        .done((link) => {
            link = JSON.parse(link);
            systemPlayer.setsrc.src = window.location.origin + "/" + link["link"];
            systemPlayer.setsrc.play()
            systemPlayer.play = true;
            systemPlayer.playback = "system";
            systemPlayer.time.end = +$(target.currentTarget).attr("data-duration")
            playerController(true, true, true)
        }).fail(() => {
            Notiflix.Notify.Failure('Failed to play song');
        })
}

const random_bg_color = () => {
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    let InverseRGB = "rgb(" + (255 - red) + ", " + (255 - green) + ", " + (255 - blue) + ")";
    return [bgColor, InverseRGB];
}