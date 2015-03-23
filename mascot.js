 var Mascot = function(name, food, endurance, tripping) {
   this.name = name;
   this.food = food;
   this.endurance = endurance;
   this.tripping = tripping;
   this.trippy = function(trip) {
  var trip = Math.floor(Math.random()*this.tripping)+1;
    return trip;
   }
   this.run = function(distance) {
  var distance = Math.floor(Math.random()*this.endurance)+1;
      return distance;
   }
}

var mark = new Mascot("Mark", "MacNchz", 3, 0);
var lindsey = new Mascot("Lindsey", "Lasagna", 5, 0);
var randy = new Mascot("Randy", "Ramen", 7, 9);

var race = function(race_distance, m1, m2, m3){ 

  var markProg = race_distance;
  var lindProg = race_distance;
  var randyProg = race_distance;
    while (markProg > 0 && lindProg > 0 && randyProg > 0) {
        markProg -= m1.run();
        lindProg -= m2.run();
        
      // console.log(m1.run());
      // console.log(m2.run());
      // console.log(m3.run());
        console.log(m1.name + " " + m1.food + " ran " + m1.run() + " meters. " + markProg + " meters left.");
        console.log(m2.name + " " + m2.food + " ran " + m2.run() + " meter. " + lindProg + " meters left");
        if (m3.trippy() <=3) {
          console.log(m3.name + m3.food + " just tripped!");
        }
        else {
        randyProg -= m3.run();
        console.log(m3.name + " " + m3.food + " ran " + m3.run() + " meter. " + randyProg + " meters left.");
        }
    }


        if (markProg < lindProg && markProg < randyProg) {
          console.log(m1.name+ " " + m1.food + " wins!");
        }
        else if (lindProg < markProg && lindProg < randyProg) {
          console.log(m2.name+ " " + m2.food + " wins!");
        }
        else if(randyProg < markProg && randyProg <lindProg) {
          console.log(m3.name+ " " + m3.food + " wins!");
        }
        else if(markProg===lindProg || markProg===randyProg || lindProg===randyProg) {
          console.log("It's a tie!");
        }
   
    }
race(30, mark, lindsey, randy);


