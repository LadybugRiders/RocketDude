"use strict";

//>>LREditor.Behaviour.name: Player

var Player = function(_gameobject) {
	LR.Behaviour.call(this, _gameobject);
};

Player.prototype = Object.create(LR.Behaviour.prototype);
Player.prototype.constructor = Player;

Player.prototype.start = function() {
  // set max speed
  this.speed = new Phaser.Point(150, 100);
  // set no gravity
  this.go.entity.body.data.gravityScale = 0;

  // set camera to follow Dude
  this.go.game.camera.follow(this.go.entity);
  //set the deadzone
  this.go.game.camera.deadzone = new Phaser.Rectangle(50, 50, 200, 260);

  // enable cursors
  this.cursors = this.go.game.input.keyboard.createCursorKeys();

  // set finish to false
  this.finish = false;
};

Player.prototype.update = function() {
  // if Dude doesn't cross the finish line
  if (this.finish == false) {
    this.go.body.moveRight(this.speed.x)

    if (this.cursors.up.isDown) {
      this.go.body.moveUp(this.speed.y);
    } else if (this.cursors.down.isDown) {
      this.go.body.moveDown(this.speed.y);
    }
  } else {
    setTimeout(function() {
      this.go.body.setZeroVelocity();
    }, 500);
  }
};