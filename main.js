let APIKEY = "O3iJIz4KNHqyrwfM88y7Abn9WA2607z0";

document.addEventListener("DOMContentLoaded", init);
  function init() {
  document.getElementById("enter").addEventListener("click", ev => {

  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=8&q=`;
  let str = document.getElementById("search").value.trim();
  url = url.concat(str);    
    fetch(url)
      .then(response => response.json())
      .then(content => {
          
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.original.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".div");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
        });
      });
}