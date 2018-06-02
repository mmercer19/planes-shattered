//
// by Matt Mercer
//




var parshmen = {
  name:parshmen, // name
  unemployed:0, //how many unemployed parshmen 
  increment:1, // base parshmen increment amount
  capincrement:0, // base parshmen increment cap
  cap:100, // base parshmen cap
  power:1, // base parshmen power
  current:0, // how many parshmen total
  counter:1000, // parshmen growth rate counter
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
}

var parshmenjob = {
  diamondminer:0,
  garnetminer:0,
  rubyminer:0,
  sapphireminer:0,
  emeraldminer:0
}

/*
var weapons = { // need to break these out individually 
  sword:0,
  shield:0,
  lance:0,
  bow:0,
  arrow:0
}
*/

var wealth = 0;
function diamondChipWealth() {
  if (diamond.chip > 0 || diamond.mark > 0 || diamond.broam > 0){
    wealth =  diamond.chip + diamond.mark * 4 + diamond.broam * 20 + 
              (garnet.chip * 5) + (garnet.mark * 25) + (garnet.broam * 100) + 
              (ruby.chip * 10) + (ruby.mark * 50) + (ruby.broam * 200) + 
              (sapphire.chip * 25) + (sapphire.mark * 125) + (sapphire.broam * 500) + 
              (emerald.chip * 50) + (emerald.mark * 250) + (emerald.broam * 1000);
    document.getElementById('dcWealth').innerHTML = wealth.toLocaleString('en-US');
  }  
}
var wealthIncrement = setInterval(diamondChipWealth, 10)

/*
function setInputNumber() {
    var userInput = document.getElementById("userInput").value;
    var userInputInteger = parseInt(userInput); // converts input string to integer
    assignParshman(userInputInteger);  // pass in the input as the first param to assignParshman
}
*/
var dparshmenAllocated = 0;
var gparshmenAllocated = 0;
var rparshmenAllocated = 0;
var sparshmenAllocated = 0;
var eparshmenAllocated = 0;

function dassignParshman(number){ //make this so it handles allocation of all parshmen 
  if (parshmen.unemployed + parshmen.current < parshmen.cap + 1 && parshmen.unemployed >= 1){
    parshmen.unemployed = parshmen.unemployed - number;
    dparshmenAllocated = dparshmenAllocated + number;
    parshmen.current = dparshmenAllocated + number;
    document.getElementById("dparshmenAllocated").innerHTML = dparshmenAllocated.toLocaleString('en-US');
		document.getElementById('parshmanCount').innerHTML = parshmen.unemployed.toLocaleString('en-US');
  }
}

function gassignParshman(number){ // dupe of above to try to make separate allocation for garnet mines. Issue I think with using same items from above not seeing it.
  if (parshmen.unemployed + parshmen.current < parshmen.cap + 1 && parshmen.unemployed >= 1){
    gparshmenAllocated = gparshmenAllocated + number;
    parshmen.current = gparshmenAllocated + number;
    parshmen.unemployed = parshmen.unemployed - number;
    document.getElementById('gparshmenAllocated').innerHTML = gparshmenAllocated.toLocaleString('en-US');
		document.getElementById('parshmanCount').innerHTML = parshmen.unemployed.toLocaleString('en-US');
  }
}


function parshmenMine(number) {
    if (parshmen.diamondminer > 0) {
        var c = Math.floor(Math.random().toFixed(2) * 100);
        if (c < 80){
          diamond.chip = diamond.chip + 1 * dparshmenAllocated;
            document.getElementById('dchip').innerHTML = diamond.chip.toLocaleString('en-US');        
              }   
        else if (c < 95){	
          diamond.mark = diamond.mark + 1 * dparshmenAllocated;
            document.getElementById('dmark').innerHTML = diamond.mark.toLocaleString('en-US');
          }
        else if (c < 99){	
          diamond.broam = diamond.broam + 1 * dparshmenAllocated;
            document.getElementById('dbroam').innerHTML = diamond.broam.toLocaleString('en-US');
        }
  }
  else if (parshmen.garnetminer > 0) {
        var c = Math.floor(Math.random().toFixed(2) * 100);
        if (c < 80){
          garnet.chip = garnet.chip + 1 * gParshmenAllocated;
            document.getElementById('gchip').innerHTML = garnet.chip.toLocaleString('en-US');        
              }   
        else if (c < 95){	
            garnet.mark = garnet.mark + 1 * gParshmenAllocated;
            document.getElementById('gmark').innerHTML = garnet.mark.toLocaleString('en-US');
          }
        else if (c < 99){	
            garnet.broam = garnet.broam + 1 * gParshmenAllocated;
            document.getElementById('gbroam').innerHTML = garnet.broam.toLocaleString('en-US'); 
          }
  }
  else if (parshmen.rubyminer > 0) {
        var c = Math.floor(Math.random().toFixed(2) * 100);
        if (c < 80){
          ruby.chip = ruby.chip + 1 * rParshmenAllocated;
            document.getElementById('rchip').innerHTML = ruby.chip.toLocaleString('en-US');        
              }   
        else if (c < 95){	
          ruby.mark = ruby.mark + 1 * rParshmenAllocated;
            document.getElementById('rmark').innerHTML = ruby.mark.toLocaleString('en-US');
          }
        else if (c < 99){	
          ruby.broam = ruby.broam + 1 * rParshmenAllocated;
            document.getElementById('rbroam').innerHTML = ruby.broam.toLocaleString('en-US'); 
          }
      }
  else if (parshmen.sapphireminer > 0) {
        var c = Math.floor(Math.random().toFixed(2) * 100);
        if (c < 80){
          sapphire.chip = sapphire.chip + 1 * sParshmenAllocated;
            document.getElementById('schip').innerHTML = sapphire.chip.toLocaleString('en-US');        
              }   
        else if (c < 95){	
          sapphire.mark = sapphire.mark + 1 * sParshmenAllocated;
            document.getElementById('smark').innerHTML = sapphire.mark.toLocaleString('en-US');
          }
        else if (c < 99){	
          sapphire.broam = sapphire.broam + 1 * sParshmenAllocated;
            document.getElementById('sbroam').innerHTML = sapphire.broam.toLocaleString('en-US'); 
          }
      }
  else if (parshmen.emeraldminer > 0) {
        var c = Math.floor(Math.random().toFixed(2) * 100);
        if (c < 80){
          emerald.chip = emerald.chip + 1 * eParshmenAllocated;
            document.getElementById('echip').innerHTML = emerald.chip.toLocaleString('en-US');        
              }   
        else if (c < 95){	
          emerald.mark = emerald.mark + 1 * eParshmenAllocated;
            document.getElementById('emark').innerHTML = emerald.mark.toLocaleString('en-US');
          }
        else if (c < 99){	
          emerald.broam = emerald.broam + 1 * eParshmenAllocated;
            document.getElementById('ebroam').innerHTML = emerald.broam.toLocaleString('en-US'); 
          }
      }
}

var parshmenIncrement = setInterval(parshmenCount, parshmen.counter);

function parshmenCount () {
  if (parshmen.unemployed + parshmen.current < parshmen.cap){
  parshmen.unemployed = parshmen.unemployed + 1;
  parshmen.capincrement = parshmen.capincrement + 1;
  document.getElementById('parshmanCount').innerHTML = parshmen.unemployed;
  document.getElementById('parshmanCap').innerHTML = parshmen.capincrement;
  }
}
 
var diamond = {
  chip:0,
  mark:0,
  broam:0,
  counter:1000
}
var diamondInterval = setInterval(diamondMine, diamond.counter);

function diamondMine() {
    var c = Math.floor(Math.random().toFixed(2) * 100);
    if (dparshmenAllocated > 0) {
      if (c < 80){
      diamond.chip = diamond.chip + 1;
        document.getElementById('dchip').innerHTML = diamond.chip.toLocaleString('en-US');        
          }   
    else if (c < 95){	
      diamond.mark = diamond.mark + 1;
        document.getElementById('dmark').innerHTML = diamond.mark.toLocaleString('en-US');
      }
    else if (c < 99){	
      diamond.broam = diamond.broam + 1;
        document.getElementById('dbroam').innerHTML = diamond.broam.toLocaleString('en-US');
        
      }
  }  
}

var garnet = {
  chip:0,
  mark:0,
  broam:0,
  counter:1000
}

var garnetInterval = setInterval(garnetMine, garnet.counter);

function garnetMine() {
    var c = Math.floor(Math.random().toFixed(2) * 100);
    if (gparshmenAllocated > 0) {
      if (c < 80){
      garnet.chip = garnet.chip + 1;
        document.getElementById('gchip').innerHTML = garnet.chip.toLocaleString('en-US');        
          }   
    else if (c < 95){	
        garnet.mark = garnet.mark + 1;
        document.getElementById('gmark').innerHTML = garnet.mark.toLocaleString('en-US');
      }
    else if (c < 99){	
        garnet.broam = garnet.broam + 1;
        document.getElementById('gbroam').innerHTML = garnet.broam.toLocaleString('en-US');
        
      }
    }
}
var ruby = {
  chip:0,
  mark:0,
  broam:0,
  counter:1000
}

var rubyInterval = setInterval(rubyMine, ruby.counter);

function rubyMine() {
  if (rparshmenAllocated > 0) {
     var c = Math.floor(Math.random().toFixed(2) * 1000);
      if (c < 900){
        ruby.chip = ruby.chip + 1;
      document.getElementById('rchip').innerHTML = ruby.chip.toLocaleString('en-US');        
        }   
  else if (c < 980){	
    ruby.mark = ruby.mark + 1;
      document.getElementById('rmark').innerHTML = ruby.mark.toLocaleString('en-US');
  	}
  else if (c < 999){	
    ruby.broam = ruby.broam + 1;
      document.getElementById('rbroam').innerHTML = ruby.broam.toLocaleString('en-US');
      
    }
  }  
}

var sapphire = {
  chip:0,
  mark:0,
  broam:0,
  counter:1000
}

var sapphireInterval = setInterval(sapphireMine, sapphire.counter);

function sapphireMine() {
  if (sparshmenAllocated > 0) {
     var c = Math.floor(Math.random().toFixed(2) * 1000);
      if (c < 900){
        sapphire.chip = sapphire.chip + 1;
      document.getElementById('schip').innerHTML = sapphire.chip.toLocaleString('en-US');        
        }   
  else if (c < 980){	
    sapphire.mark = sapphire.mark + 1;
      document.getElementById('smark').innerHTML = sapphire.mark.toLocaleString('en-US');
  	}
  else if (c < 999){	
    sapphire.broam = rusapphireby.broam + 1;
      document.getElementById('sbroam').innerHTML = sapphire.broam.toLocaleString('en-US');
      
    }
  }  
}

var emerald = {
  chip:0,
  mark:0,
  broam:0,
  counter:1000
}

var emeraldInterval = setInterval(emeraldMine, emerald.counter);

function emeraldMine() {
  if (eparshmenAllocated > 0) {
     var c = Math.floor(Math.random().toFixed(2) * 1000);
      if (c < 900){
        emerald.chip = emerald.chip + 1;
      document.getElementById('echip').innerHTML = emerald.chip.toLocaleString('en-US');        
        }   
  else if (c < 980){	
    emerald.mark = emerald.mark + 1;
      document.getElementById('emark').innerHTML = emerald.mark.toLocaleString('en-US');
  	}
  else if (c < 999){	
    emerald.broam = emerald.broam + 1;
      document.getElementById('ebroam').innerHTML = emerald.broam.toLocaleString('en-US');
      
    }
  }  
}