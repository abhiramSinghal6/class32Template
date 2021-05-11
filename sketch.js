const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var TIME = 0

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if the background changes its image 
    if(backgroundImg) 
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(55)
    text(TIME,width -1100,50)

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
           
    //change the data in JSON format
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime
    // write code slice the datetime
    hour = dateTime.slice(11,13)
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06) {
        bg = "sunrise1.png"
    }else if(hour>=06 && hour<=08) {
        bg = "sunrise2.png"
    }else if(hour>=08 && hour<=10) {
        bg = "sunrise3.png"
    }else if(hour>=10 && hour<=12) {
        bg = "sunrise4.png"
    }else if(hour>=12 && hour<=14) {
        bg = "sunrise5.png"
    }else if(hour>=14 && hour<=16) {
        bg = "sunrise6.png"
    }else if(hour>=18 && hour<=20) {
        bg = "sunset7.png"
    }else if(hour>=20 && hour<=23) {
        bg = "sunset9.png"
    }else if(hour>=23 && hour==0) {
        bg = "sunset10.png"
    }else if(hour==0 && hour<=3) {
        bg = "sunset11.png"
    }else {
        bg = "sunset12.png"
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)
}
