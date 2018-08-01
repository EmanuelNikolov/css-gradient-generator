let body = document.getElementById("canvas");
let css = document.querySelector("code");
let colorOne = document.querySelector(".colorOne");
let colorTwo = document.querySelector(".colorTwo");
let randomBtn = document.getElementById("random");

function setRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; ++i) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function setGradient() {
	body.style.background =
        `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;

	css.textContent = body.style.background + ";";
}

setGradient();

randomBtn.addEventListener("click", () => {
    colorOne.value = setRandomColor();
    colorTwo.value = setRandomColor();
    setGradient();
});

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);