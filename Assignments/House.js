//Object.create
var house =
{
    rooms:4,
    color:'red',
    size : "1200sq",
    features:function(){
        alert ("Your house has " +  this.rooms + " rooms which are " + this.color + " in color, and the total size is " + this.size);
    }
};
 
house.features();
var newHouse = Object.create(house);
newHouse.rooms = 5;
newHouse.color = "green";
newHouse.size = "1400sq";
console.log( newHouse.features() ); 
 


//Factory function
function rentHouse(roomsH,colorH,sizeH)
{
var house ={};
    house.rooms = roomsH,
    house.color = colorH,
    house.size = sizeH,   
    house.features=function(){
        alert( "Your house has " +  this.rooms + " rooms which are " + this.color + " in color, and the total size is " + this.size);
    };
    return house;
};

var apartment = rentHouse("6","purple","2000sq");
apartment.features();
var condo = rentHouse("7","red","2100sq");
condo.features();
