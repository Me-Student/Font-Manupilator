function setup()
{
    canvas= createCanvas(500,500);
    canvas.position(600,80);
    video= createCapture(VIDEO);
    video.size(550,500);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is loaded");
}

function draw()
{
    background("#F672CC");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}