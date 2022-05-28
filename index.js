const controls = document.querySelectorAll('.music__control')
const audio = document.querySelector('audio')
const muted = document.querySelector('.muted')
const unmuted = document.querySelector('.unmuted')

const header = document.querySelector('.header')

const map = document.querySelector('.content__map')

unmuted.onclick=function(){
    document.querySelector('.unmuted.active').classList.remove('active')
    document.querySelector('.muted').classList.add('active')
    audio.pause()
}

muted.onclick = function(){
    document.querySelector('.muted.active').classList.remove('active')
    document.querySelector('.unmuted').classList.add('active')
    audio.play()
}

window.onscroll = function(){
    if(scrollY > 200){
        header.classList.add('visible')
    }else{
        header.classList.remove('visible')
    }

    if(scrollY > 1200 && scrollY < 2000){
        map.classList.add('active')
    }else{
        map.classList.remove('active')
    }
}

