//
// by Matt Mercer
//


var parshmen = {
  name:parshmen,
  unemployed:0,
  increment:1,
  capincrement:0,
  cap:100,
  power:1,
  assigned:0,
  counter:1000
}
var userInput;
function setInputNumber() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("demo").innerHTML = userInput; //test input function
    x = userInput; 
}
setInputNumber();
console.log(userInput); 



var dparshmenAllocated = 0;
var gparshmenAllocated = 0;
var rparshmenAllocated = 0;
var sparshmenAllocated = 0;
var eparshmenAllocated = 0;

function assignParshman(number){
  var dparshmenAllocated = 0;
  console.log(dparshmenAllocated);
  userInput = document.getElementById("demo").innerHTML;
  if (parshmen.unemployed + parshmen.assigned < parshmen.cap + 1){
    parshmen.assigned = dparshmenAllocated + userInput;
    parshmen.unemployed = parshmen.unemployed - userInput;
    dparshmenAllocated = dparshmenAllocated + userInput;
    document.getElementById("dparshmenAllocated").innerHTML = dparshmenAllocated;
		document.getElementById('parshmanCount').innerHTML = parshmen.unemployed;
  }
}

var parshemnIncrement = setInterval(parshmenCount, parshmen.counter);

function parshmenCount () {
  if (parshmen.unemployed + parshmen.assigned < parshmen.cap){
  parshmen.unemployed = parshmen.unemployed + 1;
  parshmen.capincrement = parshmen.capincrement + 1;
  document.getElementById('parshmanCount').innerHTML = parshmen.unemployed;
  document.getElementById('parshmanCap').innerHTML = parshmen.capincrement;
  }
}
 
var diamondChip = 0; 
var diamondMark = 0;
var diamondBroam = 0;
var counter = 1000;
var diamonds = setInterval(diamondMine, counter);

function diamondMine() {
    var c = Math.floor(Math.random().toFixed(2) * 100);
      if (c < 80){
    diamondChip = diamondChip + 1;
      document.getElementById('dchip').innerHTML = diamondChip.toLocaleString('en-US');        
        }   
  else if (c < 95){	
    	diamondMark = diamondMark + 1;
      document.getElementById('dmark').innerHTML = diamondMark.toLocaleString('en-US');
  	}
  else if (c < 99){	
    	diamondBroam = diamondBroam + 1;
      document.getElementById('dbroam').innerHTML = diamondBroam.toLocaleString('en-US');
      
  	}
}

var garnetChip = 0; 
var garnetMark = 0;
var garnetBroam = 0;
var counter = 1000;
var garnets = setInterval(garnetMine, counter);

function garnetMine() {
    var c = Math.floor(Math.random().toFixed(2) * 100);
      if (c < 80){
    garnetChip = garnetChip + 1;
      document.getElementById('gchip').innerHTML = garnetChip.toLocaleString('en-US');        
        }   
  else if (c < 95){	
    	garnetMark = garnetMark + 1;
      document.getElementById('gmark').innerHTML = garnetMark.toLocaleString('en-US');
  	}
  else if (c < 99){	
    	garnetBroam = garnetBroam + 1;
      document.getElementById('gbroam').innerHTML = garnetBroam.toLocaleString('en-US');
      
  	}
}

