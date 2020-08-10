import { createLogin } from "./login.js"


// Styling for elements created on this script 
let style =  `
    
    .navbar {
        padding : 0 5rem;
        // background-color: #1e1b24;
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .push {
        margin-left : auto;
    }

    .menu-item{
        padding: 1rem;
        color: white;
        min-height : 80px;
        display : grid;
        align-items : center;
    }
    

    .menu-item a {
        text-decoration: none;
        color : white;
        font-size : 1rem;
        font-family : 'Montserrat', sans-serif;
    }

    
    .logo-item a { 
        height : inherit;
    }

    .logo-item {
        height : 180px;
    }
    
    .logo-item img {
        max-width : 100%;
        max-height : 100%;
    }

    .footer {
        color : white;
        background-color : #357843;
        padding : 1rem;
        padding-bottom : 3rem;
    }

    .inner-footer {
        border-bottom : 2px solid white;
        padding : 1rem 0rem;
        margin : 1rem 5rem;
        padding-bottom : 2rem;
    }

    .footer-item {
        padding : 0.5rem 0rem;
    }
    .footer-item ul li {
        text-decoration : none;
        list-style-type : none;
        margin-bottom : 15px;
    }
`
let ref = document.querySelector('#MAIN_STYLE');
ref.innerHTML += style

// Function to add navbar into 
let getNavbar = (navItems = [], logo = null, background = 'None', align = 'left') => {
    let navbar = document.createElement('navbar');
    navbar.className = 'navbar'
    navbar.style.background = background
    let template = (navItem) => {
        return `
        <div class="menu-item">
            <a href="${navItem.link}"> ${navItem.title} </a>
        </div>
        `
    }
    
    // Using foreach so the navbar will be flexible no matter how many menu will be added. 
    navItems.forEach((item, i) => {
        if ( i === 0 && align === 'left') {
            navbar.innerHTML = `
                <div class="menu-item push">
                    <a href="${item.link}"> ${item.title} </a>
                </div>
            `
        } else {
            navbar.innerHTML += template(item)
        }
        
    })

    if ( logo ){

        let placeholder = `
            <div class="menu-item logo-item">
                <a href="${logo.link}"> <img src=${logo.img}> </img> </a>
            </div> 
        `
        
        navbar.innerHTML = placeholder + navbar.innerHTML
    }

    navbar.appendChild(createLogin())

    return navbar // Returns a Navbar Element which need to be appended
}




let getFooter = ( footerItems = [], columnNum = 3, rowNum = 0, ) => {
    let footer = document.createElement('footer');
    let innerFooter = document.createElement('div')
    footer.appendChild(innerFooter)
    footer.className = 'footer'
    innerFooter.className = 'inner-footer'
    // Creating a footer with grid template
    innerFooter.style.display = 'grid';
    innerFooter.style.gridTemplateColumns = `repeat(${columnNum}, 1fr)`
    innerFooter.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`
    innerFooter.style.gridGap = '20px'

    // Not Important, only a placeholder
    let text = document.createElement('div')
    text.className = "footer-item"
    text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Morbi iaculis mi quam, non commodo sapien consectetur commodo. 
    Pellentesque ut libero eget velit egestas volutpat nec sit amet massa. 
    Proin tortor sem, vulputate vitae sem ut, porttitor sollicitudin ligula. 
    Ut quis vulputate sem.`
    text.style.wordSpacing = "5px"
    text.style.gridColumn = "1 / span 2";

    innerFooter.appendChild(text)
    
    // Template for adding items
    let template = (item) => {
        return `
        <div class="footer-item">
            ${item.title}
        </div>
        `
    }

    footerItems.forEach((item) => {
        // Only Run if the current item is not a singular item
        if ( Array.isArray(item) ){
            let placeholder = document.createElement('div') 
            placeholder.className = "footer-item"
            placeholder.appendChild(document.createElement('ul'))
            let template = (i) => `<li> ${i.title}</li>`
            item.forEach((i) => {
                placeholder.firstChild.innerHTML += template(i)
            })
            innerFooter.appendChild( placeholder)
        } else {
            innerFooter.innerHTML += template(item)
        }
        
    })

    // Might not stay 
    let copyright = document.createElement('p')
    copyright.textContent = ` Copyright © 2020 Ecologia. All Rights Reserved`
    copyright.style.textAlign = 'center'

    footer.insertAdjacentElement('beforeend', copyright)

    // Returning a footer element
    return footer
}


export { getFooter, getNavbar }
