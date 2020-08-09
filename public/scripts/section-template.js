let style = `
    .web-section {
        padding : 5% 5rem;
        background-color : white;
        color : white;
    }

`

let ref = document.querySelector('#MAIN_STYLE');
ref.innerHTML += style


let createSection = (rows = 0, cols = 3, id="random_section", elements = [], style = "") => {
    // Elements must be an object with { element : HTMLObject, span : "How much will it take the screen"}
    let section = document.createElement('section')
    section.className = 'web-section';
    section.id = id
    section.style.display = 'grid';
    section.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    section.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    section.style.gridGap = '2rem';

    elements.forEach((el) => {
        section.appendChild(el);
    })

    return section;
}

export { createSection }