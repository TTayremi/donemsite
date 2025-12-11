let sonFiyat;
function arttirma() {
    let adet = parseInt(document.getElementById("UrunAdet").innerHTML)
    let Fiyat = parseInt(document.getElementById("FiyatDeger").innerHTML)
    adet = adet + 1
    sonFiyat = adet * Fiyat

    document.getElementById("UrunAdet").innerHTML = adet
    document.getElementById("sonFiyatDeger").innerHTML = sonFiyat


}

function azaltma() {
    let adet = parseInt(document.getElementById("UrunAdet").innerHTML)
    let Fiyat = parseInt(document.getElementById("FiyatDeger").innerHTML)


    if (adet > 1) {
        adet = adet - 1
        sonFiyat = adet * Fiyat

        document.getElementById("UrunAdet").innerHTML = adet
        document.getElementById("sonFiyatDeger").innerHTML = sonFiyat

    }
    else {
        return
    }

}