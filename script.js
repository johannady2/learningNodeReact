let h3tags = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.getElementById("gradient");
let randomButton = document.getElementById("random");


const setGradient = () =>{
body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
}

const displayColorNames = () => {

    let colorName1 = color1.value;
    let colorName2 = color2.value;
    //h3tags.innerHTML = "background: linear-gradient(to right, " + colorName1 + "," + colorName2 + ");<br>OR<br> background:" + body.style.background + ";";

    h3tags.innerHTML = `background: linear-gradient(to right, ${colorName1}, ${colorName2}); <br>OR<br> background: ${body.style.background};`;

}


const randomizeColors = () => {
    let randomColor1 = getRandomColor();
    let randomColor2 = getRandomColor();

    color1.value = randomColor1;
    color2.value = randomColor2;    
    setGradient();
    displayColorNames();
}


const getRandomColor = () =>
{
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/*
console.log(h3tags);
console.log(color1);
console.log(color2);
console.log(body);
*/

setGradient();
displayColorNames();


color1.addEventListener("input", function()
{
    setGradient();
    displayColorNames();
});
color2.addEventListener("input", function()
{
    setGradient();
    displayColorNames();
});

randomButton.addEventListener("click", randomizeColors);









