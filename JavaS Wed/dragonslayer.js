var slaying = true;
var youHit = Math.floor(Math.random() * 2);//checks if we hit the dragon
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
console.log(youHit);
console.log(damageThisRound);

while(slaying)
    {
    if (youHit = true)
        {
            console.log("You hit the dragon");
        
      totalDamage = totalDamage + damageThisRound;
        }
        else
        {
            console.log("The dragon defeated you.");
        }
        slaying=false;
    }
    
 if(totalDamage>=4)
   {
     console.log("You Slew the Dragon")
   }
  else
    {
      var youHit= Math.floor(Math.random() * 2 );
    }