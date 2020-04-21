let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = [];
    appData = {
        money, 
        time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };

prompt('Введите обязательную статью расходов в этом месяце');
prompt('Во сколько обойдется?');

let expenses = 
