const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getbgImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json();
    //console.log(responseJSON);
    //console.log(responseJSON.datetime);
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
    if(hour>04 && hour<06){
        bg="sprites/sunrise.png";
    }
     else if(hour>06 && hour<08){
        bg="sprites/sunrise1.png";
     }   
     else if(hour>=23 && hour==0){
        bg="sprites/sunset10.png";
     }   
     else if(hour==0 && hour<03){
        bg="sprites/sunset11.png";
     } 
     else{
         bs="sprites/sunset12.png";
     }  

     backgroundImage=loadImage(bg);
    }
