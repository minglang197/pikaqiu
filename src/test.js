import string from './css.js'

let player = {
    id: undefined,
    timer: 100,
    ul: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    hash: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnAgain': 'again'
    },
    n: 1,
    init: () => {
        player.ul.demo.innerText = string.substr(0, player.n)
        player.ul.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvent()
        player.play()
    },
    bindEvent: () => {
        for (let key in player.hash) {
            if (player.hash.hasOwnProperty(key)) {
                const value = player.hash[key]
                document.querySelector(key).onclick = player[value]
                document.querySelector(key).touch = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ul.demo.innerText = string.substr(0, player.n)
        player.ul.demo2.innerHTML = string.substr(0, player.n)
        player.ul.demo.scrollTop = player.ul.demo.scrollHeight
    },
    load: () => {
        window.location.reload()
    },
    pause: () => {
        return window.clearInterval(player.id)
    },
    play: () => {
        player.id = setInterval(player.run, player.timer)
    },
    slow: () => {
        player.pause()
        player.timer = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.timer = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.timer = 0
        player.play()
    },
    again: () => {
        player.load()
    }
}
player.init()

