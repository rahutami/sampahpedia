let app = document.querySelector("#app");
let item = JSON.parse(localStorage.getItem('Data'));
console.log(item)

app.querySelector(".article_title").innerText = item.title;
let image = document.createElement("img")
image.src = item.img 
image.style.width = "100%";

app.querySelector(".image").appendChild(image)
app.querySelector(".artikel_content").innerText = item.longText

// sessionStorage.clear()