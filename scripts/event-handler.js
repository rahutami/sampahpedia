import { createForm } from './form-template.js'
import { dataAkun } from './data.js'
import { createDropdown } from './dropdown-template.js'
import { constructor } from './constructor.js'

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
        max-height : 100vh;
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
    document.querySelector('.login-submit').onclick = loginSubmit;
})


document.addEventListener("click", e => {
    let target = document.querySelector('.modal-container')
    if ( e.target == target){
        document.querySelector('#app').removeChild(target)
    }
})

function loginSubmit(e){
    e.preventDefault();

    let loggedIn = false

    let uNameField = document.querySelector("#login-uname");
    let passField = document.querySelector("#login-pwd");

    
    Array(uNameField, passField).forEach( item => {
        let textEl = document.createElement('p');
        textEl.className = "warning-text"
        textEl.innerText = "This Field can't be Empty"
        let el = item.parentElement.querySelector('.warning-text') 
        if ( !el && item.value === ""){
            item.classList.add('required');
            item.parentElement.appendChild(textEl);
        } else if ( el && item.value != "" ){
            item.classList.remove('required')
            item.parentElement.removeChild(el)
        }
    })

    dataAkun.forEach( data => {
        if ( data.username === uNameField.value && data.password === passField.value ){
            loggedIn = true;
            return true;
        }
    })

    if ( ! loggedIn ){
        let el = e.target.parentElement.parentElement
    }
    
    if ( loggedIn ){
        let data = [
            { 
                name:"Profil", 
                link : "#" 
            },
            { 
                name:"Settings",
                link:"#" 
            },
            { 
                name:"Keluar", 
                link:"#" 
            }
        ]
        let target = document.querySelector(".loginButton")
        document.querySelector('.navbar').removeChild(target)
        
        target = document.querySelector('.navbar')
        constructor(createDropdown( { name: uNameField.value, link:"#"}, data), target);
        
        target = document.querySelector('.modal-container')
        document.querySelector('#app').removeChild(target)
    }

}