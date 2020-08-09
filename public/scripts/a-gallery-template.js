let style = `
   .gallery-judul-artikel {
        text-align : center;
        font-size : 2.2rem;
   }

   .gallery-header  {
        grid-column : 1 / -1;
        text-align : center;
        color: #B67F71;
        font-size : 4rem;
        margin-bottom : 3rem;
        font-weight : 700;
    }
   
   .gallery-text-artikel {
        background-color: #B67F71;
        font-size : 1.5rem;
        padding : 1rem 2rem;
        width : 80%;
        color: white;
        text-align : center;
        border-radius : 10px;
        font-weight : 600;
   }
   
   .gallery-img {
       
        max-height : 300px;
        overflow : hidden;
        border-radius : 1.2rem;
   }
   
   .gallery-item img {
        width : 100%;
        transform : translateY(-30%);
    }

   .gallery-text-wrap {
        padding : 20px;
        display : grid;
        justify-items : center;
        align-items : center;
        grid-gap : 1.4rem;
        color : #B67F71;
   }

`

let ref = document.querySelector('#MAIN_STYLE');
ref.innerHTML += style

let createArticleG = (img = "", text="") => {
    let template = document.createElement('div')
    template.className = "gallery-item"
    template.innerHTML = `
        <div class="gallery-img">
            <img src="${img}">
        </div>
        <div class="gallery-text-wrap">
            <h3 class="gallery-judul-artikel"> Judul Artikel </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. </p>
            <p class="gallery-text-artikel"> ${text} </p>
        </div>
    
    `
    return template
}

export { createArticleG }
