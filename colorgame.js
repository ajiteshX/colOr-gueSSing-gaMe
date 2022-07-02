var numSquare = 6;
var colors = generateRandomColors(numSquare);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY" ? numSquare = 3: numSquare = 6;
		reset();
	});
}

function reset()
{
	colors = generateRandomColors(numSquare);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedcolor;

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedcolor)
		{
			messageDisplay.textContent = "CORRECT :)";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "PLAY AGAIN";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN :(";
		}
	});
}

function changeColor(color)
{
	for(var i=0; i<colors.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i=0; i<num; i++)
	{
		arr.push(randomColor())
	}
	return arr;
}

function randomColor()
{
	var red = Math.floor(Math.random() * 256 + 0);
	var green = Math.floor(Math.random() * 256 + 0);
	var blue = Math.floor(Math.random() * 256 + 0);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}