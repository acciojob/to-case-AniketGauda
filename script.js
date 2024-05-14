function toCase(text) {
  // write your code here
	let a = text.toUpperCase();
    let b = text.toLowerCase();
    return b+"-"+a;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
