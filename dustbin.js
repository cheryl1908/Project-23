class Dustbin {
    constructor(x, y, width, height) {
      var options = {
      isStatic:true
      }
      this.body1= Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body1);
    }
    display(){
      var pos =this.body1.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("brown");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }