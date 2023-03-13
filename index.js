
/* Öffnen und schließen des mobilen Menü's */

document.getElementById("open_mobile_menue_button").onclick = function() {
    
    if (document.getElementById("mobile_menue").classList.contains("mobileMenue_closed")) {
        document.getElementById("mobile_menue").classList.remove("mobileMenue_closed");
        document.getElementById("mobile_menue").classList.add("mobileMenue_opened");

        document.getElementById("mobile_menue").classList.add("mobileMenue_opened_under_one_second_ago");
        setTimeout(function() {
            document.getElementById("mobile_menue").classList.remove("mobileMenue_opened_under_one_second_ago");
        }, 100);
    }
    else {
        document.getElementById("mobile_menue").classList.remove("mobileMenue_opened");
        document.getElementById("mobile_menue").classList.add("mobileMenue_closed");
    }
}


document.getElementById("page").onclick = function() {

    if (document.getElementById("mobile_menue").classList.contains("mobileMenue_opened_under_one_second_ago") != true) {
        document.getElementById("mobile_menue").classList.remove("mobileMenue_opened");
        document.getElementById("mobile_menue").classList.add("mobileMenue_closed");
    }
}


/* Bildergallerie */

function openPhotoGallery(clickedPhoto) {

    document.getElementsByClassName("photo_gallery")[0].classList.toggle("photo_gallery_closed");
    document.getElementsByClassName("shade_site")[0].classList.toggle("shade_site_closed");

    let gallery_image = document.getElementById("photo_gallery_main_image");
    gallery_image.src = clickedPhoto.src;
    
}

document.getElementsByClassName("shade_site")[0].onclick = function() {
    document.getElementsByClassName("photo_gallery")[0].classList.toggle("photo_gallery_closed");
    document.getElementsByClassName("shade_site")[0].classList.toggle("shade_site_closed");
}

document.getElementsByClassName("close_photogallery")[0].onclick = function() {
    document.getElementsByClassName("photo_gallery")[0].classList.toggle("photo_gallery_closed");
    document.getElementsByClassName("shade_site")[0].classList.toggle("shade_site_closed");
}

