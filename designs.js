function myFunction(e) {
    console.log(e.checked);
    var x = document.getElementById("a1");
    var y = document.getElementById("a2");
    var z = document.getElementById("a3");
    if (!e.checked) {
        x.innerHTML = "19.99";
        y.innerHTML = "24.99";
        z.innerHTML = "39.99";
     
    } 
    
    else  {
      x.innerHTML = "199.99";
      y.innerHTML = "249.99" ;
      z.innerHTML = "399.99" ;
      
      
    }
}