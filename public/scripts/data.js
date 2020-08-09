
// Menu list for navbar
let navbarItems = [
    {
        title : "Artikel",
        link : "artikel-page.html"
    },{
        title : "Agen",
        link : "#"
    },{
        title : "Kontak",
        link : "#"
    }
] 

// Item list for footer
let footerItems = [
    {
        title : "",
        link : ""
    },
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

let jumbotronText = {
    heading : `
        Indonesia penghasil sampah terbanyak kedua di dunia
    `,
    subtext : `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque aliquam orci ex, a ullamcorper nisi suscipit sit amet. Cras a ante justo. Nunc accumsan dapibus nisi, vel fermentum purus imperdiet ac. 
    `,
    style : {
        className : "jumbotronText",
        style : `

        `
    }
    
}

let infoText = {
    heading : ` Hanya 10% dari sampah plastik yang terdaur ulang`,
    subtext : `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque aliquam orci ex, a ullamcorper nisi suscipit sit amet. Cras a ante justo. Nunc accumsan dapibus nisi, vel fermentum purus imperdiet ac. 
    `,
    style : {
        className : "infoText",
        style : `
        .infoText {
            background-color : #F9E2C1;
        }

        .infoText .jumbotron-text-wrap {
            color : black;
        }
        
    `
    }
    
}

let dataAkun = [
    {
        id : "354ADF",
        username : "Eru",
        password : "Eru123"

    },
    {
        id : "354ADF",
        username : "Ds",
        password : "Ds123"

    },
    {
        id : "354ADF",
        username : "EruDs",
        password : "EruDs123"

    }
]

let galleryItems = [
    {
        img : "../assets/img-2.jpg",
        text : "Cari Tahu",
    },
    {
        img : "../assets/img-2.jpg",
        text : "Mulai",
    },
    {
        img : "../assets/img-2.jpg",
        text : "Selengkapnya",
    }
]

let dummy = () => {
    let paragraph = document.createElement('p')
    paragraph.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque aliquam orci ex, a ullamcorper nisi suscipit sit amet. Cras a ante justo. Nunc accumsan dapibus nisi, vel fermentum purus imperdiet ac. `
    return [paragraph]
}   

let imgs = [
    '../assets/bali.jpg',
    '../assets/bali.jpg',
    '../assets/bali.jpg',
    '../assets/bali.jpg',
    '../assets/bali.jpg'
]



export { navbarItems, footerItems, jumbotronText, infoText, dummy, dataAkun, galleryItems, imgs }
