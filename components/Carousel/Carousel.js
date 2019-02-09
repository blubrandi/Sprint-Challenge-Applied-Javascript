
class Carousel {
    constructor(carouselElement){
        this.carousel = carouselElement;
        this.leftButton = this.carousel.querySelector('.left-button')
        this.rightButton = this.carousel.querySelector('.right-button')
        this.images = this.carousel.querySelectorAll('img')
        this.index = 0
        this.images[this.index].style.display = 'flex'
        this.rightButton.addEventListener('click', () => {this.scrollRight()})
        this.leftButton.addEventListener('click', () => {this.scrollLeft()})   

    }

    scrollRight(){
        this.index++
        if(this.index === 4){
            this.index = 0
        }
        this.images.forEach(image => {
            image.style.display = 'none'
        this.images[this.index].style.display = 'flex'
        })
    }

    scrollLeft(){
        this.index--
        if(this.index < 0){
            this.index = 3
        }
        this.images.forEach(image => {
            image.style.display = 'none'
        })
        this.images[this.index].style.display = 'flex'
    }
}

let carousel = document.querySelector('.carousel')
let newCarousel = new Carousel(carousel)



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/