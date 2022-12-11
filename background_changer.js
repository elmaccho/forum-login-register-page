window.onload = function () {

    function changeImage() {   
        var BackgroundImg=[
            "./img/background/image1.jpg",
            "./img/background/image2.jpg",
            "./img/background/image3.jpg"
        ];
        var i = Math.floor((Math.random() * 3));
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 7000);
}