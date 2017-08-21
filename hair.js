function changeImage()
{
    var img = document.getElementById("img");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    }

    fadeImg(img, 100, true);
    setTimeout("changeImage()", 30000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 15);
    }
}

var images = [],
x = 0;

images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";
images[3] = "image4.jpg"
setTimeout("changeImage()", 30000);
