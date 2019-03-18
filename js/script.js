function showHideNav() {
    var x = document.getElementById("first");
    var y = document.getElementById("second");
    var z = document.getElementById("third");
    if (y.style.display === "flex") {
        x.style.flexGrow = "300%";
        y.style.display = "none";
        z.style.display = "none";
    } else {  
        x.style.flexGrow = "300%";
        y.style.display = "flex";
        z.style.display = "flex";
    }
  }