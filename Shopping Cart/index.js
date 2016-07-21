
var shoppingCart =[];

var userInput = prompt("Welcome to AK47 Shopping would you like to continue?"));

if(userInput !== "Yes")
{
	console.log("Thank you for visiting us see you next time");
}
else
{
  shop();
  calculateTotal();
}

function shop()
{
     var useShoppingCart = "Y";

     while (useShoppingCart !== "N")
     {
     	addToCart();
     	listCart();
     	//removeFromCart();

     	useShoppingCart = prompt("Do you want to continue shopping Y or N");
     }
}

function addToCart()
{
	var itemName = prompt("Enter the name of the item that you wish to buy or END to finish");
			
	while(itemName !=="END")
		{		
			var itemPrice = prompt("Enter the price for " + itemName);
			var itemQuantity = prompt("How many would you like to buy?");

			var items = 
			{
				name:itemName,
				price:itemPrice,
				quantity:itemQuantity,
			};

			shoppingCart.push(items);
			
		    itemName = prompt("Enter the name of the next item that you want to buy or END to finish");
		    		
        }
        console.log(shoppingCart);
}

function calculateTotal()
{
	var totalBeforeTax = 0;

	for (var i = 0; i < shoppingCart.length; i++) 
	{
		var currentTotal = shoppingCart[i].price * shoppingCart[i].quantity;
		var totalBTax = totalBeforeTax + currentTotal;

	}
	console.log(totalBTax);
	var totalAfterTax = totalBTax * 0.075 ; 
	console.log(totalAfterTax);
}
	

function listCart()
{
	console.log("These are the items in your cart:");

	for (var i = 0; i < shoppingCart.length; i++) 
	{
		console.log("item: " + shoppingCart[i].name + " price: " + shoppingCart[i].price + " quantity: " + shoppingCart[i].quantity);
	};
}

/*function removeFromCart()
{

}

