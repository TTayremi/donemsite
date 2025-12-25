let sayac = 0;

function getir() {
    let getirdiv = document.getElementById("getirilen");
    let gonderdiv = document.getElementById("gonder");
    let yazi = document.getElementById("degisenYazi");

    let sure = 400;

    if (sayac % 2 === 0) {

        gonderdiv.classList.add("anim");
        gonderdiv.style.opacity = "0";
        gonderdiv.style.transform = "translateX(-50px)";

        setTimeout(() => {
            gonderdiv.style.display = "none";


            getirdiv.style.display = "flex";
            getirdiv.style.position = "relative"
            getirdiv.style.width = "100%"
            getirdiv.style.right = "0px"
            getirdiv.style.opacity = "0";
            getirdiv.style.transform = "translateX(50px)";

            requestAnimationFrame(() => {
                getirdiv.classList.add("anim");
                getirdiv.style.opacity = "1";
                getirdiv.style.transform = "translateX(0)";
            });

        }, sure);

        yazi.innerHTML = 'Hesabınız var mı? <strong>Giriş yapın</strong>';

    } else {

        getirdiv.classList.add("anim");
        getirdiv.style.opacity = "0";
        getirdiv.style.transform = "translateX(50px)";

        setTimeout(() => {
            getirdiv.style.display = "none";


            gonderdiv.style.display = "flex";
            gonderdiv.style.opacity = "0";
            gonderdiv.style.transform = "translateX(-50px)";

            requestAnimationFrame(() => {
                gonderdiv.classList.add("anim");
                gonderdiv.style.opacity = "1";
                gonderdiv.style.transform = "translateX(0)";
            });

        }, sure);

        yazi.innerHTML =
            'Hesabınız yok mu? <strong style="color: rgb(44, 122, 224);">Hemen Oluşturun</strong>';
    }

    sayac++;
}

function burgirgetir() {
    let yanmenu = document.getElementsByClassName("yanmenu")[0];
    if (yanmenu.style.left === "0px") {
        yanmenu.style.left = "-260px";
    } else {
        yanmenu.style.left = "0px";
    }

}