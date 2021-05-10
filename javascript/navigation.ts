function navigate(id, btn_Id){
    $(".section").addClass("d-none")
    $(`#${id}`).removeClass("d-none")
    $(".selected").removeClass("selected")
    $(`#${btn_Id}`).addClass("selected");
}
