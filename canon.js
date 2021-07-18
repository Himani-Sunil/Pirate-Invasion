class canon{
constructer(x,y,width,height,angle){
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.angle=angle;


}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    fill("black")
    push()
    translate(this.pos.x,this.pos.y)
    rotate(this.angle)
    rect(10,20,this.width,this.height)
    pop()
    arc(this.x-30,this.y+90,140,200,PI,TWO_PI)
    noFill()
}




}