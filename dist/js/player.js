let player;
let systemPlayer = {
    time: {
        current: 0,
        end: 10
    },
    play: false,
    next: null,
    prev: null,
    playback: null
};
const play_youtube = (link_selector, id) => {
    $(".lyrics-tab").html(`<div id="player_youtube_live" data-plyr-provider="youtube" data-plyr-embed-id="${link_selector}"></div>`);
    player = new Plyr('#player_youtube_live');
    player.autoplay = true;
    if ($(".lyrics-tab").hasClass("disabled")) {
        lyric_button();
    }
    $(".lyrics-tab").addClass("detached");
    update_main('<i class="fab fa-youtube"></i> Getting Video Information...', "<i>Streaming from Youtube</i>", `'https://i.ytimg.com/vi/${link_selector}/maxresdefault.jpg'`);
    const updateName = () => {
        if (player.config.title == "")
            setTimeout(updateName, 100);
        else
            update_main('<i class="fab fa-youtube"></i> ' + player.config.title, "<i>Streaming from Youtube</i>", `'https://i.ytimg.com/vi/${link_selector}/maxresdefault.jpg'`);
    };
    updateName();
    setTimeout(() => { playerController(true, true, "youtube"); }, 2500);
};
const update_main = (song_name, song_artist, song_art) => {
    $("#currently_playing_art").css("background-image", `url(${song_art})`);
    $("#currently_playing_name").html(song_name);
    $("#currently_playing_artist").html(song_artist);
};
const playerController = (state, isNew, playbackOn) => {
    let player_pause = "fa-pause";
    let player_play = "fa-play";
    let streaming = "fa-stream";
    const change_state = (player_state_active) => {
        //Player state when true means song is playing else paused
        if (player_state_active === true) {
            systemPlayer.play = true;
            if (systemPlayer.playback == "youtube")
                player.play();
            $("#play_music_state").html(`<i class="fas ${player_pause}" onclick="playerController(false, false)"></i>`);
        }
        else {
            systemPlayer.play = false;
            if (systemPlayer.playback == "youtube")
                player.pause();
            $("#play_music_state").html(`<i class="fas ${player_play}" onclick="playerController(true, false)"></i>`);
        }
    };
    const timer = () => {
        if (systemPlayer.playback == "youtube")
            $(`#music-slider`).css("width", `${(player.currentTime / player.duration) * 100}%`);
        if (document.getElementById("music-slider").style.width == "100%")
            change_state(false);
        if (systemPlayer.play === true) {
            setTimeout(() => { timer(); }, 100);
        }
    };
    $("#track_player").on("click", () => {
        player.currentTime = (document.getElementById("track_player").value / 100) * player.duration;
    });
    if (state == true)
        change_state(true);
    else
        change_state(false);
    if (isNew == true) {
        timer();
        systemPlayer.playback = playbackOn;
    }
};
