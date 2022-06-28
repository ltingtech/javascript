let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let userButton = document.querySelector('button')

/*
在特定位置，设置点击的效果
 */
document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼。');
}

/**
点击图片，实现切换图片
 */
let imageDoc = document.querySelector("img")
imageDoc.onclick = function() {
    let imageSource = imageDoc.getAttribute("src")
    if (imageSource == "images/js_test.png") {
        imageDoc.setAttribute("src", "images/firefox-icon.png")
    } else {
        imageDoc.setAttribute("src", "images/js_test.png")
    }
}

/**
 * 点击按钮进行交互
 */

userButton.onclick = function() {
    saveUserName();
}

if (!localStorage.getItem("name")) {
    saveUserName();
} else {
    let oldName = localStorage.getItem("name")
    myHeading.textContent = "欢迎你再次回来，" + oldName
}


function saveUserName() {
    let userName = prompt("请输入你的名字。")
    localStorage.setItem("name", userName)
    myHeading.textContent = "欢迎你，" + userName
}