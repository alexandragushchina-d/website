function changeImage() {
    var first_run = (index_img == -1);
    if (first_run) {
        index_img = 0;
    }

    var img = document.getElementById("home_img");
    var img_url = images[index_img];
    ++index_img;

    if(index_img >= images.length) {
        index_img = 0;
    }

    if (first_run) {
        img.style.opacity = 0;
        img.src = img_url;
        fadeImg(img, 0, false, "");
        setTimeout(changeImage, img_change_timeout);
    } else {
        fadeImg(img, 100, true, img_url);
    }
}

// decrease transparency of the current image
function fadeImg(img, factor, fade, img_url) {
    if(fade) {
        --factor;
    } else {
        ++factor;
    }

    if(factor > 0 && factor < 100 && img.src != "") {
        img.style.opacity = factor / 100;
        setTimeout(function() { fadeImg(img, factor, fade, img_url); }, 10);
    } else if (img_url != "") {
        img.src = img_url;
        setTimeout(function() { fadeImg(img, 0, false, ""); }, 10);
        setTimeout(changeImage, img_change_timeout);
    }

}

var images = [], index_img = -1;
var img_change_timeout = 5000;
images[0] = "image/home_images/home_1.jpg";
images[1] = "image/home_images/home_2.jpg";
images[2] = "image/home_images/home_3.jpg";
images[3] = "image/home_images/home_4.jpg";
images[4] = "image/home_images/home_5.jpg";
