const play = document.getElementsByClassName("play")[0]
const pause = document.getElementsByClassName("pause")[0]
play.onclick = function () {
    pause.style.opacity = "1"
    pause.style.pointerEvents = "auto"
    play.style.opacity = "0"
    play.style.pointerEvents = "none"
}
pause.onclick = function () {
    pause.style.opacity = "0"
    pause.style.pointerEvents = "none"
    play.style.opacity = "1"
    play.style.pointerEvents = "auto"
}