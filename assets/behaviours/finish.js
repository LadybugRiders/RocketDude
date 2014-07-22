"use strict";

//>>LREditor.Behaviour.name: Finish

var Finish = function(_gameobject) {
	LR.Behaviour.call(this, _gameobject);
};

Finish.prototype = Object.create(LR.Behaviour.prototype);
Finish.prototype.constructor = Finish;

Finish.prototype.onBeginContact = function(_otherBody, _myShape, _otherShape, _equation){
  console.log("sdfsdfsd");

  // get playerbehaviour
  var behaviourPlayer = _otherBody.go.getBehaviour(Player);
  // set finish to true
  behaviourPlayer.finish = true;
}