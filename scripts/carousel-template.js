import { imgs } from './data.js'


let createCarousel = (imgs = []) => {
    let carousel = document.createElement('div')
    carousel.className = 'information_track_container'

    let imageGallery = document.createElement('ul')
    imageGallery.className = 'image-gallery'

    imgs.forEach( img => {
        let imageGalleryItem = document.createElement('li')
        imageGalleryItem.className = 'information_image_main'
        imageGalleryItem.dataset.thumb = img

        let image = document.createElement('img')
        image.src = img
        
        imageGalleryItem.appendChild(image)
        imageGallery.appendChild(imageGalleryItem)
    
    })

    

    let informationTrack = document.createElement('ul')
    informationTrack.className = 'information_track'
    for ( let i=0; i < 3 ; i++){
        let informationSlide = document.createElement('li')
        informationSlide.className = i === 0 ? 'information_slide current_info' : 'information_slide'
        informationSlide.innerHTML = `
        <div class="information_image clearfix">
            <ul class="image-gallery " class="gallery list-unstyled cS-hidden">
                ${imageGallery.innerHTML}
            </ul>   
        </div>
        <div class="information_agent">
            <h3 class="agent_name">Nama Agen ${i+1}</h3>
            <p class="agent_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
            <p class="agent_other_info">Jakarta | Plastik | Order</p>
            <a href="#" class="btn">Hubungi</a>
        </div>
        `
        informationTrack.appendChild(informationSlide)
    }
    


    let information_nav = document.createElement('div');
    information_nav.className = 'information_nav'

    for ( let i = 0; i < 3; i++){
        let button = document.createElement('button');
        button.className = i === 0 ? "information_indicator current_indicator" : "information_indicator"
        information_nav.appendChild(button)
    } 

    carousel.appendChild(informationTrack);
    carousel.appendChild(information_nav);
    

    return carousel
}

document.querySelector(".information").innerHTML = `<h2 class="section_title">Cara lainnya</h2>
<button class="information_button information_button--left">
    <img src="../assets/left-arrow.svg" alt="Left Arrow">
</button>`

document.querySelector(".information").appendChild(createCarousel(imgs))



document.querySelector(".information").innerHTML += `
<button class="information_button information_button--right">
    <img src="../assets/right-arrow.svg" alt="">
</button>`

import './carousel.js'





























