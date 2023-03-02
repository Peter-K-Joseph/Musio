const icons = {
    "play": `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M955 4592 c-22 -11 -48 -29 -58 -40 -48 -53 -46 23 -47 -1987 0 -1271 3 -1902 10 -1927 23 -81 109 -138 186 -123 31 5 715 379 3431 1872 72 40 108 78 124 133 16 52 -1 110 -44 155 -49 50 -3464 1924 -3520 1931 -29 3 -54 -1 -82 -14z"/></g></svg>`,
    "elispis": `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M514 3220 c-86 -22 -157 -57 -241 -117 -160 -113 -273 -338 -273 -543 0 -206 112 -429 273 -544 144 -103 275 -142 446 -133 184 9 314 68 447 202 134 135 195 282 195 475 0 126 -16 195 -73 310 -83 170 -269 316 -454 355 -95 20 -233 18 -320 -5z"/> <path d="M2392 3220 c-251 -67 -430 -249 -494 -501 -16 -67 -20 -103 -16 -188 13 -286 186 -518 457 -615 79 -28 97 -31 216 -31 117 0 139 3 219 29 205 67 359 221 433 431 25 72 28 93 28 215 0 122 -3 143 -28 215 -73 207 -227 362 -427 429 -115 39 -279 46 -388 16z"/> <path d="M4275 3224 c-181 -44 -362 -188 -443 -354 -57 -116 -73 -184 -73 -310 0 -125 16 -194 72 -309 33 -66 60 -103 123 -166 133 -134 263 -193 447 -202 286 -15 534 134 655 392 153 330 15 728 -309 892 -139 70 -325 92 -472 57z"/> </g> </svg> `
};
class Options {
    options;
    danger;
    display;
    autoclose;
    constructor(options, danger, display, autoclose) {
        console.log("Recieved Controller Options: ", options, danger, display, autoclose);
        this.options = options;
        this.danger = danger;
        this.display = display;
        this.autoclose = autoclose;
        this.displayOptions();
    }
    displayOptions() {
        let inner_option = "";
        const options_container = document.querySelector("#options");
        for (let i = 0; i < this.options.length; i++)
            inner_option = inner_option + `<div><button class="option" onclick="${this.options[i][1]}">${this.options[i][0]}</button></div>`;
        options_container.classList.add("hidden");
        document.querySelector(".viewport").classList.remove("option_active");
        options_container.innerHTML = "";
        setTimeout(() => {
            options_container.innerHTML = options_container.innerHTML + `<div class="container"><div class="heading">${this.display}</div>${inner_option}<div><button class="option danger">${this.danger}</button></div></div>`;
            options_container.classList.remove("hidden");
            document.querySelector(".viewport").classList.add("option_active");
            this.closeOptionsView();
        }, 50);
    }
    closeOptions(option) {
        option.removeEventListener("click", () => { });
        option.addEventListener("click", () => {
            const options_container = document.querySelector("#options");
            options_container.classList.add("hidden");
            document.querySelector(".viewport").classList.remove("option_active");
            setTimeout(() => { options_container.innerHTML = ""; }, 500);
        });
    }
    closeOptionsView() {
        if (this.autoclose) {
            document.querySelectorAll(".danger, .option").forEach((option) => {
                this.closeOptions(option);
            });
        }
        else {
            document.querySelectorAll(".danger").forEach((option) => {
                this.closeOptions(option);
            });
        }
    }
}
class Player {
    title;
    subtitle;
    album_art;
    constructor() {
        this.updatePlayerInfo("No Track Playing", "Select a music to start playing", null, false);
    }
    updatePlayerInfo = (title, subtitle, album_art, restore) => {
        if (restore) {
            let prev = {
                title: this.title,
                subtitle: this.subtitle,
                album_art: this.album_art
            };
            setTimeout(() => {
                this.updatePlayerInfo(prev.title, prev.subtitle, prev.album_art, false);
            }, 500);
        }
        this.title = title;
        this.subtitle = subtitle;
        this.album_art = album_art;
        document.querySelector("#player_title").innerHTML = title;
        document.querySelector("#player_subtitle").innerHTML = subtitle;
        if (album_art != null) {
            document.querySelector("#album_art").style.backgroundImage = `url(${album_art})`;
        }
    };
}
document.querySelector(".themeSelector").addEventListener("click", () => {
    let availibleThemes = [["Dark Theme", "themeChange('Dark Theme')"], ["Light Theme", "themeChange('Light Theme')"], ["Red Berry", "themeChange('Red Berry')"], ["Blu Sky", "themeChange('Blu Sky')"]];
    new Options(availibleThemes, "Close", "Options", false);
});
function themeChange(selected) {
    document.documentElement.setAttribute('data-theme', selected);
    document.querySelector(".themeSelector").innerHTML = selected;
    localStorage.setItem("theme", selected);
}
const random_bg_color = () => {
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    let InverseRGB = "rgb(" + (255 - red) + ", " + (255 - green) + ", " + (255 - blue) + ")";
    return [bgColor, InverseRGB];
};
if (localStorage.getItem("theme") != null) {
    themeChange(localStorage.getItem("theme"));
    Notiflix.Notify.Success(`Theme set to ${localStorage.getItem("theme")}`);
}
class errorManager {
    constructor(main, sub, traceback) {
        document.querySelector("#interactive_viewport").innerHTML = `<div class="pt-100 align-center"><div><center>
        <svg width="50" height="50" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"> <path d="m731.234002 153.838666v-18.841339c0-4.417534-3.577416-7.997327-7.990382-7.997327h-6.414571c-4.417012 0-7.990383 3.580525-7.990383 7.997327v18.841339h-18.841339c-4.417534 0-7.997327 3.577416-7.997327 7.990383v6.414571c0 4.417011 3.580525 7.990382 7.997327 7.990382h18.841339v18.841339c0 4.417534 3.577416 7.997328 7.990383 7.997328h6.414571c4.417011 0 7.990382-3.580526 7.990382-7.997328v-18.841339h18.841339c4.417534 0 7.997328-3.577416 7.997328-7.990382v-6.414571c0-4.417012-3.580526-7.990383-7.997328-7.990383z" fill="#f87575" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -593.80455139 424.48059756)"></path> </svg>
        <h3>${main}</h3><p>${sub}</p><div class="error"><code>Uncaugh Error (traceback: ${traceback})</code></div></center></div></div>`;
        player.updatePlayerInfo("Application Error", traceback, null, true);
    }
}
const changeMainView = (nav) => {
    document.querySelector("#interactive_viewport").classList.add("change_view");
    console.log(routes[nav]);
    if (routes[nav].load_template) {
        fetch(`${window.location.origin}/${routes[nav].view}`).then((response) => {
            response.text().then((data) => {
                console.log(data);
                setTimeout(() => {
                    try {
                        document.querySelector("#interactive_viewport").innerHTML = data;
                        document.querySelector("#interactive_viewport").classList.remove("change_view");
                        if (routes[nav].js != null) {
                            routes[nav].js();
                        }
                    }
                    catch (err) {
                        new errorManager("A little Alohomora here! Our app's stuck", `We caught an exception while execting ${nav}'s initaliser function inside the changeMainView State manager`, err);
                    }
                }, 500);
            });
        }).catch((err) => {
            new errorManager("A little Alohomora here! Our app's stuck", `We caught an exception while loading ${nav}'s template inside the changeMainView State manager`, err);
        });
    }
    else {
        setTimeout(() => {
            document.querySelector("#interactive_viewport").innerHTML = routes[nav].view;
            document.querySelector("#interactive_viewport").classList.remove("change_view");
        }, 500);
    }
};
const player = new Player;
