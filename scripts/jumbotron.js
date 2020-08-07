// Styling for elements created on this script 
let style = document.createElement('style')
style.innerHTML = `
    .jumbotron {
        display : grid;
        grid-template-columns : repeat(2, 1fr);
        grid-gap : 2rem;
        padding : 7rem 5rem;
        min-height : 600px
    }

    .jumbotron-text-wrap {
        color : white;
        padding : 2% 5%;
    }

    .jumbotron-heading {
        font-family : 'Monserrat', sans-serif;
        font-size : 42pt;
        font-weight : 550;
        margin-botton : 20px;
    }

    .jumbotron-subtext {
        font-family : 'Monserrat', sans-serif;
        font-weight : 300;
        font-size : 1.2rem;
    }
`

let getJumbotron = function ( heading, subtext, img = null, position ="left", jumbotronStyle = { className : null, style : "" }){
    let jumbotron = document.createElement('div');
    jumbotron.className = 'jumbotron'

    let text = document.createElement('div')
    text.className = 'jumbotron-text-wrap'

    let headingEL = document.createElement('div')
    headingEL.className = 'jumbotron-heading'
    headingEL.innerText = heading


    let subtextEL = document.createElement('div')
    subtextEL.className = 'jumbotron-subtext'
    subtextEL.innerText = subtext
    
    let image = document.createElement('div')

    if ( img ){
        image = document.createElement('img')
        image.setAttribute('src', img)
        image.style.width = "100%"
    } 
    text.appendChild(headingEL)
    text.appendChild(subtextEL)

    if ( position === 'right' ) {
        text.style.gridColumn = "2 / span 1"
        jumbotron.appendChild(image)
        jumbotron.appendChild(text)
    } else {
        jumbotron.appendChild(text)
        jumbotron.appendChild(image)
    }

    if ( jumbotronStyle.className ){
        
        jumbotron.classList.add(jumbotronStyle.className)
        style.innerHTML += jumbotronStyle.style
    }
    return jumbotron
}


let ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);

export { getJumbotron }
