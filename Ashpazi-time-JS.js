onscroll = function menuSF() {
    var menu = document.getElementById("menu");
    var titrS = document.getElementById("titr");
    var titrText1S = document.getElementById("titrText1S");
    var irItems1MenuS = document.getElementById("irItems1Menu");
    var irItems2MenuS = document.getElementById("irItems2Menu");
    var zarfIrItem = document.getElementById("zarfIrItem");
    var po = document.getElementById("po");
    var mohS = document.getElementById("mohS");
    var soton = document.getElementById("soton");
    var backS = document.getElementById("back");
    if (window.pageYOffset >= 130) {
        menu.classList.add("menuS")
        menu.classList.remove("menu")
        titrS.classList.add("titrS")
        titrS.classList.remove("titr")
        titrText1S.style.display = "none";
        irItems1MenuS.classList.add("ir-items-1-menuS");
        irItems2MenuS.classList.add("ir-items-2-menuS");
        irItems1MenuS.classList.remove("ir-items-1-menu");
        irItems2MenuS.classList.remove("ir-items-2-menu");
        po.classList.add("poS");
        po.classList.remove("po");
        mohS.classList.add("mohS");
        mohS.classList.remove("moh");
        soton.classList.add("sotonS");
        soton.classList.remove("soton");
        backS.classList.add("show")




    } else {
        menu.classList.remove("menuS")
        menu.classList.add("menu")
        titrS.classList.remove("titrS")
        titrS.classList.add("titr")
        titrText1S.style.display = "block";
        irItems1MenuS.classList.remove("ir-items-1-menuS");
        irItems2MenuS.classList.remove("ir-items-2-menuS");
        irItems1MenuS.classList.add("ir-items-1-menu");
        irItems2MenuS.classList.add("ir-items-2-menu");
        po.classList.remove("poS");
        po.classList.add("po");
        mohS.classList.remove("mohS");
        mohS.classList.add("moh");
        soton.classList.remove("sotonS");
        soton.classList.add("soton");
        backS.classList.remove("show")
    }
}



// for homeMenu
function homeMenuMove() {
    var homMenuAn = document.getElementById("homeMenu");
    homMenuAn.style.animation = "homeMenuAn 250ms ease 0s 1 forwards";
    var homeMenuA = document.getElementById("homeMenuA");
    homeMenuA.style.animation = "homeMenuAAn 250ms ease 0s 1 forwards"
}

function homeMenuOut() {
    var homMenuOut = document.getElementById("homeMenu");
    homMenuOut.style.animation = "homeMenuOut 250ms ease 0s 1 forwards";
    var homeMenuA = document.getElementById("homeMenuA");
    homeMenuA.style.animation = "homeMenuAOut 250ms ease 0s 1 forwards"
}


// forirMenu
function irMenuMove() {
    var irMenuAn = document.getElementById("irMenu");
    irMenuAn.style.animation = "irMenuAn 250ms ease 0s 1 forwards";
    var zarfIrItem = document.getElementById("zarfIrItem");
    zarfIrItem.style.width = "60%";
    zarfIrItem.style.height = "200px";
    zarfIrItem.style.backgroundColor = "";
    zarfIrItem.style.position = "absolute";
    zarfIrItem.style.right = "20%";
    zarfIrItem.style.top = "90%";
    // var zarf2IrItem = document.getElementById("zarf2IrItem");
    // zarf2IrItem.style.width = "1%";
    // zarf2IrItem.style.height = "190px";
    // zarf2IrItem.style.backgroundColor = "";
    // zarf2IrItem.style.position = "fixed";
    // zarf2IrItem.style.top = "30%";
    // zarf2IrItem.style.right = "49.5%";
    var irItems1Menu = document.getElementById("irItems1Menu");
    var irMenuA = document.getElementById("irMenuA");
    irMenuA.style.animation = "irMenuAAn 250ms ease 0s 1 forwards"
    var irItems1Menu = document.getElementById("irItems1Menu");
    irItems1Menu.style.display = "grid";
    irItems1Menu.style.animation = "irItems1MenuMove 250ms ease 0s 1 forwards";
    var irItems2Menu = document.getElementById("irItems2Menu");
    irItems2Menu.style.display = "grid";
    irItems2Menu.style.animation = "irItems2MenuMove 250ms ease 0s 1 forwards";
    var titr = document.getElementById("titr");
    // if (window.pageYOffset >= 130) {
    //     titr.style.animation = "titrSMove 250ms ease 0s 1 forwards";
    // } else {
    //     titr.style.animation = "titrMove 250ms ease 0s 1 forwards";
    // }
    titr.style.animation = "titrMove 250ms ease 0s 1 forwards";

    var Up = document.getElementById("Up");
    Up.style.display = "grid";
    Up.style.animation = "upMove 500ms ease 60ms 1 forwards";

}


function irMenuOut() {
    var irMenuOut = document.getElementById("irMenu");
    irMenuOut.style.animation = "irMenuOut 250ms ease 0s 1 forwards";
    zarfIrItem.style.width = "0px"
    zarfIrItem.style.height = "0px"
    // zarf2IrItem.style.width = "0px"
    // zarf2IrItem.style.height = "0px"
    var irMenuA = document.getElementById("irMenuA");
    irMenuA.style.animation = "irMenuAOut 250ms ease 0s 1 forwards"
    var irItems1Menu = document.getElementById("irItems1Menu");
    irItems1Menu.style.animation = "irItems1MenuOut 250ms ease 0s 1 forwards"
    // irItems1Menu.style.display = "none";
    var irItems2Menu = document.getElementById("irItems2Menu");
    irItems2Menu.style.animation = "irItems2MenuOut 250ms ease 0s 1 forwards"
    // irItems1Menu.style.display = "none";
    var titr = document.getElementById("titr");
    // if (window.pageYOffset >= 130) {
    //     titr.style.animation = "titrSOut 250ms ease 0s 1 forwards";
    // } else {
    //     titr.style.animation = "titrOut 250ms ease 0s 1 forwards";
    // }
    titr.style.animation = "titrOut 250ms ease 0s 1 forwards";

    var Up = document.getElementById("Up");
    Up.style.display = "none";
    Up.style.animation = "upOut 250ms ease 0s 1 forwards";
}

// forinMenu
function inMenuMove() {
    var inMenuAn = document.getElementById("inMenu");
    inMenuAn.style.animation = "inMenuAn 250ms ease 0s 1 forwards";
    var inMenuA = document.getElementById("inMenuA");
    inMenuA.style.animation = "inMenuAAn 250ms ease 0s 1 forwards"

}

function inMenuOut() {
    var inMenuOut = document.getElementById("inMenu");
    inMenuOut.style.animation = "inMenuOut 250ms ease 0s 1 forwards";
    var inMenuA = document.getElementById("inMenuA");
    inMenuA.style.animation = "inMenuAOut 250ms ease 0s 1 forwards"

}

// forcallMenu
function callMenuMove() {
    var callMenuAn = document.getElementById("callMenu");
    callMenuAn.style.animation = "callMenuAn 250ms ease 0s 1 forwards";
    var callMenuA = document.getElementById("callMenuA");
    callMenuA.style.animation = "callMenuAAn 250ms ease 0s 1 forwards"

}

function callMenuOut() {
    var callMenuOut = document.getElementById("callMenu");
    callMenuOut.style.animation = "callMenuOut 250ms ease 0s 1 forwards";
    var callMenuA = document.getElementById("callMenuA");
    callMenuA.style.animation = "callMenuAOut 250ms ease 0s 1 forwards"

}



// forirItemsMenu
// forirKhoItem
function irKhoItemMove() {
    var khoA = document.getElementById("khoA");
    khoA.style.color = "rgb(0, 110, 255)"
}

function irKhoItemOut() {
    var khoA = document.getElementById("khoA");
    khoA.style.color = "black"
}

// forirCholoItem
function irCholoItemMove() {
    var choloA = document.getElementById("choloA");
    choloA.style.color = "rgb(0, 110, 255)"
}

function irCholoItemOut() {
    var choloA = document.getElementById("choloA");
    choloA.style.color = "black"
}

// forirFishItem
function irFishItemMove() {
    var fishA = document.getElementById("fishA");
    fishA.style.color = "rgb(0, 110, 255)"
}

function irFishItemOut() {
    var fishA = document.getElementById("fishA");
    fishA.style.color = "black"
}
// forirMorqItem
function irMorqItemMove() {
    var morqA = document.getElementById("morqA");
    morqA.style.color = "rgb(0, 110, 255)"
}

function irMorqItemOut() {
    var morqA = document.getElementById("morqA");
    morqA.style.color = "black"
}

// forirKababItem
function irKababItemMove() {
    var kababA = document.getElementById("kababA");
    kababA.style.color = "rgb(0, 110, 255)"
}

function irKababItemOut() {
    var kababA = document.getElementById("kababA");
    kababA.style.color = "black"
}


// forirKokoItem
function irKokoItemMove() {
    var irKokoItem = document.getElementById("irKokoItem");
    irKokoItem.style.color = "rgb(0, 110, 255)"
}

function irKokoItemOut() {
    var irKokoItem = document.getElementById("irKokoItem");
    irKokoItem.style.color = "black"
}

// forirKotItem
function irKotItemMove() {
    var irKotItem = document.getElementById("irKotItem");
    irKotItem.style.color = "rgb(0, 110, 255)"
}

function irKotItemOut() {
    var irKotItem = document.getElementById("irKotItem");
    irKotItem.style.color = "black"
}

// forirAshItem
function irAshItemMove() {
    var irAshItem = document.getElementById("irAshItem");
    irAshItem.style.color = "rgb(0, 110, 255)"
}

function irAshItemOut() {
    var irAshItem = document.getElementById("irAshItem");
    irAshItem.style.color = "black"
}
// forirKoofItem
function irKoofItemMove() {
    var irKoofItem = document.getElementById("irKoofItem");
    irKoofItem.style.color = "rgb(0, 110, 255)"
}

function irKoofItemOut() {
    var irKoofItem = document.getElementById("irKoofItem");
    irKoofItem.style.color = "black"
}

// forirAbItem
function irAbItemMove() {
    var irAbItem = document.getElementById("irAbItem");
    irAbItem.style.color = "rgb(0, 110, 255)"
}

function irAbItemOut() {
    var irAbItem = document.getElementById("irAbItem");
    irAbItem.style.color = "black"
}