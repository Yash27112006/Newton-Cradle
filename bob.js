class bob{
    constructor(x, y, radius) {
    var options=
    {
    
        'isStatic':false,
        'restitution':1.3,
        'friction':1,
        'density':1.2
        
       
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius=radius;
    
    World.add(world,this.body);
    }
    display(){
       // var pos=this.body.position
      // push();
       // translate(pos.x,pos.y)
       fill(255,0,0);
       ellipseMode(RADIUS);
       ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
      
    //pop();
    }
    
    
    }
    