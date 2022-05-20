song ="";

function preload(){
    song.loadSound("dev.mp3");
}

function setup(){
    canvas = createCanvas(621.21, 520.22);
    canvas.position(625, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 621, 520);
}