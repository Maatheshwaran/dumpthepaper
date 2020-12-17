class Paper {
    constructor(x,y) {
      var options = {
          restutition:0.3,
          friction: 0.5,
          density:1.2,
          isStatic:false
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      rectMode(CENTER);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.radius);
      pop();
    }
  };