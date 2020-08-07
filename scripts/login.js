let style = document.createElement('style')
style.innerHTML = `
    .menu-item.loginButton:hover {
        background-color : rgba(0,0,0,0.6);
        border-bottom : 4px solid rgba(123,151,324,0.6);
        cursor : pointer;
    }
    .menu-item.loginButton:active {
        background-color : rgba(123,151,324,0.6);
        cursor : pointer;
    }
`

let ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);


let createLogin = () => {
    let login = document.createElement('div');
    login.className = 'menu-item loginButton';
    login.innerHTML = '<a href="#"> Login </a>'
    return login
}



export { createLogin }