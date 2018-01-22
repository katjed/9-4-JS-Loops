// Method 1 --> step 1

/*
function drawTree(rows) {

	for (var i = 1; i <= rows; i++) {
		var star = '';

		for (var j = 1; j <= i; j++) {
			star += '*';
		}

		console.log(star);
	}
}

drawTree(5);
*/


// Method 1 --> step 2
 
function drawTree(rows) {

	for (var i = 1; i <= rows; i++) {
		var star = '';

		for (var k = 1; k <= rows - i; k++) {
			star += ' ';
		}

		for (var j = 1; j <= i * 2 - 1; j++) {
			star += '*';
		}

		console.log(star);
	}
}

drawTree(5); 


// Method 1 --> step 2 - alternative

/*
function drawTree(rows) {

	for (var i = 1; i <= rows; i++) {
		var star = '';

		for (var k = 0; k < rows - i; k++) {
			star += ' ';
		}

		for (var j = 0; j < i * 2 - 1; j++) {
			star += '*';
		}

		console.log(star);
	}
}

drawTree(5); 
*/


// Method 2 --> step 1

/*
function drawTree(rows) {   

	for (var i = 0; i < rows; i++) {
		var star = '';

		for (var j = 0; j < i + 1; j++) {
			star += '*';
		}

		console.log(star);
	}
}

drawTree(5); 
*/


// Method 2 --> step 1 alternative

/*
function drawTree(rows) {   

	for (var i = 0; i < rows; i++) {
		var star = '';

		for (var j = 0; j <= i; j++) {
			star += '*';
		}

		console.log(star);
	}
}

drawTree(5); 
*/


// Method 2 --> step 2

/*
function drawTree(rows) {

	for (var i = 0; i < rows; i++) {
    	var star = '';

    	for (var k = 0; k < rows - i - 1; k++) {
      		star += " ";
    	}

    	for (var j = 0; j < i * 2 + 1; j++) {
      		star += "*";
    	}

    console.log(star); 
  	}
} 

drawTree(5); 
*/


// Method 2 --> step 2 - alternative 

/*
function drawTree(rows) {
	
    for (var i = 0; i < rows; i++) {
        var star = '';

        for (var k = 0; k <= rows - i - 2; k++) {
            star += ' ';
        }

        for (var j = 0; j <= i * 2; j++) {
            star += '*';
        }

        console.log(star);
    }
}

drawTree(5); 
*/