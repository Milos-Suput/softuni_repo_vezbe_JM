function sumDigits(broj){
    let suma = 0;
    let nizCifri = Array.from(String(broj));
    //console.log(nizCifri)

    for(let i = 0; i < nizCifri.length; i++){
        suma += Number.parseInt(nizCifri[i]);
    }
    console.log(suma);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);