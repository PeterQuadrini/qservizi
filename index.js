var w = window.innerWidth;
var h = window.innerHeight;
var title = document.getElementById("header-title");
var isFirst = true
var currentTitle = ''
var currentTitle2Next = {
    'Food': 'Ambiente',
    'Ambiente': 'Clean',
    'Clean': 'Food',
}

var currentTitle2Class = {
    'Food': 'bgRed',
    'Ambiente': 'bgGreen',
    'Clean': 'bgBlue',
}
setHeaderWidth();
setBoxWidth();
document.getElementById("video").addEventListener('canplaythrough', function() {
    // Video is loaded and can be played
    console.log('LOADED')
    var content = document.getElementById("content");
    content.style.display = 'inline-block'
    init()
}, false);

function init() {
    try {
        var headerList = document.getElementById("headerList");
        if (w < 900) {
            headerList.style.display = 'none'
        } else {
            headerList.style.display = 'flex'
        }
        if (isFirst == true) {
            console.log('HEY HEY')
            currentTitle = 'Food'
            console.log('title', title)
            title.innerHTML = currentTitle
            title.classList.add(currentTitle2Class[currentTitle])
            isFirst = false
        } else {
            title.classList.remove(currentTitle2Class[currentTitle])
            currentTitle = currentTitle2Next[currentTitle]
            title.innerHTML = currentTitle
            title.classList.add(currentTitle2Class[currentTitle])
        }
        setTimeout(init, 7000);
    } catch (error) {
        console.error(error)
    }
}

function setHeaderWidth() {
    var container = document.getElementById("container");
    var box = document.getElementById("box");
    container.style.height = h + 'px';
    box.style.height = h + 'px';
}

function setBoxWidth() {
    var box = document.getElementById("central-box");
    box.style.width = w;
    var divider = w > 782
        ? 4
        : w < 782 & w > 467
            ? 2
            : 1
    var boxItems = document.getElementsByClassName('box-item')
    console.log('BOX item', boxItems)
    Object.keys(boxItems).forEach(item => {
        boxItems[item].style.width = (w/divider) + 'px'
        boxItems[item].style.height = (w/divider) + 'px'
        boxItems[item].addEventListener('mouseover', function() {
            console.log('CIAOO')
            var boxAbsolutes = document.getElementsByClassName('box-absolute')
            var pag = document.getElementsByClassName('pag')
            boxAbsolutes[item].style.height = 15 / (100/h) + 'px'
            pag[item].style.display = 'inline'
          });
          boxItems[item].addEventListener('mouseout', function() {
            var pag = document.getElementsByClassName('pag')
            var boxAbsolutes = document.getElementsByClassName('box-absolute')
            boxAbsolutes[item].style.height = 7 / (100/h) + 'px'
            pag[item].style.display = 'none'
          });;
    })

    var boxBorders = document.getElementsByClassName('box-border')
    console.log('BOX item', boxItems)
    Object.keys(boxBorders).forEach(item => {
        boxBorders[item].style.width = ((w/divider) - 3) + 'px'
        var vh = 7 / (100/h)
        boxBorders[item].style.height = ((w/divider) - vh) + 'px'
    })

    var boxAbsolutes = document.getElementsByClassName('box-absolute')
    console.log('BOX item', boxItems)
    Object.keys(boxAbsolutes).forEach(item => {
        boxAbsolutes[item].style.height = 7 / (100/h) + 'px'
    })
}

function boxItemHover() {
    console.log('CIAOO')
    var boxAbsolutes = document.getElementsByClassName('box-absolute')
    console.log('BOX item', boxItems)
    Object.keys(boxAbsolutes).forEach(item => {
        boxAbsolutes[item].style.height = ((w/divider)) + 'px'
    })
}

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
      header.classList.remove("notScrolled")
    } else {
        header.classList.remove("scrolled");
        header.classList.add("notScrolled")
    }
  });

  window.addEventListener("resize", function() {
    w = window.innerWidth;
    h = window.innerHeight;
    if (w < 900) {
        headerList.style.display = 'none'
    } else {
        headerList.style.display = 'flex'
    }
    setHeaderWidth()
    setBoxWidth()
  });