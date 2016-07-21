var logTruthiness = function(truthiness){
  if(truthiness === true)
    {
      console.log(true);
    }
  else
    {
      console.log("Falsy");
    }
};
logTruthiness(false);

//Outputs: "Falsy."

logTruthiness(null);

// Outputs: "Falsy."

logTruthiness(undefined);

// Outputs: "Falsy."

logTruthiness(NaN);

// Outputs: "Falsy."

logTruthiness(0);

// Outputs: "Falsy."

logTruthiness("");