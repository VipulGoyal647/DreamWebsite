/* Custom JS goes here */

// IIFE _ Immediately Invoked Function Expression
// Anonymous Self Executing Function
(function(){
    //Local variable to Detect Page Title
    var title = document.title;
    function Start()
    { 
        console.log(" App Started ");
        console.log("-----------------------------------");
        console.log(" Hello World ");
        console.log("-----------------------------------");
        //Printing Title in Console
        console.log("Title: "+title);
    }
    window.onload=Start;
    


})();