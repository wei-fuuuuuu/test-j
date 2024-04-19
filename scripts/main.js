let myImage=document.querySelector("img");
myImage.onclick=function(){
    let mySrc= myImage.getAttribute("src");
    if(mySrc==="images/core.png"){
        myImage.setAttribute("src","images/wallhaven-l8v7kq.png");
    }else{
        myImage.setAttribute("src","images/core.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "continue，" + myName;
      }
}


if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName=localStorage.getItem("name")
    myHeading.textContent="continue，" + storedName;
}
myButton.onclick = function () {
    setUserName();
  };