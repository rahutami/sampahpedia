let createDropdown = ( title = "Dropdown", itemList = []) => {
    let dropdown = document.createElement('div');
    dropdown.innerText = title;
    dropdown.className = "menu-item"
    return dropdown
}



export { createDropdown }