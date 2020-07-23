

// the concept of modules?   confusing. 
// inline script tags - remember in html? this could get messy if there is alot of code. 
// code reusability. pollution of the global nameSpace. you dont want to pollute the
// window object with all these different names. 

//2nd attempt next is script tags - src =" " , outside of the html. lack of dependency resolution.
// what if our other source file hasnt loaded yet? - and it still pollutes the global name space

// 3rd attempt is IIFE - -Immediately Invoked Function Expression. It wraps a function in
// brackets ()   that reduced the global namespace pollution problem. There is still an issue 
// the file order. lack of dependency reolution.

// next we have Browserify. its a module bundler. it runs before you put the website online
// it bundles all your script files into a single file. aslong as you use the common JS 
// synthax it will know what to do and then create a one script file. BOOM! 
// which will usually be called something like <script src="bundle.js"></script>
// so all our scripts will just be on one massive file. so run it thorugh Browserify 
// before you deploy - and put your app out to the public. 

// a module system.  kind of like building blocks. importing and exporting modules. 
// destructuring {add} remember?  import / export.  in ES6 , ES6 + Webpack2 

ES6 + Webpack2

//js1 
export const add = {a, b} => a +b;
// or
export default function add () {
    return a + b;
}


// js2 
import { add } from './add';
//or 
import add from './add'; 

//see how everything is clean. Browsers arent supporting everything yet - that is what webpack
// is for.. it bundles your exports and imports. webpack has a config file. 
// it bundles everything (our modules) - similar to how browserify did. We will be using
// web pack alot when we are working with react .. it creates a nice "bundle.js" file
// keeping everything clean and simple. Good job! 
// we just covered some really hard JS concepts and topics. So well done! 

// USEFUL JS RESOURCES 
// 1. https://github.com/getify/You-Dont-Know-JS
// 2. http://javascript.info/
// 3. http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/

// JS challenge questions



// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. For example 
// answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
// should return [[1,2], ["2", "3"]]

function clean(arr) {
	let i = 0;
	let pos = 0;
	let duplicateArray = [];
	let newArray = [];
	arr.sort((a, b) => a - b);
	while (i < arr.length) {
		if ( arr[0] === arr[1] ) {
			pos = arr.lastIndexOf(arr[0]) + 1;
			duplicateArray = arr.splice(0, pos);
			newArray.push(duplicateArray);
		} else {
			newArray.push(arr[0]);
			arr.shift();
		}
	}
	return newArray;
}
console.log(clean([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]));

//question 2  - two sum challenge in JS

function twoSumBest(array, target) {
    const numsMap = new Map();
    for (let i = 0; i < array.length; i++) {
        if(numsMap.has(target - array[i])) {
            return [numsMap.get(target - array[i]), i];
            // get() returns a specified element associated with the specified key from the Map object.
        } else {
            numsMap.set(array[i], i);
            //  set() adds or updates an element with a specified key and value to a Map object.
        }
    }
}


console.time("Solution-4-Even more efficient solution");
twoSumBest(arr, (arr[668] + arr[1669]));
console.timeEnd("Solution-4-Even more efficient solution");

// Solution-4-Even more efficient solution: 0.103ms


//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the 
// formats so that if you enter 
// HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// Note: both version of rgbToHex expect integer values for r, g and b, so you'll need to do your 
// own rounding if you have non-integer values.

// The following will do to the RGB to hex conversion and add any required zero padding:

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

alert(rgbToHex(0, 51, 255)); // #0033ff

// Converting the other way:

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

alert(hexToRgb("#0033ff").g); // "51";