import { getNavbar, getFooter } from './navbar-footer-template.js'
import { navbarItems, footerItems, jumbotronText, infoText, dummy} from './data.js'
import { getJumbotron } from "./jumbotron.js"
import { createSection } from "./section.js"

// Function to append an element created by other functions to the document
let constructor = (el, target) => {
    // element is the element needs to be apended, target is the element in which the element want to be appended
    target.appendChild(el)
    return true
}


constructor(getNavbar(navbarItems, {title : "SampahPedia", link : "#"}, "rgba(0,0,0,0.2)"), document.querySelector('.navbar-placeholder'));
constructor(getFooter(footerItems,6), document.querySelector('.footer-placeholder'))
constructor(getJumbotron(jumbotronText.heading, jumbotronText.subtext,"", "left", jumbotronText.style), document.querySelector('.headerSection'))
constructor(getJumbotron(infoText.heading, infoText.subtext, "./assets/img-1.png", "right", infoText.style), document.querySelector('.infoSection'))
constructor(createSection(6,6, dummy()), document.querySelector('.section'))
constructor(createSection(6,6, dummy()), document.querySelector('.section'))




