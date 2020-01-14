/*
Создайте четыре объекта, соответствующие городам Свердловской области (любым). 
Объекты должны содержать название города и результаты последних пяти переписей населения. 
Создайте метод, с использованием this, вычисляющий прогнозируемое население на 2022 год, запишите результат в объекты. 
Выведете результат любым удобным способом.
Результат должен содержать название города, средний прирост (убыль) населения, прогнозируемую численность на 2022 и 2025 годы.
Результат 2025 года не надо записывать в объект, сам метод выводить так же не нужно.
Использовать объекты и их методы.
*/

let City1 = {
    Name: "Екатеринбург",
    Population2015: 1428042,
    Population2016: 1444439,
    Population2017: 1455904,
    Population2018: 1468833,
    Population2019: 1483119
};
let City2 = {
    Name: "Ивдель",    
    Population2015: 16378,
    Population2016: 16235,
    Population2017: 16090,
    Population2018: 15888,
    Population2019: 15659
};
let City3 = {
    Name: "Полевской",
    Population2015: 62718,
    Population2016: 62402,
    Population2017: 62259,
    Population2018: 61853,
    Population2019: 61332
};
let City4 = {
    Name: "Сысерть",
    Population2015: 20964,
    Population2016: 20939,
    Population2017: 20962,
    Population2018: 21097,
    Population2019: 21029
};

function Population() {
    return(Math.floor(this.Population2019 + 3 * ((this.Population2019 - this.Population2015) / 4)));
};

function GainDecrease(){
    return(Math.floor((this.Population2019 - this.Population2015) / 4));
};

City1.f = Population;
City2.f = Population;
City3.f = Population;
City4.f = Population;

City1.Population2022 = City1.f();
City2.Population2022 = City2.f();
City3.Population2022 = City3.f();
City4.Population2022 = City4.f();

City1.f = GainDecrease;
City2.f = GainDecrease;
City3.f = GainDecrease;
City4.f = GainDecrease;

City1.GainDecrease = City1.f();
City2.GainDecrease = City2.f();
City3.GainDecrease = City3.f();
City4.GainDecrease = City4.f();

document.write(City1.Name, "<br> Прирост/Убыль ", City1.GainDecrease, "<br> Прогнозируемая Численность На 2022 - ", City1.Population2022, "<br> Прогнозируемая Численность На 2025 - ", (City1.Population2022 + City1.GainDecrease * 3), "<p>");
document.write(City2.Name, "<br> Прирост/Убыль ", City2.GainDecrease, "<br> Прогнозируемая Численность На 2022 - ", City2.Population2022, "<br> Прогнозируемая Численность На 2025 - ", (City2.Population2022 + City2.GainDecrease * 3), "<p>");
document.write(City3.Name, "<br> Прирост/Убыль ", City3.GainDecrease, "<br> Прогнозируемая Численность На 2022 - ", City3.Population2022, "<br> Прогнозируемая Численность На 2025 - ", (City3.Population2022 + City3.GainDecrease * 3), "<p>");
document.write(City4.Name, "<br> Прирост/Убыль ", City4.GainDecrease, "<br> Прогнозируемая Численность На 2022 - ", City4.Population2022, "<br> Прогнозируемая Численность На 2025 - ", (City4.Population2022 + City4.GainDecrease * 3), "<p>");