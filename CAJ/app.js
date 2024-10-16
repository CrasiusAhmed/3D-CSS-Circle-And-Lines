let menuClick = document.querySelector('.menu-click')
let menu = document.querySelector('.menu')
menuClick.onclick = function(){
    menu.classList.toggle('active')
    menuPage.classList.remove('show-hover1')
    menuPage.classList.remove('show-hover-remove1')
}


let menuColor = document.querySelector('.menu-color')
let f1Pm = document.querySelector('.f1-pm')
menuColor.onclick = function(){
    f1Pm.style = "right: 0%;"
}   



let htmlColor = document.getElementById('color-bg')
let bodycolor = document.getElementsByTagName('body')[0];
let colorBx1 = document.querySelector('.color-circle')
let colorBx2 = document.querySelector('.color-DL')

/* color */
function f1()
{
    htmlColor.style = "filter: contrast(1.07) hue-rotate(0deg);"
    colorBx1.style = "filter: hue-rotate(0deg);"
    colorBx2.style = "filter: hue-rotate(0deg);"
}
function f2()
{
    htmlColor.style = "filter: contrast(1.07) hue-rotate(27deg);"
    colorBx1.style = "filter: hue-rotate(-27deg);"
    colorBx2.style = "filter: hue-rotate(-27deg);"
}
function f3()
{
    htmlColor.style = "filter: contrast(1.07) hue-rotate(41deg);"
    colorBx1.style = "filter: hue-rotate(-41deg);"
    colorBx2.style = "filter: hue-rotate(-41deg);"
}
function f4()
{
    htmlColor.style = "filter: contrast(1.07) hue-rotate(175deg);"
    colorBx1.style = "filter: hue-rotate(-175deg);"
    colorBx2.style = "filter: hue-rotate(-175deg);"
}
function f5()
{
    htmlColor.style = "filter: contrast(1.07) hue-rotate(295deg);"
    colorBx1.style = "filter: hue-rotate(-295deg);"
    colorBx2.style = "filter: hue-rotate(-295deg);"
}

/* Motion */

function d1()
{
    bodycolor.style = "filter: contrast(1.2)"
}
function d2()
{
    bodycolor.style = "filter: contrast(1.1)"
}
function d3()
{
    bodycolor.style = "unset"
}
function d4()
{
    bodycolor.style = "filter: brightness(1.2);"
}
function d5()
{
    bodycolor.style = "filter: brightness(1.4);"
}

let firstPm = document.querySelector('.f1-pm')

function finish()
{
    firstPm.style = "right: -50%;"
}
function reset()
{
    htmlColor.style = "unset"
    colorBx1.style = "unset"
    colorBx2.style = "unset"
    bodycolor.style = "unset"
}







let menuPage = document.querySelector('.menu-page')
let iconHover1 = document.querySelector('.icon-hover1')
let iconHover2 = document.querySelector('.icon-hover2')
let iconHover3 = document.querySelector('.icon-hover3')
let iconHover4 = document.querySelector('.icon-hover4')

function add1()
{
    menuPage.classList.toggle('show-hover1')
    menuPage.classList.remove('show-hover-remove1')
    iconHover1.style = 'opacity: 1; transition: 1s cubic-bezier(0.5, 0.01, 0.58, 1) 3s;'
}
function remove1()
{
    menuPage.classList.remove('show-hover1')
    menuPage.classList.toggle('show-hover-remove1')
    iconHover1.style = 'opacity: 0; transition: .4s ease-out'
}

function add2()
{
    menuPage.classList.toggle('show-hover2')
    menuPage.classList.remove('show-hover-remove1')
    iconHover2.style = 'opacity: 1; transition: 1s cubic-bezier(0.5, 0.01, 0.58, 1) 3s;'
}
function remove2()
{
    menuPage.classList.remove('show-hover2')
    menuPage.classList.toggle('show-hover-remove1')
    iconHover2.style = 'opacity: 0; transition: .4s ease-out'
}

function add3()
{
    menuPage.classList.toggle('show-hover3')
    menuPage.classList.remove('show-hover-remove1')
    iconHover3.style = 'opacity: 1; transition: 1s cubic-bezier(0.5, 0.01, 0.58, 1) 3s;'
}
function remove3()
{
    menuPage.classList.remove('show-hover3')
    menuPage.classList.toggle('show-hover-remove1')
    iconHover3.style = 'opacity: 0; transition: .4s ease-out'
}

function add4()
{
    menuPage.classList.toggle('show-hover4')
    menuPage.classList.remove('show-hover-remove1')
    iconHover4.style = 'opacity: 1; transition: 1s cubic-bezier(0.5, 0.01, 0.58, 1) 3s;'
}
function remove4()
{
    menuPage.classList.remove('show-hover4')
    menuPage.classList.toggle('show-hover-remove1')
    iconHover4.style = 'opacity: 0; transition: .4s ease-out'
}