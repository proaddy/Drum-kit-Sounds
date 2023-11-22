var btnlist = document.querySelectorAll('.drum');

btnlist.forEach((e)=>{
    // click event
    e.addEventListener('click', function (){
        sound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
});

// keypress event
document.addEventListener('keypress', (event)=>{
    sound(event.key);
    buttonAnimation(event.key);
})

// calling sounds
function sound(key){
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(key);
            break;
    }
};

function buttonAnimation(currentKey){
    var pressedKey = document.querySelector("." + currentKey);
    setTimeout(() => {
        console.log(pressedKey.classList.remove('pressed'));
    }, 200);
    
}
