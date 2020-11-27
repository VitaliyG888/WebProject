document.addEventListener('DOMContentLoaded', function () {


    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(posTop);

    let isScrolling = false;

    window.addEventListener("scroll", throttleScroll, false);

    function throttleScroll(e) {
        if (isScrolling == false) {
            window.requestAnimationFrame(function () {
                scrolling(e);
                isScrolling = false;
            });
        }
        isScrolling = true;
    }

    document.addEventListener("DOMContentLoaded", scrolling, false);

    let experienceImageEl = document.querySelector("#experiencImage");

    let mistakesImageEl = document.querySelector("#mistakesImage");

    let advantagesHeadingEl = document.querySelector("#advantagesHeading");

    let outsourcingHeadingEl = document.querySelector("#outsourcingHeading");


    function scrolling(e) {

        if (isFullyVisible(experienceImageEl)) {
            experienceImageEl.classList.add("active");
        } else {
            experienceImageEl.classList.remove("active");
        }

        if (isFullyVisible(experienceImageEl)) {
            experienceHeading.classList.add("active");
        } else {
            experienceHeading.classList.remove("active");
        }

        if (isFullyVisible(experienceImageEl)) {
            experienceDescription.classList.add("active");
        } else {
            experienceDescription.classList.remove("active");
        }



        if (isFullyVisible(mistakesImageEl)) {
            mistakesImageEl.classList.add("active");
        } else {
            mistakesImageEl.classList.remove("active");
        }

        if (isFullyVisible(mistakesImageEl)) {
            mistakesHeading.classList.add("active");
        } else {
            mistakesHeading.classList.remove("active");
        }

        if (isFullyVisible(mistakesImageEl)) {
            mistakesDescription.classList.add("active");
        } else {
            mistakesDescription.classList.remove("active");
        }



        if (isPartiallyVisible(advantagesHeadingEl)) {
            advantages.classList.add("active");
        }

        if (isPartiallyVisible(outsourcingHeadingEl)) {
            outsourcing.classList.add("active");
        }

    }



    function isPartiallyVisible(el) {
        let elementBoundary = el.getBoundingClientRect();

        let top = elementBoundary.top;
        let bottom = elementBoundary.bottom;
        let height = elementBoundary.height;

        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }


    function isFullyVisible(el) {
        let elementBoundary = el.getBoundingClientRect();

        let top = elementBoundary.top;
        let bottom = elementBoundary.bottom;

        return ((top >= 0) && (bottom <= window.innerHeight));
    }


})