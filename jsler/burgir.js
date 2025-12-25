function burgirgetir() {
    let yanmenu = document.getElementsByClassName("yanmenu")[0];
    if (yanmenu.style.left === "0px") {
        yanmenu.style.left = "-260px";
    } else {
        yanmenu.style.left = "0px";
    }

}