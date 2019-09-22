//DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    check = document.getElementById('check');


//options
let showAmPm = true;

function checkBox() {
    if (showAmPm === true) {
        showAmPm = false;
    } else {
        showAmPm = true;
    }
}

//show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //set am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`

    setTimeout(showTime, 1000);

}

//adding zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

//set background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        //mornung
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        //afternnon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //night
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}

//get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

//setname
function setName(e) {
    if (e.type === 'keypress') {
        //make sure enter
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}
//get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}
//setfocus
function setFocus(e) {
    if (e.type === 'keypress') {
        //make sure enter
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

//opt change name
function onSubmitName() {
    const menu_name = document.getElementById('menu-name').value;
    console.log(menu_name)
    localStorage.setItem('name', menu_name);
}
function onSubmitFocus() {
    const menu_focus = document.getElementById('menu-focus').value;
    console.log(menu_focus)
    localStorage.setItem('focus', menu_focus);
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



//run
showTime();
setBgGreet();
getName();
getFocus();
