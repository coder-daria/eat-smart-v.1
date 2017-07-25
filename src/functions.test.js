import { caloriesPerDay, countGrams, aliment, portion, fetchProducts, convertToArray } from './functions';
import moment from 'moment';

it('counts calories', () => {
    expect(caloriesPerDay(2000, 20, 30, 50)).toEqual({
        fat: 400,
        protein: 600,
        carbs: 1000
    });
});

it('counts grams', () => {
    expect(countGrams({
        fat: 400,
        protein: 600,
        carbs: 1200
    })).toEqual({
        fat: 44,
        protein: 150,
        carbs: 300
    })
})

it('creates an aliment object', () => {
    expect(aliment(2, 6, 51)).toEqual({
        fat: 18,
        protein: 24,
        carbs: 204
    })
})

it('creates a portion object', () => {
    expect(portion({
        fat: 2,
        protein: 6,
        carbs: 51
    }, 300)).toEqual({
        fat: 6,
        protein: 18,
        carbs: 153
    })
})

it('fetches the products from the server', () => {
    const products = fetchProducts();
    const productsLength = Object.keys(products).length;
    const expectedProducts = 19;
    expect(productsLength).toEqual(19);
})

it('converts object of objects to array of objects', () => {
    const objectOfObjects = {
        jamon: { fat: 4 },
        twarog: { fat: 5 }
    };

    const expected = [
        { name: "jamon", properties: { fat: 4 } },
        { name: "twarog", properties: { fat: 5 } }];
    expect(convertToArray(objectOfObjects)).toEqual(expected);
})

xit('shows the closest meal based on the current time', () => {
    const mealsPreferences = [
        {
            name: "breakfast",
            hour: 8,
            time: "08:20"
        },
        {
            name: "lunch",
            hour: 13,
            time: "13:20"
        },
          {
            name: "dinner",
            hour: 15,
            time: "15:20"
        },
        {
            name: "supper",
            hour: 17,
            time: "17:20"
        }
    ]

    let currentTime = moment().format('HH:mm');
    let currentHour = Number(moment().format('HH'));
    let twoClosestMeals = [];
    let twoDifferences = [];
    let theClosestMeal = {}

    if (mealsPreferences.length === 0) {
        console.log("No predefined meals")
    }
    else if (mealsPreferences.length === 1) {
        theClosestMeal = mealsPreferences[0];
    }
    else {
        for (let i = 0; i < mealsPreferences.length - 1; i++) {
            let isBetween = moment(currentHour).isBetween(mealsPreferences[i].hour, mealsPreferences[i + 1].hour); //false
            let isSameAs1stHour = moment(currentHour).isSame(mealsPreferences[i].hour); //true

            if (isBetween || isSameAs1stHour) {
                console.log(mealsPreferences[i]);
                twoClosestMeals.push(mealsPreferences[i]);
                twoClosestMeals.push(mealsPreferences[i + 1]);

                twoDifferences.push(moment.utc(moment(currentTime, "HH:mm").diff(moment(mealsPreferences[i].time, "HH:mm"))).format("HH:mm"))
                twoDifferences.push(moment.utc(moment(currentTime, "HH:mm").diff(moment(mealsPreferences[i + 1].time, "HH:mm"))).format("HH:mm"))
            }
            else {
                // console.log(mealsPreferences[i]);
                i++;
            }
        } //end of for loop
            if (twoDifferences[0] < twoDifferences[1]) {
                theClosestMeal = twoClosestMeals[0]
            }
            else if (twoDifferences[0] === twoDifferences[1]) {
                theClosestMeal = twoClosestMeals[1]
            }
    }
}
)
