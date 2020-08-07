import { createForm } from './form-template.js'

function getLoginInfo(){
    console.log("TEST")
}



let loginButton = document.querySelector('.menu-item.loginButton')
loginButton.addEventListener("click", (e) => {
    let style = document.createElement('style')
    style.innerHTML = `
    .modal-container {
        background : rgba(0,0,0,0.6);
        // padding : 5% 20%;
        position : fixed;
        top : 0;
        bottom : 0;
        left : 0;
        right : 0;
        display : grid;
        align-items : center;
        justify-items : center;
        z-index : 100;
    }
    .modal {
        color : white;
        padding : 80px 200px;
        position : relative;
        background : #B67F71;
        border-radius : 10px;
        max-width : 800px;
        max-height : 86vh;
        overflow : auto;

    }
    
    `

    
    
    let app = document.querySelector('#app')
    
    let modalContainer = document.createElement('div')
    modalContainer.className = 'modal-container'
    
    let modal = document.createElement('div')
    modal.className = 'modal'

    let form = createForm()

    modal.appendChild(form)
    modalContainer.appendChild(modal)

    app.insertBefore(modalContainer, app.firstChild)



    let ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);

})

document.addEventListener("click", e => {
    let target = document.querySelector('.modal-container')
    if ( e.target == target){
        document.querySelector('#app').removeChild(target)
    }
})

// document.querySelector('.login-submit').addEventListener("click", e => {
//     console.log(e.target.parentNode);
// })