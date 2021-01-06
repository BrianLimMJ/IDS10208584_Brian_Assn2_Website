let url = 'https://api.atlasacademy.io/export/NA/nice_servant.json';
NameList = [];
NewServantList = [];

//This reads all everything from the url and makes it such that i can access it
fetch (url)
    .then(res => res.json())
    .then(data => {
        ServantList = data;
        LoopList();
        
    });
    
    function LoopList(){
        for (i = 0;i<ServantList.length;i++)
        {
          NameList.push(ServantList[i]['name']);
        }
    }
    //This activates the autocomplete function
    autocomplete(document.getElementById("name"), NameList);

// This is when the user clicks into the box and it will focus on the text box inside which
// will focus and blur upon entering/leaving
  $("#name").focus(function insideBox(){
    $(this).css("background-color", "yellow");
  });
  $("#name").blur(function insideBox(){
    $(this).css("background-color", "white");
  });

// create new list inside the if else, put all things inside with matching name into new list and pull data from list 

// This will get users input and display out all characters details based on input
document.getElementById("btn").addEventListener("click", function getServant(){
    let searchName = document.getElementById('name').value;
    for (let i = 0;i<ServantList.length;i++)
    {
        fetch (url)
        .then(res => res.json())
        .then(data = ServantList[i]['name'])

        //RegExp helps checks the user inputs and matches what the user has inputted with the data
        //E.g User inputs Gil, regexp matches all character names that contain 'Gil' inside
        var sName = data; 
        var patt = new RegExp(searchName,"i");
        if (patt.test(sName))
        {
          NewServantList.push(ServantList[i]);
          
        }
        
    }
    setTimeout(makeCard(),5000);
    //This function helps make the card to display for users
    function makeCard()
    {
      for (let i = 0;i<NewServantList.length;i++)
      {
        console.log(NewServantList[i]);
        var sAscenion = NewServantList[i]['extraAssets']['charaGraph']['ascension'][4];  
        var sName = NewServantList[i]['name']
        var sGender =NewServantList[i]['gender']; 
        var sClass =NewServantList[i]['className'];
        var sRarity =NewServantList[i]['rarity']; 
        var sNP =NewServantList[i]['noblePhantasms'][0]['name'];  
        var sAtkMax =NewServantList[i]['atkMax']; 
        var sHPMax =NewServantList[i]['hpMax'];
        
        
        let Card = document.createElement('card-container');
        Card.innerHTML = "<div class = 'card-shell'><div class = 'inside-cards'>\
        <div class = 'card-front'><img src = '"+sAscenion+"' class = 'image'></div>\
        <div class = 'card-back'><h4>"+sName+"</h4>\
        <p>"+'Class: ' +sClass+"</p>\
        <p>"+'Gender: ' +sGender+"</p>\
        <p>"+'Rarity: ' +sRarity+"</p>\
        <p>"+'Noble Phantasm: '+'<br>'+ sNP+"</p>\
        <p>"+'Max Atk: ' +sAtkMax+"</p>\
        <p>"+'Max HP: ' +sHPMax+"</p></div>\
        </div></div>";
        document.getElementById('sContainer').appendChild(Card);
        
      }
    } 
});
//This is the clear function that removes all childnode and resets the list to an empty list
//if the user wishes to find another charcter
document.getElementById("remove").addEventListener("click", function clearAll(){
    let ServantElements = document.getElementById('sContainer');
    document.getElementById('name').value = '';
    while (ServantElements.hasChildNodes())
    {
      NewServantList = [];
      ServantElements.removeChild(ServantElements.firstChild);
    }
});

// Auto complete function
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }








