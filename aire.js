object_detector = "";
img = "";
status = "";

result = []

function preload(){
    img = loadImage("aire_acondicionado.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos";
}

// function draw(){
//     image(img, 0, 0, 640, 420);

//     text("aire", 45, 75);
//     stroke("darkgreen");
//     noFill();
//     rect(35, 35, 490, 380);
// }

function draw(){
    console.log("probando")

    image(img, 0, 0, 640, 420);
    if(status == ""){
        console.log("condicional");
        for(i = 0; i < result.length; i++){
            document.getElementById("status").innerHTML = "status: detectando objetos";
            confianza = Floor(result[i].confidence * 100);
            nombre = result[i].label;
            positionX = result[i].x;
            positionY = result[i].y;
            width = result[i].width;
            height = result[i].height;

            text(nombre + confianza + "%", positionX + 15, positionY + 15);
            noFill();
            stroke("red");
            rect(positionX, positionY, width, height);
        }
    }
}

function modelLoaded(){
    console.log("modelo cargado");
    status = true;

    object_detector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
    }
}