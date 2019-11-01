var hatx;
var haty;
var move_hat;
var cx=600;
var cy=160;
var mx=300;
var my=380;

function setup() 
{
   createCanvas(600, 800);

   hatx = 220;
   haty = 260;
   move_hat = false;
}

function draw() 
{
   background(255);

   //drawHat(hatx, haty);
   
   push();
   noStroke();
   fill(110, 79, 48);
   rect(-1,600, 601, 200);
   fill(118,158,169);
   rect(-1,400,601,200);
   fill(169,217,203);
   rect(-1,0,601,400);
   fill(255);
   beginShape();
   curveVertex(cx,cy);
   curveVertex(cx-20,cy-40);
   curveVertex(cx-60,cy-60);
   curveVertex(cx-80,cy-40);
   curveVertex(cx-120,cy-60);
   curveVertex(cx-160,cy-40);
   curveVertex(cx-240,cy-40);
   curveVertex(cx-300,cy+40);
   curveVertex(cx-340,cy+20);
   curveVertex(cx-380,cy+60);
   curveVertex(cx-400,cy+140);
   curveVertex(cx-460,cy+160);
   curveVertex(cx-560,cy+180);
   curveVertex(cx-580,cy+200);
   curveVertex(cx-400,cy+200);
   curveVertex(cx-240,cy+180);
   curveVertex(cx-160,cy+200);
   curveVertex(cx-100,cy+180);
   curveVertex(cx-40,cy+200);
   curveVertex(cx,cy+160);
   endShape(CLOSE);
   pop();


   //noStroke();
   fill(239,159,112);
   ellipse(360,280,10,30);
   ellipse(240,280,10,30);
   beginShape();
   vertex(420,680);
   vertex(440,720);
   vertex(420,760);
   vertex(410,760);
   vertex(400,700);
   endShape(CLOSE);
   beginShape();
   vertex(180,680);
   vertex(160,720);
   vertex(180,760);
   vertex(190,760);
   vertex(200,700);
   endShape(CLOSE);
   fill(255);
   quad(mx,my-60,mx+60,my+20,mx,my+160,mx-60,my+20);
   quad(mx,my,mx+20,my-40,mx+40,my-10,mx+20,my+20);
   quad(mx,my,mx-20,my-40,mx-40,my-10,mx-20,my+20);
   fill(140,31,31);
   quad(mx,my,mx+20,my+20,mx,my+40,mx-20,my+20);
   quad(mx,my+40,mx+25,my+100,mx,my+160,mx-25,my+100);
   fill(239,159,112);
   quad(mx,my,mx+20,my-40,mx,my-60,mx-20,my-40);
   ellipse(300,280,120,160);

   fill(33,6,21);
   beginShape();
   vertex(mx,my+160);
   vertex(mx+60,my+20);
   vertex(mx+120,my+40);
   vertex(mx+100,my+180);
   vertex(mx+100,my+420);
   vertex(mx,my+420);
   endShape(CLOSE);
   beginShape();
   vertex(mx,my+160);
   vertex(mx-60,my+20);
   vertex(mx-120,my+40);
   vertex(mx-100,my+180);
   vertex(mx-100,my+420);
   vertex(mx,my+420);
   endShape(CLOSE);
   beginShape();
   vertex(420,420);
   vertex(440,440);
   vertex(440,700);
   vertex(420,720);
   vertex(400,700);
   vertex(400,500);
   endShape(CLOSE);
   beginShape();
   vertex(180,420);
   vertex(160,440);
   vertex(160,700);
   vertex(180,720);
   vertex(200,700);
   vertex(200,500);
   endShape(CLOSE);
   





   fill(random(255),random(255),random(255));
   ellipse(300,230,40,30);
   fill(0);
   ellipse(300,230,5,30);
   fill(255);
   ellipse(270,280,30,20);
   ellipse(330,280,30,20);

   fill(110,79,48);
   ellipse(270,280,20,20);
   ellipse(330,280,20,20);
   quad(270,330,330,330,320,320,280,320);


   fill(33,6,21);
   beginShape();
   vertex(hatx, haty);
   vertex(hatx+160, haty);
   vertex(hatx+160, haty-10);
   vertex(hatx+140, haty-15);
   vertex(hatx+125, haty-80)
   vertex(hatx+80, haty-85);
   vertex(hatx+35, haty-80);
   vertex(hatx+20, haty-15);
   vertex(hatx, haty-10);
   endShape(CLOSE);


   if (move_hat)
   {
      haty -= 0.5;
      hatx += random(-2.5,2.5);
   }
}

function mouseClicked()
{
   if (mouseX > 220 && mouseX < 380 && mouseY > 175 && mouseY < 260)
   {
      haty = 260;
      hatx = 220;
      move_hat = true;
   }
}