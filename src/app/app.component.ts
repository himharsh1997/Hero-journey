import { Component } from '@angular/core';
import {Game, AUTO, CursorKeys} from 'phaser-ce';


@Component({
  selector: 'app-s2',
  template: `<div id="lvl2"></div>
  `
})
export class App3Component {
  game: any;
  ground: any;
  player: any;
  count ;
  countdown : number;
  // tslint:disable-next-line:member-ordering
  hitPlatform: any;
  // tslint:disable-next-line:member-ordering
  platform: any;
  // tslint:disable-next-line:member-ordering
  cloudd: any;
  i: any;
  text2;
  start = true;
  title = 'app';
  player1: any;
  back: any;
  elip: any;
  anim: any;
  skyy: any;
  skyy1: any;
  loopText: any;
  cursors: any;
  tree1: any;
  tree2: any;
  tree3: any;
  tree4: any;
  tree5: any;
  tree6: any;
  tree7: any;
  tree8: any;
  tree9: any;
  tree10: any;
  tree11: any;
  tree12: any;
  tree13: any;
  tree14: any;
  tree15: any;
  tree16: any;
  tree17: any;
  tree18: any;
  tree19: any;
  tree20: any;
  tree21: any;
  tree22: any;
  tree23: any;
  tree24: any;
  plant1: any;
  plant2: any;
  plant3: any;
  plant4: any;
  plant5: any;
  plant6: any;
  plant7: any;
  text : any;
  text3;
 jump: any;
 flag: any;
note: number;
value;
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.game = new Phaser.Game(900, 720, Phaser.CANVAS, 'lvl2', {preload: this.preload, create: this.create, update: this.update, render: this.render}, true);

  }

  preload() {
    this.game.load.image('cloud', 'assets/clouds_2.png');
    this.game.load.image('road', 'assets/stoneMid.png');
    this.game.load.image('bsky', 'assets/backst.png');
    this.game.load.image('br2', 'assets/p2_jump.png');
    this.game.load.audio('jump', 'assets/jp.mp3');
  }

  create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.count = 0;
        this.countdown = 1;
        this.note = 0;
        this.value = 0;
         this.skyy = this.game.add.sprite(0, 0, 'bsky');
         this.skyy.smoothed = true;
         this.skyy.fixedToCamera = true;

         this.jump = this.game.sound.add('jump');
         this.jump.volume = 1;


         this.platform = this.game.add.group();
         this.platform.enableBody = true;
          this.ground = this.platform.create(0, this.game.world.height - 90, 'road');
          this.ground.scale.setTo(13, 1.4);
          this.ground.body.immovable = true;

                this.text = this.game.add.text(this.game.world.centerX - 420, this.game.world.centerY - 350, 'SCORE  ' + this.count);
                this.text2 = this.game.add.text(this.game.world.centerX - 250, this.game.world.centerY - 350, 'TIME ' + this.countdown);
                this.text3 = this.game.add.text(this.game.world.centerX + 250, this.game.world.centerY - 350, '');

                this.player = this.game.add.sprite(30, this.game.world.height - 190, 'br2');
              //  We need to enable physics on the player

              this.player.scale.setTo(1, 1);

          this.player.smoothed = true;

           this.game.physics.arcade.enable(this.player, false);
             this.player.body.gravity.y = 980;


             //  Player physics properties. Give the little guy a slight bounce.

              this.player.body.collideWorldBounds = true;

              //  Our two animations, walking left and right.
              this.player.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
              this.player.animations.add('right', [6, 7, 8, 9, 10], 10, true);
              this.player.animations.add('up', [0, 1, 2, 3, 4, 5], 10, true);
              this.cursors = this.game.input.keyboard.createCursorKeys();
            this.game.camera.follow(this.player, 34, 23, 12); }



  update() {
    this.countdown++;
    if (this.countdown / 100 >= 1 && (this.value <= 10 && this.note <= 7))
    {
       this.text2.setText('TIME ' + Math.round(this.countdown / 100));
       this.note = this.note++;
    }
    if ( this.note === 7 || this.value === 10) {
     this.text3.setText('You Win');

    }
    // tslint:disable-next-line:one-line
    else if (Math.round(this.countdown / 100) === 10 && this.count <= 7&&this.note==7&&this.value<10)
      {
        this.text3.setText('You Lose');
        this.text.setTextTo('SCORE 0');
        this.text2.setTextTo('TIME 0');
      }


    this.hitPlatform = this.game.physics.arcade.collide(this.player, this.platform);
    //  Reset the players velocity (movement)
       if (this.cursors.left.isDown)
       // tslint:disable-next-line:one-line
       {
           //  Move to the left
           this.player.body.velocity.x = -199;

           this.player.animations.stop();

       }
      // tslint:disable-next-line:one-line
      else  if (this.cursors.right.isDown)

       // tslint:disable-next-line:one-line
       {
         this.player.body.velocity.x = +199;
         this.player.animations.stop();

       }
       // tslint:disable-next-line:one-line
       else if (this.cursors.up.isDown) {
         this.player.body.velocity.y = -309;
         this.jump.play();
         this.count++;
         if (Math.round(this.count / 100) === 1 && this.value <= 10) {

           this.text.setText('SCORE  ' + this.value);
           this.value++;
       }
         this.player.animations.stop();

       }
       // tslint:disable-next-line:one-line
       else {
         this.player.body.velocity.x = 0;
       }
  }

  render() {

  }

}




@Component({
  selector: 'app-root',
  entryComponents: [App3Component],
  template: `
  <h1  [hidden]='!level3' style="-webkit-text-stroke: 2px black;text-shadow: 3px 3px purple;-moz-text-size-adjust: 9px 9px;text-align: center;opacity:2">Level 1</h1>
  <div  id="sq" [hidden]='!level3' []='nxt'></div>
  <input [(ngModel)]="nxt">
  <button  (click)='nextle()'  class='btn-info' [disabled]='nxt' [hidden]='!level3'>Next Level</button>
  <app-s2  [hidden]='level3' ></app-s2>

  `
})
export class AppComponent {
  coutdown: any;
  level3 = true;
  count: any;
  ground: any;
  player: any;
  nxt;
  // tslint:disable-next-line:member-ordering
  hitPlatform: any;
  countdown: any;
  // tslint:disable-next-line:member-ordering
  platform: any;
  posx;
  // tslint:disable-next-line:member-ordering
  cloudd: any;
  note: number;
  i: any;
  start = true;
  title = 'app';
  game: Game;
  player1: any;
  back: any;
  elip: any;
  anim: any;
  skyy: any;
  skyy1: any;
  loopText: any;
  cursors: any;
  tree1: any;
  tree2: any;
  tree3: any;
  tree4: any;
  tree5: any;
  tree6: any;
  tree7: any;
  tree8: any;
  tree9: any;
  tree10: any;
  tree11: any;
  tree12: any;
  tree13: any;
  tree14: any;
  tree15: any;
  tree16: any;
  tree17: any;
  tree18: any;
  tree19: any;
  tree20: any;
  tree21: any;
  tree22: any;
  tree23: any;
  tree24: any;
  plant1: any;
  plant2: any;
  plant3: any;
  plant4: any;
  plant5: any;
  plant6: any;
  plant7: any;
  text: any;
  text2: any;
  text3: any;
 jump: any;
 flag: any;
 gd1: any;
 gd2: any;
 gd3: any;
 gd4: any;
 gd5: any;
 value:number;
  constructor() {
  // tslint:disable-next-line:max-line-length
  this.game = new Phaser.Game(900, 720, Phaser.CANVAS, 'sq', {preload: this.preload, create: this.create, update: this.update, render: this.render}, true);

}

  preload() {

  this.game.load.image('road', 'assets/road.png');
  this.game.load.image('bsky', 'assets/sky.png');
  this.game.load.image('br2', 'assets/p2_jump.png');
  this.game.load.image('tiles11', 'assets/tiles11.png');
  this.game.load.image('cloud', 'assets/clouds_2.png');
  this.game.load.image('ctall', 'assets/coniferTall.png');
  this.game.load.image('flag', 'assets/flagRed.png');
  this.game.load.image('plants', 'assets/plant.png');
  this.game.load.image('signb', 'assets/signRight.png');
  this.game.load.audio('jump', 'assets/jp.mp3');
}
  // tslint:disable-next-line:member-ordering


  create() {
    this.nxt = 'true';
    this.value =0;
    this.count = 0;
    this.countdown = 0;
    this.note = 0;
     this.game.physics.startSystem(Phaser.Physics.ARCADE);

     this.skyy = this.game.add.sprite(0, 0, 'bsky');
     this.skyy.smoothed = true;
     this.skyy.fixedToCamera = true;
     this.cloudd = this.game.add.sprite(0, 10, 'cloud');
     this.cloudd.scale.setTo(0.6, 0.6);
     this.tree1 = this.game.add.sprite(110, 400, 'ctall');
     this.tree1.scale.setTo(3, 5);
     this.tree2 = this.game.add.sprite(80, 400, 'ctall');
     this.tree2.scale.setTo(3, 5);
     this.tree3 = this.game.add.sprite(60, 400, 'ctall');
     this.tree3.scale.setTo(3, 5);
     this.tree4 = this.game.add.sprite(40, 400, 'ctall');
     this.tree4.scale.setTo(3, 5);
     this.tree5 = this.game.add.sprite(20, 400, 'ctall');
     this.tree5.scale.setTo(3, 5);
     this.tree6 = this.game.add.sprite(0, 400, 'ctall');
     this.tree6.scale.setTo(3, 5);
     this.tree7 = this.game.add.sprite(140, 400, 'ctall');
     this.tree7.scale.setTo(3, 5);
     this.tree8 = this.game.add.sprite(170, 400, 'ctall');
     this.tree8.scale.setTo(3, 5);
     this.tree9 = this.game.add.sprite(200, 400, 'ctall');
     this.tree9.scale.setTo(3, 5);
     this.tree10 = this.game.add.sprite(230, 400, 'ctall');
     this.tree10.scale.setTo(3, 5);
     this.tree11 = this.game.add.sprite(260, 400, 'ctall');
     this.tree11.scale.setTo(3, 5);
     this.tree12 = this.game.add.sprite(260, 400, 'ctall');
     this.tree12.scale.setTo(3, 5);
     this.tree13 = this.game.add.sprite(290, 400, 'ctall');
     this.tree13.scale.setTo(3, 5);
     this.tree14 = this.game.add.sprite(320, 400, 'ctall');
     this.tree14.scale.setTo(3, 5);
     this.tree15 = this.game.add.sprite(350, 400, 'ctall');
     this.tree15.scale.setTo(3, 5);
     this.tree16 = this.game.add.sprite(380, 400, 'ctall');
     this.tree16.scale.setTo(3, 5);
     this.tree17 = this.game.add.sprite(410, 400, 'ctall');
     this.tree17.scale.setTo(3, 5);
     this.tree18 = this.game.add.sprite(440, 400, 'ctall');
     this.tree18.scale.setTo(3, 5);
     this.tree19 = this.game.add.sprite(470, 400, 'ctall');
     this.tree19.scale.setTo(3, 5);
     this.tree20 = this.game.add.sprite(510, 400, 'ctall');
     this.tree20.scale.setTo(3, 5);
     this.tree21 = this.game.add.sprite(540, 400, 'ctall');
     this.tree21.scale.setTo(3, 5);
     this.tree22 = this.game.add.sprite(570, 400, 'ctall');
     this.tree22.scale.setTo(3, 5);
     this.tree23 = this.game.add.sprite(610, 400, 'ctall');
     this.tree23.scale.setTo(3, 5);
     this.tree24 = this.game.add.sprite(790, 400, 'ctall');
     this.tree24.scale.setTo(3, 5);

     this.plant1 = this.game.add.sprite(700, 560, 'plants');
     this.plant2 = this.game.add.sprite(600, 560, 'plants');
     this.plant3 = this.game.add.sprite(790, 560, 'plants');
     this.plant4 = this.game.add.sprite(550, 560, 'plants');
     this.plant5 = this.game.add.sprite(400, 560, 'plants');
     this.plant6 = this.game.add.sprite(430, 560, 'plants');
     this.plant7 = this.game.add.sprite(200, 560, 'plants');
     this.flag = this.game.add.sprite(700, 490, 'signb');
     this.flag.scale.setTo(1, 2);

     this.text = this.game.add.text(this.game.world.centerX - 420, this.game.world.centerY - 350, 'SCORE  ' + this.count);
     this.text2 = this.game.add.text(this.game.world.centerX - 250, this.game.world.centerY - 350, 'TIME ' + this.countdown);
     this.text3 = this.game.add.text(this.game.world.centerX + 250, this.game.world.centerY - 350, '');

     this.jump = this.game.sound.add('jump');
     this.jump.volume = 1;


  this.platform = this.game.add.group();
  this.platform.enableBody = true;
   this.ground = this.platform.create(0, this.game.world.height - 90, 'road');
   this.ground.scale.setTo(13, 2);
   this.ground.body.immovable = true;

   this.gd1 = this.platform.create(110, this.game.world.height - 160, 'road');
   this.gd1.scale.setTo(1, 0.5);
   this.gd1.body.immovable = true;
   this.gd2 = this.platform.create(210, this.game.world.height - 220, 'road');
   this.gd2.scale.setTo(1, 0.5);
   this.gd2.body.immovable = false;
   this.gd3 = this.platform.create(290, this.game.world.height - 340, 'road');
   this.gd3.scale.setTo(1, 0.5);
   this.gd3.body.immovable = true;
   this.gd4 = this.platform.create(520, this.game.world.height - 180, 'road');
   this.gd4.scale.setTo(1, 0.5);
   this.gd4.body.immovable = true;
   this.gd5 = this.platform.create(490, this.game.world.height - 490, 'road');
   this.gd5.scale.setTo(1, 0.5);
   this.gd5.body.immovable = true;


       this.player = this.game.add.sprite(30, this.game.world.height - 190, 'br2');
       //  We need to enable physics on the player

       this.player.scale.setTo(1, 1);

       this.player.smoothed = true;

       this.game.physics.arcade.enable(this.player, false);
       this.player.body.gravity.y = 780;


      //  Player physics properties. Give the little guy a slight bounce.

       this.player.body.collideWorldBounds = true;

       //  Our two animations, walking left and right.
       this.player.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
       this.player.animations.add('right', [6, 7, 8, 9, 10], 10, true);
       this.player.animations.add('up', [0, 1, 2, 3, 4, 5], 10, true);
       this.cursors = this.game.input.keyboard.createCursorKeys();
     this.game.camera.follow(this.player, 34, 23, 12);


    }





  update() {
 this.countdown++;
 if (this.countdown / 100 >= 1 && (this.value <= 10 && this.note <= 7))
 {
    this.text2.setText('TIME ' + Math.round(this.countdown / 100));
    this.note = this.note++;
 }
 if ( this.note === 7 || this.value === 10) {
  this.text3.setText('You Win');
this.nxt = false;
 }
 // tslint:disable-next-line:one-line
 else if (Math.round(this.countdown / 100) === 10 && this.count <= 7&&this.note==7&&this.value<10)
   {
     this.text3.setText('You Lose');
     this.nxt=false;
     this.text.setTextTo('SCORE 0');
     this.text2.setTextTo('TIME 0');
   }


       this.hitPlatform = this.game.physics.arcade.collide(this.player, this.platform);
     //  Reset the players velocity (movement)

       if (this.cursors.left.isDown)
        // tslint:disable-next-line:one-line
        {
            //  Move to the left
            this.player.body.velocity.x = -199;
            this.player.animations.stop();


        }
       // tslint:disable-next-line:one-line
       else  if (this.cursors.right.isDown)

        // tslint:disable-next-line:one-line
        {
          this.player.body.velocity.x = 390;
          this.player.animations.stop();

        }
        // tslint:disable-next-line:one-line
        else if (this.cursors.up.isDown) {
          this.count =  this.count;
          this.player.body.velocity.y = -309;
          this.jump.play();
          this.count++;
          if (Math.round(this.count / 100) === 1 && this.value <= 10) {

            this.text.setText('SCORE  ' + this.value);
            this.value++;
        }

          this.player.animations.stop();


        }
        // tslint:disable-next-line:one-line
        else {
         this.player.body.velocity.y = 400;
          this.player.body.velocity.x = 0;
        }
        // tslint:disable-next-line:one-line

    }
    nextle(){

      this.level3 = false;
      this.nxt = false;
      return 'false';

}
render() {
}
updateCounter() {
  this.coutdown++;
  this.text2.setText('TIME ' + this.countdown);
}
}
@Component({
  selector: 'app-main',
  entryComponents: [AppComponent],
  // tslint:disable-next-line:max-line-length
  template: `

  <div [hidden]='!onoff1'  style='background-image:url(assets/me2.png);height:300;width:400;align:right;filter:alpha(opacity=50);opacity:1;background-color:white;' class='container-fluid'>

    <h1 style="-webkit-text-stroke: 2px black;text-shadow: 3px 3px red;-moz-text-size-adjust: 9px 9px;text-align: center">Click to start</h1>
  <br>
  <br><input class='btn- center-block btn glyphicon glyphicon-name' type="button" value="Start" [hidden]='!onoff1' #ref (click)='change()' style='height:80;width:100;-moz-border-radius:10px;-webkit-border-radius:40px;border-radius:40px;border-color:yellow'/>
  </div>
  <app-root [hidden]='onoff1'></app-root>`
  })
  export class App2Component {
     onoff1 = true;
      public change() {
      this.onoff1 = false;
    }
   }
