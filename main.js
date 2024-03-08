const button = document.getElementById("btn");

button.addEventListener("click", function onClick () {

button.style.backgroundColor = "rgb(19, 212, 196)";
button.style.transition = "2s ease";
});
button.addEventListener("mouseover", ()=>{
    button.style.backgroundColor = "rgb(191, 78, 78)";
})
button.addEventListener("mouseout", ()=>{
    button.style.backgroundColor = "rgba(255, 100, 100, 1)";
})