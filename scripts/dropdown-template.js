let createDropdown = ( title = { name :"Dropdown", link:"#"}, itemList = []) => {
    let style = document.createElement('style')
    style.innerHTML = `
        .main-menu-item {
            min-width : 100px;
            text-align : center;
        }
        .sub-menu {
            display : none;
            transition : all .5s ease-out;
            position : absolute;  
            width : max-content;
            min-width : 100px;
            justify-content : center;
            transform : translate(-16px, 29px);
            background-color : rgba(0,0,0,0.2);
            border-radius : 0px 0px 16px 16px;
        }
    `

    let ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);

    let dropdown = document.createElement('div');
    dropdown.className = "menu-item main-menu-item"
    dropdown.innerHTML = `<a href="${title.link}"> ${title.name} </a>`

    let dropdownMenu = document.createElement('div');
    dropdownMenu.className = "sub-menu"

    itemList.forEach(( item, i )=> {
        let menuItem = document.createElement('div')
        menuItem.className = `menu-item`
        menuItem.innerHTML = `<a href="${item.link}"> ${item.name} </a>`
        dropdownMenu.appendChild(menuItem)
    })

    dropdown.appendChild(dropdownMenu)

    return dropdown
}

document.addEventListener("click", accessDropdown)

function accessDropdown(e){
    if ( e.target.parentElement.className != "menu-item main-menu-item") { 
        return false 
    }
    
    let subItem = document.querySelector('.sub-menu');
    if ( subItem.style.display === "grid") {
        subItem.style.display = "none";
    } else {
        subItem.style.display = "grid";
    }


    
}


export { createDropdown }