const routes = {
    "home": {
        "html": '',
        "js": null
    },
    
    "info-by-album": {
        "html": `<div class="row m-1 mt-2 section" id="liked-songs-section">
        <div class="bg-grad">
            <div class="row">
                <div class="col">
                    <h1 class="heading">All Albums</h1>
                    <p id="music_insights">Loading your albums</p>
                </div>
                <div class="col">
                </div>
                <div class="col">
                    <ion-icon class="icon-poster fav" name="musical-note-outline">...</ion-icon>
                </div>
            </div>
        </div>
        <div id="album_list"></div>
    </div>`,
        "js": () => {
            fetch(`${window.location.origin}/api/albums`).then((res) => {
                res.json().then((val) => {
                    document.querySelector("#music_insights").innerHTML = `Showing ${val.length} albums`;
                    val.forEach((album) => {
                        const albumCard = document.createElement("div");
                        albumCard.classList.add("album-card");
                        albumCard.innerHTML = `<div class="album-card-img">
                            <img src="${window.location.origin}${album.art}" alt="${album.name} Album Art">
                        </div>
                        <div class="album-card-info">
                        <h3>${album.album}</h3>
                            <p>${album.artist}</p>
                        </div>`;
                        document.querySelector("#album_list").appendChild(albumCard);
                    })
                })
            })
        }
    },
    "songs": {
        "html": `<div class="row m-1 mt-2 section" id="liked-songs-section">
                    <div class="bg-grad">
                        <div class="row">
                            <div class="col">
                                <h1 class="heading">All Songs</h1>
                                <p id="music_insights">Loading your music</p>
                            </div>
                            <div class="col">
                                <div class="child">
                                    <button class="shuffle"><i class="fa-solid fa-shuffle"></i></button>
                                </div>
                            </div>
                            <div class="col">
                                <ion-icon class="icon-poster fav" name="musical-note-outline">...</ion-icon>
                            </div>
                        </div>
                    </div>
                    <div id="song_list"></div>
                </div>`,
        "js":
            () => {
                const song_list = document.querySelector("#song_list");
                song_list.innerHTML += `<div class="w-100 h-100 align-center"><div><center><svg xmlns="http://www.w3.org/2000/svg" class="icon-poster" width="16" height="16"fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16"><path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" /></svg><h3>No Tracks Found</h3></center></div></div`;
                fetch(`${window.location.origin}/api/music`).then((res) => {
                    // get the status code 
                    if (res.status == 500) {
                        res.json().then((val) => {
                            raiseError(val.message);
                        })
                        return;
                    }
                    else if (res.status == 400) {
                        res.json().then((val) => {
                            raiseError("An active sync in in session. Please wait for it to finish.");
                        })
                        return;
                    }
                    res.json().then((val) => {
                        const calc_duration = (stream) => {
                            const hours = Math.floor(stream / 3600);
                            const minutes = Math.floor((stream % 3600) / 60);
                            const seconds = Math.floor(stream % 60);
                            let duration = "";
                            if (hours > 0) {
                                duration += hours + ":";
                            }
                            if (minutes < 10) {
                                duration += "0";
                            }
                            duration += minutes + ":";
                            if (seconds < 10) {
                                duration += "0";
                            }
                            duration += seconds;
                            return duration;
                        }
                        const song_list = document.querySelector("#song_list");
                        let songs = ""
                        if (val.length == 0) {
                            document.querySelector("#music_insights").innerHTML = `<button onclick="syncTrackList()"><i class="fa-solid fa-sync"></i> Resync Library</button>`;
                            song_list.innerHTML = `<div class="w-100 h-100 align-center"><div class="error_log"><center><svg xmlns="http://www.w3.org/2000/svg" class="icon-poster" width="16" height="16"fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16"><path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" /></svg><h3>We couldn't find any music. Resync track to start a local search.</h3></center></div></div>`;
                        } else {
                            document.querySelector("#music_insights").innerHTML = `Found ${val.length} tracks`;
                            for (let x = 0; x < val.length - 1; x++) {
                                songs += `<div class="song" data-title="${val[x].title}" data-artist="${(val[x].artist == null) ? "an unknown artist" : val[x].artist}" data-music-id="${val[x].id}"><div class="song_control"><img src='http://127.0.0.1/api/music/${val[x].id}/albumart/100' alt="🎶"></div><div class="song_title">${val[x].title}</div><div class="song_artist">${(val[x].artist == null) ? "Unknown Artist" : val[x].artist}</div><div class="song_album">${(val[x].album == null) ? "Unknown Album" : val[x].album}</div><div class="song_duration">${calc_duration(val[x].duration)}</div><div class="song_control more_options">${icons.elispis}</div></div>`;
                            }
                            song_list.innerHTML = songs;
                            document.querySelectorAll(".song").forEach((song) => {
                                song.addEventListener("click", (e) => {
                                    var elem = (e.target as HTMLElement).parentElement;
                                    if (elem.classList.contains("more_options"))
                                        return
                                    if (elem.getAttribute("data-music-id") != null || elem.parentElement.getAttribute("data-music-id") != null) {
                                        playMusic(elem.getAttribute("data-music-id") || elem.parentElement.getAttribute("data-music-id"));
                                    } else {
                                    }
                                });
                            });
                            document.querySelectorAll(".more_options").forEach((song) => {
                                song.addEventListener("click", (e) => {
                                    var elem = (e.target as HTMLElement).parentElement;
                                    if (elem.getAttribute("data-music-id") != null || elem.parentElement.getAttribute("data-music-id") != null) {
                                        var music_title = elem.getAttribute("data-title") || elem.parentElement.getAttribute("data-title");
                                        new Options([["Play Now", ""], ["Play Next", ""], ["Add to Queue", ""], ["Add to Playlist", ""], ["View Album", ""], ["View Song Information", ""], ["Delete", ""]], "Close", music_title, true);
                                    } else {
                                    }
                                });
                            });
                        }
                    })
                }).catch((err) => {
                    raiseError(err);
                })
            }
    }
}

document.querySelectorAll(".navigate").forEach((nav) => {
    nav.addEventListener("click", () => {
        console.log(nav.getAttribute("data-route"));
        document.querySelector(".navigate.selected").classList.remove("selected");
        nav.classList.add("selected");
        changeMainView(routes[nav.getAttribute("data-route")].html);
        setTimeout(() => {
            routes[nav.getAttribute("data-route")].js();
        }, 550);
    });
});