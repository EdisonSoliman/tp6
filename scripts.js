// on load make font 80px //

window.onload = function() {
  document.querySelector("#title").style.fontSize = "80px";
};

// click to make title red //

cheesedip = document.querySelector("#title");
title.onclick = function() {
  cheesedip.classList.toggle("clicked");
};

// hidden info //
hidden1 = document.querySelector("div#ingredients");
hidden1.onclick = function() {
  hidden1.classList.toggle("ingredientsClicked");
};

hidden2 = document.querySelector("div#equipment");
hidden2.onclick = function() {
  hidden2.classList.toggle("equipmentClicked");
};

hidden3 = document.querySelector("div#directions");
hidden3.onclick = function() {
  hidden3.classList.toggle("directionsClicked");
};
// added HTML //
x = document.getElementById("done");
x.innerHTML = "Done and Enjoy!";
x.style.fontSize = '40px';
x.style.fontFamily = 'Bungee';
x.style.textAlign = 'center';

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.getElementById(whereTo).innerHTML = this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }
  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();
}

window.onload = function() {
  loadFileInto("ingredients.html", "ingredients");
  loadFileInto("equipment.html", "equipment");
  loadFileInto("directions.html", "directions");
};