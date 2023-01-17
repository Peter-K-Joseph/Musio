const navigate = (id, btn_Id) => {
    $(".section").addClass("d-none");
    $(`#${id}`).removeClass("d-none");
    $(".selected").removeClass("selected");
    $(`#${btn_Id}`).addClass("selected");
};
// Show Logged in Users to switch
const userList = () => {
    let otherUser = "";
    $("#alt_user").css("display", "none");
    for (let i = 0; i < Object.values(accounts).length; i++) {
        otherUser = otherUser + `<div class="avatar_image" onclick="changeAuth('${i}')" style="background-image: url('${Object.values(accounts)[i].profile}')"></div>`;
    }
    $("#other-accounts").html(otherUser);
};
$("#alt_user").on("mouseover", userList);
$(".accounts").on("mouseleave", () => {
    $("#other-accounts").html("");
    $("#alt_user").css("display", "initial");
});
const changeAuth = (authID) => {
    sessionStorage.setItem("activeUser", `{
        "name": { 
            "first": "${Object.values(accounts)[authID].name.first}",
            "last": "${Object.values(accounts)[authID].name.last}"
        },
        "profile" : "${Object.values(accounts)[authID].profile}"
    }`);
    $(".avatar_image").css("background-image", `url(${Object.values(accounts)[authID].profile})`);
    $(".first_name").html(Object.values(accounts)[authID].name.first);
};