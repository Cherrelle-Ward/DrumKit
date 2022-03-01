
// clicking function 
function sounds() {
    if(document.activeElement.id=="w"){
        // new audio() to grab audio file
        const audio=new Audio("sounds/tom.wav");
        audio.play();
    } else if (document.activeElement.id=="a"){
        const audio=new Audio("/sounds/boom.wav");
        audio.play();
} else if (document.activeElement.id=="s"){
    const audio=new Audio("/sounds/clap.wav");
    audio.play();}
    else if (document.activeElement.id=="d"){
        const audio=new Audio("/sounds/hihat.wav");
        audio.play();}

else if (document.activeElement.id=="j"){
    const audio=new Audio("/sounds/kick.wav");
    audio.play();
} else if(document.activeElement.id=="k"){
    const audio=new Audio("/sounds/openhat.wav");
    audio.play();}
   else if (document.activeElement.id=="l"){
        const audio=new Audio("/sounds/snare.wav");
        audio.play();}
        
};

// keyboard event

document.addEventListener("keypress", (e) => {
    // KEYBOARD W
if (e.key=="w"){
    const audio=new Audio("/sounds/tom.wav");
    audio.play();
    document.getElementById("w").classList.add("add");
    setInterval( () => {
document.getElementById("w").classList.remove("add")
    }, 2000);
}
// KEY A
else if (e.key=="a"){
    const audio=new Audio("/sounds/boom.wav");
    audio.play();
    document.getElementById("a").classList.add("add");
    setInterval( () => {
document.getElementById("a").classList.remove("add")
    }, 2000);
}
// KEY S
if (e.key=="s"){
    const audio=new Audio("/sounds/clap.wav");
    audio.play();
    document.getElementById("s").classList.add("add");
    setInterval( () => {
document.getElementById("s").classList.remove("add")
    }, 2000);
}
// KEY D
else if (e.key=="d"){
    const audio=new Audio("/sounds/hihat.wav");
    audio.play();
    document.getElementById("d").classList.add("add");
    setInterval( () => {
document.getElementById("d").classList.remove("add")
    }, 2000);
}
// KEY J
else if (e.key=="j"){
    const audio=new Audio("/sounds/kick.wav");
    audio.play();
    document.getElementById("j").classList.add("add");
    setInterval( () => {
document.getElementById("j").classList.remove("add")
    }, 2000);
}
// KEY K
else if (e.key=="k"){
    const audio=new Audio("/sounds/openhat.wav");
    audio.play();
    document.getElementById("k").classList.add("add");
    setInterval( () => {
document.getElementById("k").classList.remove("add")
    }, 2000);
}
// KEY L 
else if (e.key=="l"){
    const audio=new Audio("/sounds/snare.wav");
    audio.play();
    document.getElementById("l").classList.add("add");
    setInterval( () => {
document.getElementById("l").classList.remove("add")
    }, 2000);
}
});


















// practice of globalEventListener
// const divs = document.querySelectorAll("div");


// addGlobalEventListener("click", "div", e => {
//     console.log("btn-1")
// })

// function addGlobalEventListener(type, selector, callback) {
//     document.addEventListener(type, e => {
//         if(e.target.matches(selector)) callback(e)
//     })
// }