
//создание переменных money and time с вопросами
let money = prompt('Ваш бюджет на месяц?'); 
let timeData = prompt('Введите дату в формате YYYY-MM-DD');

//как сделать вопросы не имею понятия и соеденить их по примеру
let a = prompt('Введите обязательную статью расходов в этом месяце');
let b = prompt('Во сколько обойдется?');
let expenses = {a:b};
//appData обьект со свойствами внутри
let appData = {
        money, 
        timeData,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };

    expenses = {
        let a = 'first';
    };

    // let x = 'first';
    // let y = 'second';
    // let obj = {};
    // obj[a] = b;
    // console.log('obj');

console.log(appData);