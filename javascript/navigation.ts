function navigate(id, btn_Id){
    $(".section").addClass("d-none")
    $(`#${id}`).removeClass("d-none")
    $(".selected").removeClass("selected")
    $(`#${btn_Id}`).addClass("selected");
}

// Show Logged in Users to switch
$("#alt_user").on("mouseover", () => {
    let otherUser = "";
    $("#alt_user").css("display", "none");
    for (let i = 0; i < Object.values(accounts).length; i++) {
        otherUser = otherUser + `<div class="avatar_image" style="background-image: url('${Object.values(accounts)[i].profile}')"></div>`;
    }
    $("#other-accounts").html(otherUser);
})

$(".accounts").on("mouseleave", () => {
    $("#other-accounts").html("");
    $("#alt_user").css("display", "initial");
})