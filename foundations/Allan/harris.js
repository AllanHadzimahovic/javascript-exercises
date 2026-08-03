

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Hello";

const content1 = document.createElement("p");
content1.textContent = "Hey, I'm Red";
content1.style.color = 'red';

const content2 = document.createElement("h3");
content2.textContent = "Hi im blue h3";
content2.style.color = 'blue';

const content3 = document.createElement("div");
content3.style.backgroundColor = 'pink';
content3.style.borderBlockColor = 'black';

const content4 = document.createElement('h1');
content4.textContent = "I'm in a div";

container.appendChild(content);
container.appendChild(content1);
container.appendChild(content2);
content3.appendChild(content4);
container.appendChild(content3);

function alertFunction(){
    alert("hello");
}

const btn = document.querySelector("#idHere");
btn.addEventListener("click", function(e){
    console.log(e.target.style.background = "blue")
});