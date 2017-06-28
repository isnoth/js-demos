undefined = true; // NOTE: JUST AN EXAMPLE, DON'T DO THIS
(function IIFE( undefined ){

    var a = true;
    if (a === undefined) {
        console.log( "undefined" );
    } else {
        console.log("opps");
    }

})();
