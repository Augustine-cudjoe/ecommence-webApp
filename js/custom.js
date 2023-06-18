
let images= document.getElementsByTagName("img");
console.log(images);
let paragraphs= document.getElementsByTagName("p");
console.log(paragraphs);
let heading = document.getElementById("heading");
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.nodeType);
// using the DOM to manipulate the main-content alignment

let main_content =  document.getElementById("main_content");
//7main_content.setAttribute('align', 'right');
 heading.innerHTML="Welcome to our website ";

 let new_heading =document.createElement("h2");
 let new_para = document.createElement("p");
 new_heading.innerHTML="Creating new heading with the DOM";
 new_para.innerHTML= " we are updating our website witht he DOM";
 new_para.style.color="red";
 main_content.appendChild(new_heading);
 main_content.appendChild(new_para);

 let name = document.getElementById("name");
 