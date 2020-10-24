lipX=0;
lipY=0;

function preload() {
lipstick = loadImage('https://i.postimg.cc/PrN9LWrR/Lips.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(530, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipX = results[0].pose.nose.x - 15;
        lipY = results[0].pose.nose.y + 10;
        console.log("lip x = " + lipX);
        console.log("lip y = " + lipY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick, lipX, lipY, 40, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}