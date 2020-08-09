import { getNavbar, getFooter } from './navbar-footer-template.js'
import { navbarItems, footerItems, jumbotronText, infoText, dummy, galleryItems} from './data.js'
import { createJumbotron } from "./jumbotron-template.js"
import { createSection } from "./section-template.js"
import { createArticleG } from "./a-gallery-template.js"

// Function to append an element created by other functions to the document
let constructor = (el, target) => {
    // element is the element needs to be apended, target is the element in which the element want to be appended
    target.appendChild(el)
    return true
}


constructor(getNavbar(navbarItems, {title : "SampahPedia", link : "./main.html"}, "rgba(0,0,0,0.2)"), document.querySelector('.navbar-placeholder'));
constructor(getFooter(footerItems,6), document.querySelector('.footer-placeholder'))
constructor(createJumbotron(jumbotronText.heading, jumbotronText.subtext,"", "left", jumbotronText.style), document.querySelector('.headerSection'))
constructor(createJumbotron(infoText.heading, infoText.subtext, "./assets/img-1.png", "right", infoText.style), document.querySelector('.infoSection'))

let header = document.createElement('div')
header.className = 'gallery-header'
header.innerText = 'Apa yang bisa kita lakukan?'

let items = new Array()
items.push(header)
galleryItems.forEach( item => {
    items.push(createArticleG(item.img, item.text))
})

constructor(createSection(0,3,"Article_Gallery", items), document.querySelector('.section'))
// constructor(createSection(6,6,"Carousel", dummy()), document.querySelector('.section'))

export { constructor }


