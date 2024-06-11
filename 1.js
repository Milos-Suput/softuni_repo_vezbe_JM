let a = 5;
let b = 2.34;
let c = true;
let d = {"ime":"Ana", "prosek": 5.00};
let e = [1,"ana", "jabuka", 1.23, true];
let f = undefined;
let g = null;
let i = function(){ console.log("hello")};
let j = "zdravo";
let k = Infinity;
let l = NaN; // 0/0, Infinity - Infinity

console.log(NaN == NaN);
console.log(Number.isNaN(Infinity-Infinity));

console.log("====================");

console.log(typeof k);
console.log(typeof l);

console.log("====================");

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof i);
console.log(typeof j);

console.log("====================");

console.log(8 * null); // 8 * 0
console.log('5' - 1); // 5 - 1
console.log('5' + 1); // '5' + '1' = '51'
console.log('pet' * 2); // '51' pretvorim u broj medjutim to ne moze sto znaci bice NaN
console.log(!''); // '' se moze pretvoriti u false, tako da ce !'' biti true

console.log("====================");

console.log(Number.parseFloat('12.3')); // pretvara string u pravi broj
console.log(Number.parseInt('123'));
console.log(Array.from('123')); // Array konstruise niz (BROJ NIJE MOGUCE ITERIRATI
console.log(String(123));

console.log("====================");

console.log('Zdravo svete');
console.log("Zdravo svete");
console.log(`Zdravo svete`);

console.log("Zdravo \nsvete");
console.log(`Zdravo
svete`);
console.log(`Zdravo ${2+2} svete`);
console.log('Zdravo \'zdravo\'');
console.log('Zdravo "svete"');

console.log("====================");

let a1 = null || "prezime"; // false || "prezime"
console.log(a1);
let a2 = "ime" || "prezime"; // pba su true i samim tim prva vrednost pre || se uvazuje a ne oba
console.log(a2);
let port = 1230;
const PORT_NUM = port || 3000;
console.log(PORT_NUM);

let a3 = "ana" && "marko"; // true
let a4 = null && "nista";
console.log(a3); // marko
console.log(a4); // null

/*
if(uslov1 && uslov2){
    u slucaju da uslov2 sme da se proveri samo ako je uslov1 tanac,
    onda nemamo problem jer po ovome od malopre sto smo naucili ako je uslov1 tacan proverava se uslov2
    A ako uslov1 nije tacan onda se uslov2 ni ne proverava vec je rezultat od uslov1 && uslov2 jednak uslov1
}

*/
