const button = document.createElement("button");
button.innerText = "Click me";
button.style = "background-color: blue; color: white; font-size: 20px;";
const isAuthorized = true;

button.addEventListener("click", () => {
	isAuthorized
		? console.log("User is authorized")
		: console.log("User is not authorized");
});

document.body.appendChild(button);

const showText = (text) => (document.body.innerText = text);

names = [
	"John",
	"Jane",
	"Mary",
	"Bob",
	"Peter",
	"Paul",
	"Mark",
	"Luke",
	"James",
];

const newNames = names.filter(function (name) {
	return name == "John" ? name : null;
});

console.log(newNames);
