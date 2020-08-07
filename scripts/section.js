let style = document.createElement('style')
style.innerHTML = `
    .web-section {
        padding : 5% 5rem;
        background-color: #C6D2AC;
        color : white;
    }

    .web-section:last-of-type{
        background-color : #F9E2C1;
      }
`

let ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);



let createSection = (rows = 3, cols = 3, elements = []) => {
    // Elements must be an object with { element : HTMLObject, span : "How much will it take the screen"}
    let section = document.createElement('section')
    section.className = 'web-section';
    section.style.display = 'grid';
    section.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    section.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    section.style.maxHeight= '80vh'

    elements.forEach((el) => {
        section.appendChild(el);
    })

    return section;
}

export { createSection }