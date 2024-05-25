//boolean
let isChecked = true;
console.log(isChecked);

let ischecked = 1;
if (ischecked)
    console.log(true);
else
    console.log(false);


//  
// let name1 = "namita";
// let name2 = "rout";
let sen = "amazing girl"

//empty string """"
// console.log(name1 + " " + name2 + "\n" + sen);

console.log(sen.charAt(1));

// length
console.log(sen.length);

let lengthchk = "  lohdjhkjd  hkjhdkjdhhf   "
console.log(lengthchk.length);

//split
console.log(sen.split(" "));
console.log(sen.toUpperCase());
console.log(lengthchk.trim());
console.log(lengthchk);


//concat
let str1 = "dhara";
let str2 = "namita";
console.log(str1.concat(' ' + str2));

//indexOf
let sent = "jay jagannath"
console.log(sent.indexOf("h"));
console.log(sent.indexOf("jaga"));

//lastindexOf
let se = "i feel happy today"
console.log(se.lastIndexOf("l"));
console.log(se.indexOf("p"));

//match
let par = "I hope ind will win the T20 worldcup";
let reg = "A-Z";
let found = par.match(reg);
console.log(found);

//replace
let st1 = "hyy everyone all good";
let st2 = st1.replace("all", "everything");
console.log(st2);

//normalizations
// let name1 = dhara
// let name2 = Chubu
// console.log(`${name1}, ${name2}`);
// console.log(name1 === name2);

//repeat
let sens = " error";
console.log(`There is no: ${"error".repeat(3)}`);

//slice
let set1 = "I am very happy today bcz our clg give us Holidays";
let set2 = set1.slice(2, 5);
let set3 = set1.slice(4, 6);
console.log(set2);
console.log(set3);

//startsWith
let str = "monday is working day";

console.log(str.startsWith("mon"));

//substring
let nstr="namita"
console.log(nstr.substring(2));

//toString
let obj = new String("namita");
console.log(obj);
console.log(obj.toString());

//trimend
let nam=" hello chubu  ";
console.log(nam.trimEnd());

//trimstart
let nam1="   hyy how r uh "
console.log(nam1);
console.log(nam1.trimStart());

//valueOF
const st = new String('dhara');
console.log(st);
console.log(st.valueOf());






