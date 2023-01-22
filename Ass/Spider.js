class Spider{
    constructor(game){
        this.game=game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Spider.png"), -2, 0 , 37,78, 12, 0.2);
        //const runningAnimator = new Animator(ASSET_MANAGER.getAsset("./SailorMoon.png"), 4, 0, 64, 64, 10, 0.1);

// Jumping animation
//const jumpingAnimator = new Animator(ASSET_MANAGER.getAsset("./SailorMoon.png"), 5, 0, 64, 64, 6, 0.2);
     this.x=0;
     this.y=0;
    this.speed=100;
     };
    update(){
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x=0;
   
    };
    draw(ctx){
        //call animator for the prototype
      this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
       // ctx.drawImage(ASSET_MANAGER.getAsset("./SailorMoon.png"), 0, 0);
    }
    };



//al
