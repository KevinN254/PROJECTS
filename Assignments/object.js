var user = 
{
  name: "Karamazov",
  profession: "monk",
  age: 20,
  reset: function() 
  {
    for (var key in user)
    {
      if (key !== "reset") 
      {
        user[key] = undefined;
      }
    }
    for (var key in user) 
    {
      alert("Key: " + key + "\n" + "Value: " + user[key]);
      console.log("Key: " + key + "\n" + "Value: " + user[key]);
    }
  }
};

for (var key in user) 
{
  alert("Key: " + key + "\n" + "Value: " + user[key]);
  console.log("Key: " + key + "\n" + "Value: " + user[key]);
}
user.reset(); 
user.test = "This is a test variable";
user.reset();
