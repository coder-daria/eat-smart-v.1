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
            seconds: 1500876046000 // 8:00
        },
        {
            name: "lunch",
            seconds: 1500894020000 // 13:00 
        },
        {
            name: "dinner",
            seconds: 1500915649000 //15:00
        },
        {
            name: "supper",
            seconds: 1500915649000 //19:00
        }

    ]

    let currentTime = 1500876015000 // 8:00

    let differences = [];
    // checking for difference
    for(let i = 0; i < mealsPreferences.length; i++) {

        let timeDifference = Math.abs((currentTime - mealsPreferences[i].seconds)); //only positive value
        let preference = {name: mealsPreferences[i].name, difference: timeDifference }

        differences.push(preference);
    }
    //displaying the meal with the smalest difference
    let theClosestMeal = {}
     for(let y = 0; y < differences.length - 1; y++) {
       if(differences[y].difference === 0) {
           theClosestMeal = differences[y];
       }
       else if(differences[y].difference > differences[y+1].difference) {
            y++;
       }
       else if(differences[y].difference === differences[y+1].difference) {
            theClosestMeal = differences[y+1];
       }
       else {
           theClosestMeal = differences[y];
       }
   }
    //if there is only one mealPreference show only one meal constantly
    //show the closes time, if it's o clock show the next meal so if the differences between two meals is the same show the next one
}
)
