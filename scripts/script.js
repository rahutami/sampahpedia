import { getNavbar, getFooter } from './navbar-footer-template.js'
import { navbarItems, footerItems, jumbotronText, infoText} from './data.js'
import { getJumbotron } from "./jumbotron.js"

// Function to append an element created by other functions to the document
let constructor = (el, target) => {
    // element is the element needs to be apended, target is the element in which the element want to be appended
    target.appendChild(el)
    return true
}

constructor(getNavbar(navbarItems, {title : "SampahPedia", link : "#"}, "rgba(0,0,0,0.8)"), document.querySelector('.navbar-placeholder'));
constructor(getFooter(footerItems,6), document.querySelector('.footer-placeholder'))
constructor(getJumbotron(jumbotronText.heading, jumbotronText.subtext), document.querySelector('.jumbotron-placeholder-1'))
constructor(getJumbotron(infoText.heading, infoText.subtext, "", "right", "black"), document.querySelector('.jumbotron-placeholder-2'))