$(document).ready(function()
{	
    $('#oneWay').change(function()
    {
        $('#returnDate').hide(); 
    });

    $('#roundTrip').change(function()
    {
        $('#returnDate').show(); 

    });

    //when the Search btn is clicked
	$('#search').click(function()
    {
   		var departureCity = $("#departureCity").val();
    	var destinationCity = $("#destinationCity").val();

      console.log("departureCity" + departureCity);
      console.log("destinationCity" + destinationCity);

      var tripType=$("#roundTrip").is(':checked');

      var trip;

          if (trip === true)
             {
               trip = "Round Trip";
             }
          else
              {
               trip = "One Way";
              }

          if (departureCity === destinationCity)
              {
                alert("You picked the same destination as your place of departure");
              }
               
        	  console.log(tripType);

      var departureDate=$('#departureDate').val();
      console.log("departureDate is " + departureDate);
            

      var returnDate=$('#returnDate').val();
      console.log("returnDate is " + returnDate);
            
      

            $("#searchResult").text
            ("Searching for flights from " + departureCity + " to " + destinationCity  + " leaving " + departureDate + " and returnig on " + returnDate);
            
       
        //when the cancel button is pressed
    $("#cancel").click(function()
    {
        var departureCity = $("#departureCity").val(1);
        var destinationCity = $("#destinationCity").val(1);
        var trip = "Roundtrip";
        var depatureDate = $("#departureDate").val(1); 
        var returnDate = $("#returnDate").val(1); 

        $('#searchResult').hide();

    })
});