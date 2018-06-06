//
// by Matt Mercer
//

/* .. commented out section to set names
function bake_cookie(name, value) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + 30);
	var cookie = [name, '=', JSON.stringify(value),'; expires=.', exdate.toUTCString(), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
	document.cookie = cookie;
}
function read_cookie(name) {
	var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
	result && (result = JSON.parse(result[1]));
	return result;
}

//Prompt player for names
if (!read_cookie('civ') && !localStorage.getItem('civ')){
	var houseName = prompt('Please name your house','');
	document.getElementById('houseName').innerHTML = houseName;
}
if (!read_cookie('civ') && !localStorage.getItem('civ')){
	var rulerName = prompt('What is your name?','');
	document.getElementById('rulerName').innerHTML = rulerName;
}
*/

var parshmen = {
  name:parshmen, // name
  unemployed:0, //how many unemployed parshmen 
  increment:1, // base parshmen increment amount
  capincrement:0, // base parshmen increment cap
  cap:100, // base parshmen cap
  power:1, // base parshmen power
  current:0, // how many parshmen total
  employed:0, // how many parshmen employed
  counter:100, // parshmen growth rate counter
  diamondminer:0,
  garnetminer:0,
  rubyminer:0,
  sapphireminer:0,
  emeraldminer:0
}

var food = {
  name:food,
  total:0,
  increment:1
},
wood = {
  name:wood,
  total:0,
  increment:1
},
stone = {
  name:stone,
  total:0,
  increment:1
},
ore = {
  name:ore,
  total:0,
  increment:1
},
leather = {
  name:leather,
  total:0,
  increment:1
},
metal = {
  name:metal,
  total:0,
  increment:1
},
diamond = {
  chip:0,
  chipchance:80,
  mark:0,
  markchance:95,
  broam:0,
  broamchance:99,
  speed:25, // unused for now
  speedcap:0, // unused for now
  storagelimit:100, // unused for now
  counter:1000
},
garnet = {
  chip:0,
  chipchance:80,
  mark:0,
  markchance:95,
  broam:0,
  broamchance:99,
  speed:25, // unused for now
  speedcap:0, // unused for now
  storagelimit:100, // unused for now
  counter:2000
},
ruby = {
  chip:0,
  chipchance:80,
  mark:0,
  markchance:98,
  broam:0,
  broamchance:99,
  speed:25, // unused for now
  speedcap:0, // unused for now
  storagelimit:100, // unused for now
  counter:3000
},
sapphire = {
  chip:0,
  chipchance:80,
  mark:0,
  markchance:98,
  broam:0,
  broamchance:99,
  speed:25, // unused for now
  speedcap:0, // unused for now
  storagelimit:100, // unused for now
  counter:4000
},
emerald = {
  chip:0,
  chipchance:85,
  mark:0,
  markchance:98,
  broam:0,
  broamchance:99,
  speed:25, // unused for now
  speedcap:0, // unused for now
  storagelimit:100, // unused for now
  counter:10000
}

document.getElementById('parshmanCap').innerHTML = parshmen.cap;

var wealth = 0;
function diamondChipWealth() {
  if (diamond.chip > 0 || diamond.mark > 0 || diamond.broam > 0){
    wealth =  (diamond.chip) + (diamond.mark * 4) + (diamond.broam * 20) + 
              (garnet.chip * 5) + (garnet.mark * 25) + (garnet.broam * 100) + 
              (ruby.chip * 10) + (ruby.mark * 50) + (ruby.broam * 200) + 
              (sapphire.chip * 25) + (sapphire.mark * 125) + (sapphire.broam * 500) + 
              (emerald.chip * 50) + (emerald.mark * 250) + (emerald.broam * 1000);
    document.getElementById('dcWealth').innerHTML = wealth.toLocaleString('en-US');
  }  
};

var wealthIncrement = setInterval(diamondChipWealth, 1000)

function setInputNumber() {
    var userInput = document.getElementById("userInput").value;
    var userInputInteger = parseInt(userInput); // converts input string to integer
    assignParshman(userInputInteger);  // pass in the input as the first param to assignParshman
}


var dparshmenAllocated = 0;
var gparshmenAllocated = 0;
var rparshmenAllocated = 0;
var sparshmenAllocated = 0;
var eparshmenAllocated = 0;

function parshmanAllocation(){
document.getElementById('dparshmenAllocated').innerHTML = dparshmenAllocated.toLocaleString('en-US');
document.getElementById('sparshmenAllocated').innerHTML = sparshmenAllocated.toLocaleString('en-US');
document.getElementById('eparshmenAllocated').innerHTML = eparshmenAllocated.toLocaleString('en-US');
document.getElementById('rparshmenAllocated').innerHTML = rparshmenAllocated.toLocaleString('en-US');
document.getElementById('gparshmenAllocated').innerHTML = gparshmenAllocated.toLocaleString('en-US');
document.getElementById('parshmanUnemployed').innerHTML = parshmen.unemployed.toLocaleString('en-US');
document.getElementById('parshmanEmployed').innerHTML = parshmen.employed.toLocaleString('en-US');
};

window.setInterval(parshmanAllocation, 10);

function dassignParshman(number){ 
  if (parshmen.unemployed + parshmen.employed < parshmen.cap + 1 && parshmen.unemployed >= 1){
    parshmen.unemployed -= number;
    dparshmenAllocated += number;
    parshmen.employed += number;
  }
}

function gassignParshman(number){ 
  if (parshmen.unemployed + parshmen.employed < parshmen.cap + 1 && parshmen.unemployed >= 1 && wealth > 5000){
    parshmen.unemployed -= number;
    gparshmenAllocated += number;
    parshmen.employed += number;
  }
}

function rassignParshman(number){ 
  if (parshmen.unemployed + parshmen.employed < parshmen.cap + 1 && parshmen.unemployed >= 1 && wealth > 10000){
    parshmen.unemployed -= number;
    rparshmenAllocated += number;
    parshmen.employed += number;
  }
}

function sassignParshman(number){ 
  if (parshmen.unemployed + parshmen.employed < parshmen.cap + 1 && parshmen.unemployed >= 1 && wealth > 25000){
    parshmen.unemployed -= number;
    sparshmenAllocated += number;
    parshmen.employed += number;
  }
}

function eassignParshman(number){ 
  if (parshmen.unemployed + parshmen.employed < parshmen.cap + 1 && parshmen.unemployed >= 1 && wealth > 50000){
    parshmen.unemployed -= number;
    eparshmenAllocated += number;
    parshmen.employed += number;
  }
}

window.setInterval(function(){diamondMine(dparshmenAllocated);}, diamond.counter);
window.setInterval(function(){garnetMine(gparshmenAllocated);}, garnet.counter);
window.setInterval(function(){rubyMine(rparshmenAllocated);}, ruby.counter);
window.setInterval(function(){sapphireMine(sparshmenAllocated);}, sapphire.counter);
window.setInterval(function(){emeraldMine(eparshmenAllocated);}, emerald.counter);

var parshmenIncrement = setInterval(parshmenCapCount, parshmen.counter);

function parshmenCapCount () {
  if (parshmen.unemployed + parshmen.employed < parshmen.cap){
  parshmen.unemployed = parshmen.unemployed + 1;
  parshmen.current = parshmen.current + 1;
  document.getElementById('parshmanUnemployed').innerHTML = parshmen.unemployed;
  document.getElementById('parshmanEmployed').innerHTML = parshmen.employed;
  document.getElementById('parshmanCurrent').innerHTML = parshmen.current;
  }
}

var minediamond = 0;
var minegarnet = 0;
var mineruby = 0;
var minesapphire = 0;
var mineemerald = 0;


function diamondMine(number){
    var c = Math.floor(Math.random().toFixed(2) * 100);
    if (dparshmenAllocated > 0) {
      if (c < 80){
      diamond.chip = diamond.chip + (1 * dparshmenAllocated);
        document.getElementById('dchip').innerHTML = diamond.chip.toLocaleString('en-US');        
          }   
    else if (c < 95){	
      diamond.mark = diamond.mark + (1 * dparshmenAllocated);
        document.getElementById('dmark').innerHTML = diamond.mark.toLocaleString('en-US');
      }
    else if (c < 99){	
      diamond.broam = diamond.broam + (1 * dparshmenAllocated);
        document.getElementById('dbroam').innerHTML = diamond.broam.toLocaleString('en-US');
        
      }
  }  
};

function garnetMine(number){
  var c = Math.floor(Math.random().toFixed(2) * 100);
  if (gparshmenAllocated > 0) {
    if (c < 80){
    garnet.chip = garnet.chip + (1 * gparshmenAllocated);
      document.getElementById('gchip').innerHTML = garnet.chip.toLocaleString('en-US');        
        }   
  else if (c < 95){	
    garnet.mark = garnet.mark + (1 * gparshmenAllocated);
      document.getElementById('gmark').innerHTML = garnet.mark.toLocaleString('en-US');
    }
  else if (c < 99){	
    garnet.broam = garnet.broam + (1 * gparshmenAllocated);
      document.getElementById('gbroam').innerHTML = garnet.broam.toLocaleString('en-US');
      
    }
}  
};

function rubyMine(number){
  var c = Math.floor(Math.random().toFixed(2) * 100);
  if (rparshmenAllocated > 0) {
    if (c < 80){
    ruby.chip = ruby.chip + (1 * rparshmenAllocated);
      document.getElementById('rchip').innerHTML = ruby.chip.toLocaleString('en-US');        
        }   
  else if (c < 95){	
    ruby.mark = ruby.mark + (1 * rparshmenAllocated);
      document.getElementById('rmark').innerHTML = ruby.mark.toLocaleString('en-US');
    }
  else if (c < 99){	
    ruby.broam = ruby.broam + (1 * rparshmenAllocated);
      document.getElementById('rbroam').innerHTML = ruby.broam.toLocaleString('en-US');
      
    }
}  
};

function sapphireMine(number){
  var c = Math.floor(Math.random().toFixed(2) * 100);
  if (sparshmenAllocated > 0) {
    if (c < 80){
    sapphire.chip = sapphire.chip + (1 * sparshmenAllocated);
      document.getElementById('schip').innerHTML = sapphire.chip.toLocaleString('en-US');        
        }   
  else if (c < 95){	
    sapphire.mark = sapphire.mark + (1 * sparshmenAllocated);
      document.getElementById('smark').innerHTML = sapphire.mark.toLocaleString('en-US');
    }
  else if (c < 99){	
    sapphire.broam = sapphire.broam + (1 * sparshmenAllocated);
      document.getElementById('sbroam').innerHTML = sapphire.broam.toLocaleString('en-US');
      
    }
}  
};

function emeraldMine(number){
    var c = Math.floor(Math.random().toFixed(2) * 100);
    if (eparshmenAllocated > 0) {
      if (c < emerald.chipchance){
      emerald.chip = emerald.chip + (1 * eparshmenAllocated);
        document.getElementById('echip').innerHTML = emerald.chip.toLocaleString('en-US');        
          }   
    else if (c < emerald.markchance){	
      emerald.mark = emerald.mark + (1 * eparshmenAllocated);
        document.getElementById('emark').innerHTML = emerald.mark.toLocaleString('en-US');
      }
    else if (c < emerald.broamchance){	
      emerald.broam = emerald.broam + (1 * eparshmenAllocated);
        document.getElementById('ebroam').innerHTML = emerald.broam.toLocaleString('en-US');
        
      }
  }  
};

function unlockGarnetMine() {
  var x = document.getElementById('gmine');
  if (wealth > 5000) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function unlockGarnetMine1() {
  var x = document.getElementById('gmine1');
  if (wealth > 5000) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function unlockRubyMine() {
  var x = document.getElementById('rmine');
  if (wealth > 10000) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function unlockRubyMine1() {
  var x = document.getElementById('rmine1');
  if (wealth > 10000) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function unlockSapphireMine() {
  var x = document.getElementById('smine');
  if (wealth > 25000) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function unlockSapphireMine1() {
  var x = document.getElementById('smine1');
  if (wealth > 25000) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function unlockEmeraldMine() {
  var x = document.getElementById('emine');
  if (wealth > 50000) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function unlockEmeraldMine1() {
  var x = document.getElementById('emine1');
  if (wealth > 50000) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

window.setInterval(function(){unlockGarnetMine();}, 1000);
window.setInterval(function(){unlockGarnetMine1();}, 1000);
window.setInterval(function(){unlockRubyMine();}, 1000);
window.setInterval(function(){unlockRubyMine1();}, 1000);
window.setInterval(function(){unlockSapphireMine();}, 1000);
window.setInterval(function(){unlockSapphireMine1();}, 1000);
window.setInterval(function(){unlockEmeraldMine();}, 1000);
window.setInterval(function(){unlockEmeraldMine1();}, 1000);