
// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/0wo5QNS4t/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let bgimage;
let gif_createImg;
let gif_createImg2;
let gif_createImg3;
let gif_createImg4;
let gif_createImg5;
let gif_createImg6;
let timer = 0;
let sound;
let soundFFT;

// Load the model first
function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
    gif_createImg = createImg("depression.gif", "gif");
    gif_createImg.size(0, 0);
    gif_createImg2 = createImg("HAPPINESS.gif", "gif");
    gif_createImg2.size(0, 0);
    gif_createImg3 = createImg("pepsiad.gif", "gif");
    gif_createImg3.size(0, 0);
    gif_createImg4 = createImg("nutellaad.gif", "gif");
    gif_createImg4.size(0, 0);
    gif_createImg5 = createImg("carad.gif", "gif");
    gif_createImg5.size(0, 0);
    gif_createImg6 = createImg("perfumead.gif", "gif");
    gif_createImg6.size(0, 0);
    gif_createImg7 = createImg("canad.gif", "gif");
    gif_createImg7.size(0, 0);
    gif_createImg8 = createImg("comedyad.gif", "gif");
    gif_createImg8.size(0, 0);
    sound1 = loadSound('elevatorsong.mp3');
    bgimage = loadImage('gmail.png');
}

function setup() {
    createCanvas(960, 540);
    // Create the video
    video = createCapture(VIDEO);
    video.size(213, 160);
    video.hide();
    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
}

function draw() {

    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);

    background(bgimage);
    // Draw the video
    image(flippedVideo, 730, 364);


    // Draw the label
    if (label == "sad") {
        gif_createImg2.size(0, 0);
        gif_createImg.size(400, 50);
        gif_createImg.position(300, 70);
        gif_createImg3.size(200, 200);
        gif_createImg3.position(20, 130);
        gif_createImg4.size(250, 200);
        gif_createImg4.position(230, 130);
        gif_createImg5.size(240, 180);
        gif_createImg5.position(20, 340);
        gif_createImg6.size(240, 180);
        gif_createImg6.position(270, 340);
        gif_createImg7.size(140, 180);
        gif_createImg7.position(520, 340);
        gif_createImg8.size(260, 200);
        gif_createImg8.position(490, 130);
        sound1.playMode('untilDone');
        sound1.play();
        //if (millis() >= 500+timer) {
        //gif_createImg.size(0, 0);
        //timer = millis();
    }
    else {
        // Clearing previous "depression" images and shows happy ads
        gif_createImg.size(0, 0);
        gif_createImg3.size(0, 0);
        gif_createImg4.size(0, 0);
        gif_createImg5.size(0, 0);
        gif_createImg6.size(0, 0);
        gif_createImg7.size(0, 0);
        gif_createImg8.size(0, 0);
        gif_createImg2.size(200, 25);
        gif_createImg2.position(390, 70);
        sound1.pause();
    }
}

// Get a prediction for the current video frame
function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

}

// When we get a result
function gotResult(error, results) {
    // If there is an error
    if (error) {
        console.error(error);
        return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
}