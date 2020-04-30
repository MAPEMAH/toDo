let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"); 

 



let appData = {
    budget: money,
    timeData: time,
    expenses: {
        
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
//цикл на 2 вопроса и запись в свойства обьекта expenses
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов", ''),
        b = prompt("Во сколько обойдется?", '');
        appData.expenses[a] = b;
}
//расчет бюджета на 1 день и запись moneyPerDay в обьект (другим способом1)
appData.moneyPerDay = appData.budget / 30;

console.log(`Ежедневный бюджет: ${appData.moneyPerDay}`);
console.log(appData, money, time); //просто вывод в консоль для проверки этих данных



