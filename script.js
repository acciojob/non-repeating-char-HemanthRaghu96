function firstNonRepeatedChar(str) {
  // Write your code here
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  let key = Object.keys(obj);
  let value = Object.values(obj);
  for (let i = 0; i < value.length; i++) {
    if (value[i] == 1) {
      return key[i];
    } 
  }
   return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
