document.addEventListener("DOMContentLoaded", () => {
    const cr7 = document.querySelector(".cr7");
    const body = document.querySelector("body");
    let btn = document.getElementById("btn");
    let delay = {
        sound: 5000,
        animate: 0
    }
    const duration = 1;

    const chars = ["C", "r", "i", "s", "t", "i", "a", "n", "o", "R", "o", "n", "a", "l", "d", "o"];
    var image = new Image();

    function init() {
        image.src = "./assets/img/cristiano-ronaldo-cr7.gif";
        setTimeout(() => {
            cr7.appendChild(image);
        }, duration * 1000);
    }

    function createAudioSiuuuuuuu() {
        const audio = document.createElement("audio");
        audio.src = "./assets/audio/Siuuuuu.mp3";
        btn.style.animation = `fadeOut ${duration}s ease-out forwards`
        cr7.appendChild(audio);
        setTimeout(() => {
            audio.play();
        }, delay.sound);
    }

    function createAudioCristianoooooo() {
        const audio = document.createElement("audio");
        audio.src = "./assets/audio/cristianoooooo.mp3";
        cr7.appendChild(audio);
        audio.play();
    }

    function createNameCr7() {
        // cristiano ronaldo
        let name = document.createElement("div");
        name.className = "nameofcr7";
        for (let i = 0; i < chars.length; i++) {
            let c = chars[i];
            let char = document.createElement("span");
            char.className = `char char${i}`;
            if (i === 8) {
                char.style.marginRight = "35px";
            }
            char.innerText = c;
            char.style.animation = `slideInLeft${i} 1s ease-out ${delay.animate}s forwards`;
            name.appendChild(char);
            delay.animate += 0.1;
        }
        body.appendChild(name);
    }

    var x = window.matchMedia("(max-width: 740px)");
    x.addListener(mediaquery);

    function mediaquery(x) {
        if (x.matches) {
            Object.assign(cr7.style, {
                width: "235px",
                marginTop: "259px",
            })
        }
    }

    mediaquery(x);

    btn.addEventListener("click", () => {
        init();
        createAudioSiuuuuuuu();
        setTimeout(() => {
            createAudioCristianoooooo();
            setTimeout(() => {
                createNameCr7();
                setTimeout(() => {
                    image.src = "./assets/img/cristianooBallon.png";
                    // mediaquery(x);
                }, 1000)
            }, 2000);
        }, (duration * 1000 + delay.sound));
    })
})



