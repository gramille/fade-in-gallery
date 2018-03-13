$(function () {

    /**
     * Apparition successives des miniatures
     */
    var imgLook = Array.prototype.slice.call(document.getElementsByClassName("galleryImg"));

    function imgLoaded() {

        this.src = this.getAttribute("data-src");
        this.classList.add("appeared");
    }

    function appear() {

        var current = imgLook.shift();

        if (imgLook.length) {

            setTimeout(appear, 150);
        }

        if (!current.complete) {

            var loader = new Image();

            loader.addEventListener("load", imgLoaded.bind(current));

            loader.src = current.src;
        } else {

            imgLoaded.call(current);
        }
    }

    if (imgLook.length) {

        appear();
    }

});
