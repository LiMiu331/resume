setTimeout(load, 3000);

function load() {
    siteWelcome.classList.remove('active');
}

let specialTags = document.querySelectorAll('[data-x]')
let minIndex = 0
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(function () {
    findClosest()
}, 3100)
window.addEventListener('scroll',function(x){
    findClosest()
})
function findClosest() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
                window.scrollY)) {
            minIndex = i
        }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}
let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        let li = x.currentTarget.classList.add('active')

    }
    liTags[i].onmouseleave = function (x) {
        let li = x.currentTarget.classList.remove('active')
    }
}