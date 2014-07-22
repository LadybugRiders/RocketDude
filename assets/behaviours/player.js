"use strict";

//>>LREditor.Behaviour.name: Player

var Player = function(_gameobject) {
	LR.Behaviour.call(this, _gameobject);
};

Player.prototype = Object.create(LR.Behaviour.prototype);
Player.prototype.constructor = Player;

Player.prototype.start = function() {
  // set max speed
  this.speed = new Phaser.Point(150, 60);
  // set no gravity
  this.go.entity.body.data.gravityScale = 0;

  // set camera to follow Dude
  this.go.game.camera.follow(this.go.entity);

  // enable cursors
  this.cursors = this.go.game.input.keyboard.createCursorKeys();
};

Player.prototype.update = function() {
	this.go.body.moveRight(this.speed.x)

  if (this.cursors.up.isDown) {
  	this.go.body.moveUp(this.speed.y);
  } else if (this.cursors.down.isDown) {
    this.go.body.moveDown(this.speed.y);
  }
};