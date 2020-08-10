
// Menu list for navbar
let navbarItems = [
    // {
    //     title : "Artikel",
    //     link : "artikel-page.html"
    // },
    {
        title : "Agen",
        link : "#INFORMATION"
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
        title : "contact : support@sampahpedia.com",
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
        id : "213",
        img : "../assets/content-1.jpg",
        title : "Kenapa Daur Ulang?",
        text : `
        Sebagai negara dengan jumlah penduduk terbesar ke-4 di Dunia, Indonesia memiliki suatu masalah yang tidak kalah besar. 
        Dengan jumlah 267 juta penduduk per Juli 2020, Indonesia merupakan negara penghasil sampah plastic terbesar ke-2 di dunia.
        `,
        longText : `
        Kenapa Daur Ulang?

        Sebagai negara dengan jumlah penduduk terbesar ke-4 di Dunia, Indonesia memiliki suatu masalah yang tidak kalah besar. 
        Dengan jumlah 267 juta penduduk per Juli 2020, Indonesia merupakan negara penghasil sampah plastic terbesar ke-2 di dunia. 
        Dengan estimasi 25.000 Ton sampah plastic per hari, Indonesia membutuhkan solusi lain untuk pembuangan sampah plastic.
        
        Selain jumlah sampah yang sangat besar, Indonesia juga memiliki masalah penafsiran arti dari TPA (Landfill). 
        Mayoritas orang Indonesia menafsirkan TPA sebagai tempat pembuangan akhir, yang mengartikan bahwa TPA adalah tempat dimana sampah akan berkahir. 
        Padahal menurut UU no 18 tahun 2008, TPA berarti tempat pemrosesan akhir, yang memiliki arti, tempat sampah terakhir “diproses” supaya aman untuk dibuang ke tempat pembuangan akhir.
        
        Lalu bagaimana solusinya? Dengan mempertimbangkan pertumbuhan infrastruktur pengolahan sampah di Indonesia yang tidak sesuai dengan pertumbuhan produksi sampah, maka solusi yang cukup menjanjikan adalah dengan melakukan Daur Ulang. 
        Dengan Daur Ulang, kita dapat mengurangi jumlah sampah dengan memprosesnya terlebih dahulu. Dengan daur ulang, kita memanfaatkan nilai jual dan sumber daya yang ada pada sampah-sampah tersebut. 
        Sebagai contoh, sampah-sampah plastic, dapat dijadikan biji-biji plastic, untuk dipakai Kembali sesuai dengan kebutuhan industry. 
        Atau dalam level yang lebih kecil, sampah plastic dapat diproses mulai dari level rumah tangga, untuk diolah menjadi kerajinan tangan yang memiliki nilai jual.
        
        Lalu apakah Daur ulang ini efektif untuk mengurangi jumlah sampah? Tentu, kita dapat mengambil contoh pada apa yang dilakukan oleh jepang pada tahun 2015. 
        Dengan melakukan daur ulang, dan pemrosesan sampah sebelum dibuang ke Landfill, dari 43.98 juta Ton sampah yang dihasilkan pada tahun itu, hanya 9.5% yang berakhir dibuang ke landfill. 
        Sisa dari sampah tersebut semuanya diolah dan di daur ulang untuk dimanfaatkan kembali. Dengan melihat contoh tersebut, dapat kita simpulkan bahwa dengan melakukan Recycling atau Daur Ulang, dapat mengurangi jumlah sampah secara signifikan.
        
        `
    },
    {
        id : "214",
        img : "../assets/content-2.jpg",
        title : "Pemilahan Sampah",
        text : `Ketika mendengar kata sampah, apa sih yang kalian pikirkan ? Sebenarnya sampah itu juga bisa memberi dampak positif loh.Jika ingin membuat sampah berdampak positif kita sebagai makhluk cinta lingkungan haruslah meminimalisir dan mengelola sampah secara bijak. `,
        longText : `
        PEMBAGIAN DAN PEMILAHAN
        SAMPAH

        Ketika mendengar kata sampah, apa sih yang kalian pikirkan ? Bisa aku jamin kalian spontan berpikiran yang negatif seperti contohnya kotor, sumber penyakit, mencemari lingkungan, bahkan sumber bencana seperti banjir. 
        Iya sih hal-hal tersebut itu tidak salah tetapi tunggu dulu, sebenarnya sampah itu juga bisa memberi dampak positif loh, semuanya kembali kepada individu masing-masing. 
        Jika ingin membuat sampah berdampak positif kita sebagai makhluk cinta lingkungan haruslah meminimalisir dan mengelola sampah secara bijak.

        Nah, langkah paling awal untuk membuat sampah berdampak positif adalah dengan memilah sampah-sampah tersebut. 
        Kenapa gitu ? Ketika memilah sampah kita akan mengumpulkan sampah-sampah yang sejenis. 
        Ketika sudah terkelompokkan sampah-sampahnya proses pengelolaan sampah akan lebih mudah nantinya. 
        Ketika kita tidak memilah sampah, sampah-sampah kita akan sulit untuk di daur ulang yang akhirnya akan menumpuk di TPA dan mencemari lingkungan sekitar. 

        Hal terpenting dalam memilah sampah adalah mengenali jenis-jenis sampah tersebut. 
        Secara sederhana sampah itu ada 3 jenisnya, yaitu sampah organik, sampah anorganik, dan sampah B3 (Bahan Berbahaya dan Beracun).

        Pertama kita akan berkenalan dengan sampah organik. 
        Sampah organik itu sering disebut sampah yang dapat terurai secara alami. 
        Artinya sampah ini bisa membusuk tanpa harus di daur ulang. Contoh dari sampah organik adalah dedaunan, ranting pohon, dan sisa makanan. 
        Manfaat dari sampah organik ini adalah bahan pupuk kompos, tambahan pakan ternak, dan bisa diubah menjadi biogas dan listrik. 
        Jika di Indonesia tempat untuk membuang sampah organik biasanya tempat sampah berwarna hijau ya.

        Lanjut kenalan dengan sampah anorganik. 
        Jika tadi organik sampah yang mudah terurai, anorganik kebalikannya. 
        Sampah anorganik ini sangat sulit terurai. 
        Contoh dari sampah anorganik yang sering kita temui adalah plastik, Styrofoam, dan kaleng minuman.
        Sampah anorganik memang sulit terurainya tetapi, dapat kita manfaatkan kembali dengan cara daur ulang. 
        Contoh pemanfaatannya adalah sampah plastik menjadi tas, taplak meja, dan pernak pernik lainnya. 
        Di Indonesia tempat sampah anorganik biasanya berwarna kuning ya.

        Terakhir adalah sampah B3(Bahan Berbahaya dan Beracun). 
        Dari namanya sudah jelas ya sampah ini dipisahkan untuk meminimalisir risiko bahaya untuk petugas oranye atau petugas sampah lainnya. 
        Biasanya tempat sampah warna merah menjadi wadah untuk sampah B3 bersemayam.

        Nah, udah pada kenalan kan sama jenis-jenis sampah. 
        Pesan dari aku pilahlah sampah sesuai dengan jenisnya ya ! Supaya sampah-sampah tersebut bisa berdampak positif untuk kita semua. 
        Oh iya, dari sampah juga kalian bisa dapet cuan lho ! Dengan cara menukarkan sampah-sampah yang sudah kalian pilah ke agen atau organisasi daur dengan uang. 
        Kapan lagi yakan kalian dapet untung dari barang seperti sampah, selain dapet untung kalian juga udah membuat sampah tersebut menjadi manfaat. 
        Yuk pilah sampah dan daur ulang sampah ! 
        
        `
    },
    {
        id : "215",
        img : "../assets/content-3.jpg",
        title : "Pengolahan Sampah",
        text : 
        `
        Dengan pengelolaan sampah rumah tangga yang benar, kita dapat membantu untuk menekan dampak negatif sampah terhadap lingkungan. 
        Bagaimana sih cara pengelolaan sampah yang benar di rumah? Simak cara melakukannya di bawah ini.`,
        longText : `
            TATA CARA PENGELOLAAN SAMPAH

            Tujuan pengelolaan sampah adalah membuat sampah memiliki nilai ekonomi atau merubahnya menjadi bahan yang tidak membahayakan lingkungan. 
            Dengan pengelolaan sampah rumah tangga yang benar, kita dapat membantu untuk menekan dampak negatif sampah terhadap lingkungan. 
            Bagaimana sih cara pengelolaan sampah yang benar di rumah? Simak cara melakukannya di bawah ini.
            
            1. Pisahkan Sampah Sesuai Dengan Jenisnya
            Langkah pertama sistem pengelolaan sampah di rumah adalah memisahkan sampah berdasarkan jenisnya.
            Secara garis besar kamu dapat memisahkan sampah menjadi dua jenis, yaitu sampah organik dan anorganik.
            Dengan memisahkan sampah organik dan anorganik, akan memudahkan kamu untuk memudahkan kamu dalam pengelolaan sampah di rumah kamu pada langkah berikutnya.
            
            2. Pengelolaan Sampah Organik
            Cara pengelolaan sampah organik yang paling mudah adalah dengan membuatnya menjadi pupuk kompos yang dapat kamu gunakan untuk berkebun.
            Namun jika kamu tidak suka berkebun atau tidak suka dengan aroma yang ditimbulkan selama pembuatan pupuk kompos, kamu dapat mendonasikan sampah organik ke sahabat yang memiliki hobi berkebun atau penjual tanaman.
            Karena mereka pasti dengan senang hati menerimanya untuk dibuat menjadi pupuk kompos.
            
            3. Pengelolaan Sampah Anorganik
            Sebagian sampah anorganik dapat didaur ulang, seperti kertas, kardus, botol kaca, botol plastik, kaleng dan lainnya.
            Jika kamu tidak yakin apakah sebuah kemasan makanan dapat didaur ulang atau tidak, kamu dapat memeriksa logo daur ulang pada kemasan makanan tersebut.
            Jika terdapat logo daur ulang, maka kemasan makanan tersebut dapat didaur ulang.
            Bawa sampah-sampah anorganik tersebut ke pusat daur ulang sampah terdekat atau kamu juga bisa memberikannya kepada pemulung.
            
            4. Pengelolaan Sampah Berbahaya
            Pisahkan sampah-sampah berbahaya untuk dibawa ke pusat daur ulang.
            Petugas pusat daur ulang pasti tau cara untuk mengatasi sampah berbahaya agar tidak merusak lingkungan.
            
            5. Reduce, Reuse and Recycle!
            Budayakan gaya hidup Reduce, Reuse and Recycle atau biasa dikenal dengan 3R, dari diri kita.
            Biasakan untuk mengurangi pemakaian plastik atau bahan-bahan lain yang sulit terurai. 
            
            Kemudian jangan lupa memanfaatkan barang bekas agar bisa digunakan kembali.
            Seperti memanfaatkan botol plastik bekas untuk dijadikan pot tanaman. Itu hanya salah satu contoh saja.
            Masih banyak lagi barang bekas yang bisa digunakan kembali dengan ide kreatifmu!
            
            Terakhir, jangan lupa untuk selalu mendaur ulang sampah-sampah yang dapat didaur ulang kembali.
            Dengan membawa sampah tersebut ke pusat daur ulang, seperti yang telah dibahas mengenai pengelolaan sampah anogarnik di atas.
            
            
            
            
            
            
        
        `
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
