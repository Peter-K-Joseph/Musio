const changeMainView = (view) => {
    document.querySelector("#interactive_viewport").classList.add("change_view");
    setTimeout(() => {
        document.querySelector("#interactive_viewport").innerHTML = view;
        document.querySelector("#interactive_viewport").classList.remove("change_view");
    }, 500);
};
const update_player_info = (title, subtitle, album_art) => {
    document.querySelector("#player_title").innerHTML = title;
    document.querySelector("#player_subtitle").innerHTML = subtitle;
    if (album_art != null) {
        document.querySelector("#album_art").style.backgroundImage = `url(${album_art})`;
    }
};
