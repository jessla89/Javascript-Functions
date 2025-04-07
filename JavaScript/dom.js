function closeMe(){
    // Find the element
    x= document.getElementById("demo");
    //Option 1: Change the style attribute
    //x.style.display = "none";
    //option 2: change the class
    x.className = "closed";
}
function openMe(){
    // find the element
    x = document.getElementById("demo");
    //option 1: change the style attribute
    //x.style.display = "block";
    //option 2: change the class
    x. className = "open";
}