function newHouse(input) {
    let flowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    switch (flowers) {
        case "Roses":
            expenses = 5 * numberOfFlowers;
            if (numberOfFlowers > 80) {
                expenses = expenses * 0.90

            }
            break;
        case "Dahlias":
            expenses = 3.80 * numberOfFlowers;
            if (numberOfFlowers > 90) {
                expenses = expenses * 0.85
            }
            break;
        case "Tulips":
            expenses = 2.80 * numberOfFlowers;
            if (numberOfFlowers > 80) {
                expenses = expenses - expenses * 0.15
            }
            break;
        case "Narcissus":
            expenses = 3 * numberOfFlowers;
            if (numberOfFlowers < 120) {
                expenses = expenses * 1.15;
            }
            break;
        case "Gladiolus":
            expenses = 2.50 *numberOfFlowers;
            if (numberOfFlowers < 80) {
                expenses = expenses * 1.20;
            }
            break;


    }

    if (expenses <= budget) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(budget - expenses).toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money, you need ${(expenses - budget).toFixed(2)} leva more.`);
    }

}
newHouse(["Tulips",

    "88",

    "260"])