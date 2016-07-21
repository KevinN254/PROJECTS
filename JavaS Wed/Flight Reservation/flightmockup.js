  $(document).ready(function(){
    $('#search').click(function(){

    var departureCity = $("#departureCity").val();
    var desitnationCity = $("desitnationCity").val();

      // !! add some logging statemenets so you can look in the console and see what is going on in your code
      console.log ("departureCity " + departureCity);
      console.log ("departureCity " + departureCity);

        // !! why are you indenting here -- should be at same level as previous statement
        // !! also you are checking if this is a round trip flight below, you should name this variable isRoundTrip or something like that
        var tripType=$("#roundtrip").is(':checked');
        console.log ("tripType is " + tripType);

        var isRoundTrip;

          // !! why are you indenting here -- should be at same level as previous statement
          // !! choice 3 is undefined as you can see above so none of these will ever evaluate to true
          // !! I dont think you want to be comparing choice3 below
           if (choice3 === true)
           {
             choice3 = "Round Trip";
           }
           else
           {
             choice3 = "One Way";
           }

           if (choice1 === choice2)
           {
             alert("You picked the same destination as your place of departure");
           }
           
   

        // !! use better names. instead of choice4 and choice5 call these what they are like 'departureDate' and 'returnDate'
        var choice4=$('#depatureDate').val();
        console.log ("departure date is " + choice4);
        

        var choice5=$('#returnDate').val();
        console.log ("return date is " + choice5);

        //!! getting my departure date
        var edwinDepartureDate = $("#edwinDepartureDate").val();
        console.log ("edwin departure date is " + edwinDepartureDate);
        
        var origT = $("#p1").text();
        
        $('#p1').text(origT+ choice1  + " " + choice2 + " "+ choice3 + " "+ choice4 + " " + choice5);
    });
};