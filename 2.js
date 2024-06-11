// opseg vazenja blokovsi, funkcijski, "globali" (lokalni u debuggeru)
// 

var a1 = 123;

function funckija(b,c){
    var a2 = 'd';
    let a5 = 7;
    {
        console.log(a2);
        let a3 = 3;
        var a6 = 4;
        let a5 = 100;
        console.log(a5);
        console.log(a6);
    }
    console.log(a6);
    console.log(a5);
    console.log(a2);
    console.log(b);
}

funckija();

let a4 = 5;