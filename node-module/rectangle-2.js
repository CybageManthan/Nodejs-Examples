module.exports = function(x,y,callback) {

	try {

		if(x<0 && y<0) {

			throw new Error("Rectangle dimensions should be greater than zero: l = "
                            + x + ", and b = " + y);
		} else 
			callback(null,{

				//usage of closure. function is not taking arguments x and y still it able to access the x & y
				perimeter:function() { 

						return (2*(x+y));
				},
				area:function() {

					return (x*y);
				}

			});

	}
	catch(error) {

		callback(error,null);
	}
}