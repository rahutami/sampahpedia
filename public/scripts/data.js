
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

// let fs = require('fs');
// let data = fs.readFileSync('content1.txt', 'utf8');

let galleryItems = [
    {
        img : "../assets/content-1.jpg",
        title : "Kenapa Daur Ulang?",
        text : `
        Sebagai negara dengan jumlah penduduk terbesar ke-4 di Dunia, Indonesia memiliki suatu masalah yang tidak kalah besar. 
        Dengan jumlah 267 juta penduduk per Juli 2020, Indonesia merupakan negara penghasil sampah plastic terbesar ke-2 di dunia.
        `
    },
    {
        img : "../assets/content-2.jpg",
        title : "Pemilahan Sampah",
        text : `Ketika mendengar kata sampah, apa sih yang kalian pikirkan ? Sebenarnya sampah itu juga bisa memberi dampak positif loh, semuanya kembali kepada individu masing-masing. 
        `,
    },
    {
        img : "../assets/content-3.jpg",
        title : "Pengolahan Sampah",
        text : 
        `
        Dengan pengelolaan sampah rumah tangga yang benar, kita dapat membantu untuk menekan dampak negatif sampah terhadap lingkungan. 
        Bagaimana sih cara pengelolaan sampah yang benar di rumah? Simak cara melakukannya di bawah ini.`,
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
