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

    const setSlide = (index) => {
        slideIndex = index;
    }

    return {
        incrementSlide, 
        decrementSlide,
        getSlide,
        setSlide
    };
}

const slideShowDisplayModule = () => {
    const displaySlide = (slideNode) => {
        slideNode.classList.toggle("visible");
    }

    const displayDot = (dotNode) => {
        dotNode.classList.toggle("visible_dot");
    }

    return {
        displaySlide,
        displayDot
    }
}




const webpageLoader = (() => {
    const carousel = slideShow(3);
    const displayModule = slideShowDisplayModule();

    const picture_one = document.querySelector(".picture_one");
    const picture_two = document.querySelector(".picture_two");
    const picture_three = document.querySelector(".picture_three");

    const dot_one = document.querySelector(".dot_one");
    const dot_two = document.querySelector(".dot_two");
    const dot_three = document.querySelector(".dot_three");

    const carouselArray = [picture_one,picture_two,picture_three];

    const dotArray = [dot_one,dot_two,dot_three];

    const dotArrayValue = ["dot_one","dot_two","dot_three"];

    const resetSlide = () => {
        carouselArray.forEach((item) => {
            if(item.classList.toggle("visible") === true) {
                item.classList.toggle("visible");
            }
        })
    }

    const resetDot = () => {
        dotArray.forEach((item) => {
            if(item.classList.toggle("visible_dot") === true) {
                item.classList.toggle("visible_dot");
            }
        })
    }

    const defaultSlideLoad = (() => {
        let index = carousel.getSlide();
        let slideNode = carouselArray[index];
        let dotNode = dotArray[index];
        resetSlide();
        resetDot();
        displayModule.displaySlide(slideNode);
        displayModule.displayDot(dotNode);
    })();

    const nextSlide = (() => {
        const nextButton = document.querySelector(".next_arrow");
        nextButton.addEventListener("click", () => {
            carousel.incrementSlide();
            let index = carousel.getSlide();
            let slideNode = carouselArray[index];
            let dotNode = dotArray[index];
            resetSlide();
            resetDot();
            displayModule.displaySlide(slideNode);
            displayModule.displayDot(dotNode);
        })
    })();

    const prevSlide = (() => {
        const prevSlide = document.querySelector(".prev_arrow");
        prevSlide.addEventListener("click", () => {
            carousel.decrementSlide();
            let index = carousel.getSlide();
            let slideNode = carouselArray[index];
            let dotNode = dotArray[index];
            resetSlide();
            resetDot();
            displayModule.displaySlide(slideNode);
            displayModule.displayDot(dotNode);
        })
    })();

    const dotSwitching = (() => {
        dotArray.forEach((item) => {
            item.addEventListener("click", () => {
                let index = dotArrayValue.indexOf(item.dataset.name);
                resetSlide();
                resetDot();
                carousel.setSlide(index);
                let newIndex = carousel.getSlide();
                let slideNode = carouselArray[index];
                let dotNode = dotArray[index];
                displayModule.displaySlide(slideNode);
                displayModule.displayDot(dotNode);
            })
        })
    })();

    console.log(carousel.getSlide());
})();