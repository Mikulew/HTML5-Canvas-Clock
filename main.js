var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

    layout();

    window.addEventListener('resize', layout, false);

function degreeToRadian(degree) {
    var factor = Math.PI/180;
    return degree*factor;
}

function renderTime() {
    // variables
    var now = new Date(),
        today = now.toDateString(),
        time = now.toLocaleTimeString(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds(),
        milliseconds = now.getMilliseconds(),
        newSeconds = seconds+(milliseconds/1000),
        newMinutes = minutes+(seconds/60),
        newHours = hours+(minutes/60),
        gradient = ctx.createRadialGradient(window.innerWidth/2, window.innerHeight/2, 5, window.innerWidth/2, window.innerHeight/2, 300);
        // var dataURL = canvas.toDataURL();

    // background
    gradient.addColorStop(0, '#09303a');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // hours
    ctx.beginPath();
    ctx.arc(window.innerWidth/2, window.innerHeight/2, 200, degreeToRadian(270), degreeToRadian((newHours*30)-90));
    ctx.stroke();

    // minutes
    ctx.beginPath();
    ctx.arc(window.innerWidth/2, window.innerHeight/2, 170, degreeToRadian(270), degreeToRadian((newMinutes*6)-90));
    ctx.stroke();

    //seconds
    ctx.beginPath();
    ctx.arc(window.innerWidth/2, window.innerHeight/2, 140, degreeToRadian(270), degreeToRadian((newSeconds*6)-90));
    ctx.stroke();

    //data
    ctx.font = '25px Arial';
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(today, window.innerWidth/2-(ctx.measureText(today).width/2), window.innerHeight/2);
    //time
    ctx.font = '25px Arial';
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(time, window.innerWidth/2-(ctx.measureText(time).width/2), (window.innerHeight/2)+30);
    //dataURL
    // document.getElementById('myImage').src = dataURL;
    //rAF
    requestAnimationFrame(renderTime);
}
requestAnimationFrame(renderTime);

function layout() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = '#28d1fa';
    ctx.lineWidth = 17;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#28d1fa';
}