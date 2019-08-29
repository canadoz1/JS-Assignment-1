let money = prompt("Який Ваш бюджет на місяць?", "");
     time = prompt("Введіть, будь ласка, дату у форматі YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let r1 = prompt("Введіть обов'язкову статтю розсходів у цьому місяці", "");
    r2 = prompt("У скільки це обійдеться?", "");
    r3 = prompt("Введіть обов'язкову статтю розсходів у цьому місяці", "");
    r4 = prompt("У скільки це обійдеться?", "");
    
appData.expenses.r1 = r2;
appData.expenses.r3 = r4;

alert(appData.budget / 30);