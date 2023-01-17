// sync music list in backend
const syncTrackList = () => {
    player.updatePlayerInfo("Syncing...", "We are currently syncing your local music", null, false);
    Notiflix.Loading.Remove();
    fetch(`${window.location.origin}/api/sync`).then((res) => {
        res.json().then((val) => {
            if (val.status == "success") {
                player.updatePlayerInfo("Sync completed", "Music Sync is now completed", null, true);    
                if (document.querySelector("#song_list") != null) {
                    routes.songs.js();
                }
            } else {
                Notiflix.Notify.Failure('Failed to update music library');
            }
        })
    })
}

const playMusic = (id: string) => {
    fetch(`${window.location.origin}/api/music/${id}`).then((res) => {
        res.json().then((val) => {
            if (val.status == "success") {
                player.updatePlayerInfo(val.name, `By ${(val.artist)? val.artist: 'an unknown artist'} from ${(val.album)? val.album: 'an unknown album'}`, `${window.location.origin}/api/music/${id}/albumart/100`, false);
            } else {
                player.updatePlayerInfo("Unable to Play", `An unknown error has occurred. View log to know more`, null, true);
            }
        })
    })
}