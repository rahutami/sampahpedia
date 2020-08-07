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
        max-height : 94vh;
        overflow : auto;

    }

    .warning-text {

    }

    .required {
        border-color : red !important;
        transition : 0.3s all ease-out;
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

    document.querySelector('.login-submit').addEventListener("click", e => {
        e.preventDefault();

        let uNameField = document.querySelector("#login-uname");
        let passField = document.querySelector("#login-pwd");


        let username = uNameField.value;
        let password = passField.value;
        if ( username === "" || password === ""){
            let warning = "This Field can't be Empty";
            let textEl = document.createElement('p');
            textEl.className = "warning-text"
            textEl.innerText = warning
            if ( username === ""){
                uNameField.classList.add("required");
                uNameField.parentNode.insertAdjacentElement("afterend", textEl)
            } 

            if ( password === ""){
                passField.classList.add("required");
                passField.parentNode.insertAdjacentElement("afterend", textEl)
            }
            

            return false;
        }

        let target = document.querySelector('.modal-container')
        document.querySelector('#app').removeChild(target)
    })


})


document.addEventListener("click", e => {
    let target = document.querySelector('.modal-container')
    if ( e.target == target){
        document.querySelector('#app').removeChild(target)
    }
})

console.log(document.querySelector(".login-submit"))