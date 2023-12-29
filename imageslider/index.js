const initSlider = () =>{
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollBar = document.querySelector(".container .slider-scrollbar");
    const ScrollBarThumb = sliderScrollBar.querySelector(".scrollbar-thumb");
    const maxScrollleft =imageList.scrollWidth - imageList.clientWidth; 

    slideButtons.forEach(button=>{
        button.addEventListener("click", ()=>{
           const direction = button.id === "prev-slide" ? -1: 1;
           const scrollAmount = imageList.clientWidth * direction;
           imageList.scrollBy({left:scrollAmount,behavior:"smooth"})
        });
    }); 

    const handleSlideButtons = ()=>{
        slideButtons[0].style.display = imageList.scrollLeft <=0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >=maxScrollleft ? "none" : "block";
    }
    const updatScrollThumbPosition = ()=>{
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollleft) * (sliderScrollBar.clientWidth - ScrollBarThumb.offsetWidth);
        ScrollBarThumb.style.left = `${thumbPosition}px`;

        
    }
    imageList.addEventListener("scroll", ()=>{
        handleSlideButtons();
        updatScrollThumbPosition();
    })

}

window.addEventListener("load", initSlider);