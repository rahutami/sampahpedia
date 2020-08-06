// Styling for elements created on this script 
let style = document.createElement('style')
style.innerHTML = `
    .jumbotron {
        display : grid;
        grid-template-columns : repeat(2, 1fr);
        grid-gap : 1rem;
        padding : 7rem 5rem;
        min-height : 600px
    }

    .jumbotron-text-wrap {
        color : white;
    }

    .jumbotron-heading {
        font-family : 'Monserrat', sans-serif;
        font-size : 48pt;
        font-weight : 600;
        word-spacing : 10px;
        margin-botton : 20px;
    }

    .jumbotron-subtext {
        font-family : 'Raleway', sans-serif;
        font-weight : 300;
        font-size : 1.4rem;
    }
`
let ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);

let getJumbotron = function ( heading = "", subtext = "", img ="", position ="left", color="white"){
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

    text.appendChild(headingEL)
    text.appendChild(subtextEL)

    if ( position === 'right' ) {
        text.style.gridColumn = "2 / span 1"
    }

    text.style.color = color


    jumbotron.appendChild(text)

    console.log(jumbotron)
    return jumbotron
}

export { getJumbotron }
