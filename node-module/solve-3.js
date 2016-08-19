var argv = require('yargs')
    .usage('Usage: node $0 --l=[num] --b=[num]') //message
    .demand(['l','b'])  // tell user this is must.
    .argv; //js argv object. supplied to the argv variable.

var rect = require('./rectangle-2');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, function(err,rectangle) {
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

solveRect(argv.l,argv.b); // usage of l and b arguments inside the node application.