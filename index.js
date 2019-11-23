const tests = 1000000;
const stringLength = 4;
const constant = 97;
const testStrings = new Set();
const hashes = new Set();
let collisions = 0;

console.log("Generating strings...");
while(testStrings.size < tests) {
    testStrings.add(makeRandomString(stringLength));
}
console.log("done");

console.log("Making hashes...");
testStrings.forEach(string => { 
    const shash = hash(string, constant);    
    if (hashes.has(shash)) {
        collisions++;
    }  
    hashes.add(shash);
    // console.log(`string: ${string}, hash: ${shash}`);
})
console.log("done");

console.log("Strings: ", testStrings.size);
console.log("Collisions: ", collisions);

function makeRandomString(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function hash(string, g = 79) {
    let hash = 0;

    for (let i = 0; i < string.length; i++) {
        hash = g * hash + string.charCodeAt(i);
    }

    return hash;
}
