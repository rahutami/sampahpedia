let style = document.createElement('style')

style.innerHTML = `
    
    .navbar {
        padding : 0.5rem 24px;
        background-color: #1e1b24;
        color : white;
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .menu-item{
        padding: 1rem;
        color: white;
    }
    

    .menu-item a {
        text-decoration: none;
        color : white;
        font-size : 1.2rem;
        font-family : 'Montserrat', sans-serif;
    }

    
    .logo-item a { 
        font-size : 2rem;
    }

    .footer {
        color : white;
        background-color : #357843;
        padding : 1rem;
        padding-bottom : 3rem;
    }

    .inner-footer {
        border-bottom : 2px solid white;
        padding : 1rem;
        margin : 1rem;
    }

    .footer-item {
        padding : 0.5rem;
    }
    .footer-item ul li {
        text-decoration : none;
        list-style-type : none;
        margin-bottom : 15px;
    }
`
let ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);

// Function to add navbar into 
let getNavbar = (navItems = [], logo = null) => {
    let navbar = document.createElement('navbar');
    navbar.className = 'navbar'
    let template = (navItem) => {
        return `
        <div class="menu-item">
        <a href="${navItem.link}"> ${navItem.title} </a>
        </div>
        `
    }
    
    // Using foreach so the navbar will be flexible no matter how many menu will be added. 
    navItems.forEach((item) => {
        navbar.innerHTML += template(item)
    })

    if ( logo ){
        let placeholder = `
            <div class="menu-item logo-item">
                <a href="${logo.link}"> ${logo.title} </a>
            </div> 
        `
        
        navbar.innerHTML = placeholder + navbar.innerHTML
    }

    return navbar // Returns a Navbar Element which need to be appended
}




let getFooter = ( footerItems = [], columnNum = 3, rowNum = 3, ) => {
    let footer = document.createElement('footer');
    let innerFooter = document.createElement('div')
    footer.appendChild(innerFooter)
    footer.className = 'footer'
    innerFooter.className = 'inner-footer'
    innerFooter.style.display = 'grid';
    innerFooter.style.gridTemplateColumns = `repeat(${columnNum}, 1fr)`
    innerFooter.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`
    innerFooter.style.gridGap = '20px'

    let text = document.createElement('div')
    text.className = "footer-item"
    text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Morbi iaculis mi quam, non commodo sapien consectetur commodo. 
    Pellentesque ut libero eget velit egestas volutpat nec sit amet massa. 
    Proin tortor sem, vulputate vitae sem ut, porttitor sollicitudin ligula. 
    Ut quis vulputate sem.`
    text.style.wordSpacing = "5px"

    innerFooter.appendChild(text)
    
    let template = (item) => {
        return `
        <div class="footer-item">
            ${item.title}
        </div>
        `
    }

    footerItems.forEach((item) => {
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

    let copyright = document.createElement('p')
    copyright.textContent = ` Copyright © 2020 Ecologia. All Rights Reserved`
    copyright.style.textAlign = 'center'

    footer.insertAdjacentElement('beforeend', copyright)

    return footer
}

// Menu list for navbar
let navbarItems = [
    {
        title : "Home",
        link : "#"
    },{
        title : "About",
        link : "#"
    },{
        title : "Agent",
        link : "#"
    },
] 

let footerItems = [
    [{
        title : "Tentang Kami",
        link : "#"
    },{
        title : "Artikel",
        link : "#"
    },{
        title : "Daur Ulang",
        link : "#"
    }],
    {
        title : "Email",
        link : "#"
    },
]

// Function to append an element created by other functions to the document
let constructor = (el, target) => {
    // element is the element needs to be apended, target is the element in which the element want to be appended
    target.appendChild(el)
    return true
}

constructor(getNavbar(navbarItems, {title : "Sampahpedia", link : "#"}), document.querySelector('.navbar-placeholder'));
constructor(getFooter(footerItems,3,3), document.querySelector('.footer-placeholder'))




// let getFooter = ( footerItems, columnNum, rowNum) => {
//     let footer = document.createElement('footer');
//     footer.className = 'footer'
//     footer.style.display = 'grid';
//     footer.style.gridTemplateColumns = `repeat(${columnNum}, auto)`
//     footer.style.gridTemplateRows = `repeat(${rowNum}, auto)`
    
//     let template = (item) => {
//         return `
//         <div class="footer-item">
//             ${item.title}
//         </div>
//         `
//     }

//     footerItems.forEach((item) => {
//         footer.innerHTML += template(item)
//     })



//     console.log(footer)
//     return footer
// }