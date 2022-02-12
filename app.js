let pos = 0;
const box = document.getElementById('box');

function moving(){
    // 49 because the clear interval won't stop the function from running that iteration
    if(pos === 149) clearInterval(t);
    pos++;
    box.style.left = pos + 'px';
}

var t = setInterval(moving, 30);


