import './styles.css';

const slideShow = (totalSlides) => {
    let slideIndex = 0;
    totalSlides = totalSlides;

    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    const incrementSlide = () => {
        slideIndex = mod(slideIndex+1,totalSlides);
    }

    const decrementSlide = () => {
        slideIndex = mod(slideIndex-1,totalSlides);
    }

    const getSlide = () => {
        return slideIndex;
    }

    return {
        incrementSlide, 
        decrementSlide,
        getSlide
    };
}

const slideShowDisplayModule = () => {
    const displaySlide = (slideNode) => {
        slideNode.classList.toggle("visible");
    }

    return {
        displaySlide,
    }
}




const webpageLoader = (() => {
    const carousel = slideShow(3);
    const displayModule = slideShowDisplayModule();

    const picture_one = document.querySelector(".picture_one");
    const picture_two = document.querySelector(".picture_two");
    const picture_three = document.querySelector(".picture_three");

    const resetSlide = () => {
        [picture_one,picture_two,picture_three].forEach((item) => {
            if(item.classList.toggle("visible") === true) {
                item.classList.toggle("visible");
            }
        })
    }

    const nextSlide = (() => {
        const nextButton = document.querySelector(".next_arrow");
        nextButton.addEventListener("click", () => {
            resetSlide();
            displayModule.displaySlide(picture_two);
        })
    })();

    console.log(carousel.getSlide());
})();