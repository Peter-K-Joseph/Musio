const accounts = {
    0: {
        "name": {
            "first": "Peter",
            "last": "K Joseph"
        },
        "profile": "./resources/profile1.jpeg"
    },
    1: {
        "name": {
            "first": "Anagh",
            "last": "N Manoj"
        },
        "profile": "./resources/profile2.jpeg"
    },
    2: {
        "name": {
            "first": "Arohi",
            "last": "Varshney"
        },
        "profile": "./resources/profile3.jpeg"
    }
};
const youtube_music = {
    1: {
        "link": "yO28Z5_Eyls"
    },
    2: {
        "link": "gFeZrkdfKZk"
    },
    3: {
        "link": "MJyKN-8UncM"
    },
    4: {
        "link": "He5NctQPXK8"
    },
    5: {
        "link": "bzSTpdcs-EI"
    }
};
function add_to_fav(id) {
    const fav_off = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 471.701 471.701" xml:space="preserve"><g><path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"/></g></svg>`;
    const fav_on = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 544.582 544.582" style="fill: var(--option);" xml:space="preserve"><g>    <path d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839   C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876   c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z"/></g></svg>`;
    const current = document.getElementById("favourite_" + id);
    if (current.getAttribute("isFav") == "false") {
        current.setAttribute("isFav", "true");
        current.innerHTML = fav_on;
    }
    else {
        current.setAttribute("isFav", "false");
        current.innerHTML = fav_off;
    }
}
