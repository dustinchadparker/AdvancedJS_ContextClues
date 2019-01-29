$( document ).ready(function() {
    
    var accusationNum = 1;
    var friends = ["Marky", "Ricky", "Danny", "Terry", "Mikey"];
    var locations = ["car", "bathroom", "alley", "den", "closet", "garbage", "washing machine", "bed", "attic", "shower"]
    var objects = ["spoon", "fork", "keyboard", "bottle", "monitor", 
                   "television", "mouse", "headphones", "earbuds", "showerhead",
                   "ring", "ornament", "shovel", "carkeys", "pillow",
                    "stuffed animal", "knife", "axe", "sword", "bat"];

    for(accusationNum; accusationNum < 100; accusationNum++) {

        $(document.body).append('<h3 id=' + accusationNum + '>' + 'Accusation ' + accusationNum + ':</h3>');

    }

    $('h3').click(function() {

        var i = Math.floor(Math.random() * 5);
        var friendChosen = friends[i];
        var i = Math.floor(Math.random() * 10);
        var locationChosen = locations[i];
        var i = Math.floor(Math.random() * 20);
        var objectChosen = objects[i];


        alert("Accusation " + this.id + ": I accuse " + friendChosen + ", with the "
                + objectChosen + " in the " + locationChosen + "!");
      
    });

});