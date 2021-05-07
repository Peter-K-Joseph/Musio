$("body").on("click", () => {
    if (document.getElementById("options").innerHTML != "") {
        $("#options").addClass("hidden");
        $("#body").removeClass("option_active");
        setTimeout(() => { $("#options").html(""); }, 500)
    }
})

function displayOptions(options, danger){
    let inner_option:string = "";
    for (let i = 0; i < options.length; i++)
            inner_option = inner_option + `<div class="option" onclick="${options[i][1]}">${options[i][0]}</div>`; 
        if (document.getElementById("options").innerHTML != "") {
            $("#options").addClass("hidden");
            $("#body").removeClass("option_active");
            setTimeout(() => { $("#options").html(""); }, 500)
            setTimeout(() => {
                $("#options").append(`<div class="container"><div class="heading">Options</div>${inner_option}<div class="option danger">${danger}</div></div>`).removeClass("hidden");
                $("#body").addClass("option_active");
            }, 550)
        } else {
            $("#options").append(`<div class="container"><div class="heading">Options</div>${inner_option}<div class="option danger">${danger}</div></div>`).removeClass("hidden");
            $("#body").addClass("option_active");
        }
}

$(".more_icon")
    .on("click", () => {
        let options = [
            ["Play", `play{${this}}`], 
            ["Download", `download(${this})`], 
            ["Add to Favourite", `add_to_fav(${this})`], 
            ["Add to Playlist", `add_to_playlist(${this})`]
        ];
        displayOptions(options, "Delete");
    })
    .html(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210 210"style="enable-background:new 0 0 210 210;" xml:space="preserve"><g id="XMLID_88_">  <path id="XMLID_89_"    d="M25,80C11.215,80,0,91.215,0,105s11.215,25,25,25c13.785,0,25-11.215,25-25S38.785,80,25,80z" />  <path id="XMLID_91_"    d="M105,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S118.785,80,105,80z" />  <path id="XMLID_93_"    d="M185,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S198.785,80,185,80z" /></svg>`);

//Init Load;
$(".avatar_image").css("background-image", `url(${user["profile"]})`);
$(".first_name").html(user["name"]["first"]);
// $(".themeSelector").on("click", themeChange);
$(".themeSelector").on("click", ()=>{
    let inner_option = "";
    let availibleThemes = [["Dark Theme", "themeChange('Dark Theme')"], ["Light Theme", "themeChange('Light Theme')"], ["Red Berry", "themeChange('Red Berry')"], ["Blu Sky", "themeChange('Blu Sky')"]];
    displayOptions(availibleThemes, "Close");
});

function themeChange(selected) {  
    document.documentElement.setAttribute('data-theme', selected);
    $(".themeSelector").html(selected);
    user["isLightTheme"] = selected;
}

themeChange(user["Theme"])

$("#show_lyrics").on("click", ()=>{
    if ($(".lyrics-tab").hasClass("disabled")){
        $(".lyrics-tab").removeClass("disabled");
        $("#show_lyrics").addClass("activated");  
    } else {
        $(".lyrics-tab").addClass("disabled");
        $("#show_lyrics").removeClass("activated");  
    }
})

$("#btn-to-liked").on("click", ()=>{
    console.log(`${this.id}`);
    $("#info-by-album").addClass("d-none");
    $("#liked-songs-section").removeClass("d-none");
    $(".selected").removeClass("selected");
    $(`#btn-to-liked`).addClass("selected");
})