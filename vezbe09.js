function gladiator(lostFights, price1, price2, price3, price4){

    let price = 0;
    price += Math.floor(lostFights/2) * price1;

    price += Math.floor(lostFights/3) * price2;

    price += Math.floor(lostFights/6) * price3;

    price += Math.floor(lostFights/12) * price4;

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}

gladiator(7, 2, 3, 4, 5);
gladiator(23, 12.50, 21.50, 40, 200);