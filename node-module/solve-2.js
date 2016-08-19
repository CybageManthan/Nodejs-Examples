var rect = require('./rectangle-2');

function solveRect(l,b){

	console.log("Solving for rectangle with l = "+ l + " and b = " + b);

	// node application supplied the callback function. i.e function(err,rectangle)

    rect(l,b, function(err,rectangle) {
	 /*err is first argument. compulsory.
	 rectangle is object name. to which callback function will assigned properties.*/

        if (err) {
	    console.log(err);
	}
	else {
	    console.log("The area of a rectangle of dimensions length = "
                 + l + " and breadth = " + b + " is " + rectangle.area());
            console.log("The perimeter of a rectangle of dimensions length = "
                 + l + " and breadth = " + b + " is " + rectangle.perimeter());
	}
    });
};

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);