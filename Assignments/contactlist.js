var friends = {};

friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
};

friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(707) 555-5555",
  address: ['408 Baker', 'Alana', 'GA', '13052']
};

list(friends);

function list(object) {
  for (var friend in object) {
    console.log(friend);
  }
};

function search(name){
  for (var key in friends){
    if(friends[key].firstName === name)
      {
      console.log(friends [key]);
      }
  }
};
search("Bill");