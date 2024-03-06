const button=document.querySelector(".button");

button.addEventlistener("click", () => {
    button.style.backgroundColor = "#ffac09";
    button.style.transition= "5s ease";
});
