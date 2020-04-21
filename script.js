let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let a = prompt('Введите обязательную статью расходов в этом месяце');
let b = prompt('Во сколько обойдется?');
let expenses = {a:b};
let appData = {
        money, 
        time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };



console.log(appData);