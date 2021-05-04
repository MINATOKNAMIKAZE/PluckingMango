class launcher{
    constructor(bodyA,pointB  ){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:3
        }
       this.bodyA=bodyA 
       this.pointB=pointB
       this.body=Constraint.create(options)
       World.add(world,this.body)
    }
    fly(){
        this.body.bodyA=null
    }
    attach(body){this.body.bodyA=body}
    display(){
        if(this.body.bodyA){
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
    }}
}