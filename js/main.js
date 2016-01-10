var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
  var myName = prompt('Please enter your username');
  localStorage.setItem('name', myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem('Name')){
  setUserName();
}
else
{
  var storedName = localStorage.getItem('name')
  myHeading.textContent = "Mozilla is cool, " + myName;
}

myButton.onclick = function(){
  setUserName();
}