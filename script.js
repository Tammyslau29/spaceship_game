$(document).ready(function(){
	var mySpaceship = new Spaceship(spaceshipConfig);
	mySpaceship.start();
	
	$(document).on('keydown', function(data){
		mySpaceship.interpKeyPress(data.key);
		
	});
	
});

//constructor
function Spaceship(config){
	var self = this;
	self.height = config.height || 150;
	self.width = config.width || 100;
	self.imageSrc = config.imageSrc;
	self.ship;
	
	self.createSpaceship = function(){
		var temp = $('<div>')
		temp.css({
			"height": self.height + 'px',
			"width" : self.width + '',
			"position" : "absolute",
			"background-image" : "url(" + self.imageSrc + ")",
			"background-size": "contain",
			"background-repeat": "no-repeat",
			"top" : 200,
			"left" : 200,
			"display" : "inline-block"
		}).attr('id', 'ship')
		
		self.ship = temp;
	}
	
	self.appendShipToSpace = function(){
		self.createSpaceship();
		self.ship.appendTo($('#space'));
	}
	
	self.interpKeyPress = function(key){
		var val = {
			direction : null,
			value: null
		};
		
		switch (key){
			case 'w':
				val.direction = 'top'
				val.value = '-'
				break;
			case 'a':
				val.direction = 'left'
				val.value = '-'
				
				break;
			case 's':
				val.direction = 'top'
				val.value = ''
				
				break;
			case 'd':
				val.direction = 'left'
				val.value = ''
				break;
		}
		
		val.value = (val.value + 5).toString();
		
		self.move(val);
	}
	
	self.move = function(val){
		var shipCoords = $('#ship').offset();
		
		if(val.direction === 'top'){
			shipCoords.top = shipCoords.top + parseInt(val.value)
			self.ship.css('top', shipCoords.top)
		}else{
			shipCoords.left = shipCoords.left + parseInt(val.value)
			self.ship.css('left', shipCoords.left)
		}
	
	}
	
	self.start = function(){
		self.appendShipToSpace();
	}
}

//spaceship config
var spaceshipConfig = {
	imageSrc : "https://3.bp.blogspot.com/-jGC08Dy0zg8/U405cNq1-MI/AAAAAAAABqU/38d5rmV1S8Y/s1600/redfighter0006.png",
	height: 383,
	width: 343
}
