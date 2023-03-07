a = document.querySelectorAll(".testimonial")[0] 

document.querySelectorAll(".testimonial").forEach(testimonial => {

    let photos = [testimonial.querySelector(".before"), testimonial.querySelector(".during"),testimonial.querySelector(".now")]
    a = testimonial
    photos[0].addEventListener("click", event => {
        photos[0].style.zIndex = 3
        photos[1].style.zIndex = 2
        photos[2].style.zIndex = 1
    })
    photos[1].addEventListener("click", event => {
        photos[0].style.zIndex = 1
        photos[1].style.zIndex = 2
        photos[2].style.zIndex = 1
    })
    photos[2].addEventListener("click", event => {
        photos[0].style.zIndex = 1
        photos[1].style.zIndex = 2
        photos[2].style.zIndex = 3
    })
});