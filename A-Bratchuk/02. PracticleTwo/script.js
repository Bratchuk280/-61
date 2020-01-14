/*
Есть четыре оптические линии связи. 
Длинна первой - 12км., второй на 20% больше, чем первой. 
Третья и четвёртая равны и имеют длину, равную средней длинны первых двух линий.
Волоконная ёмкость каждой линии меньше предыдущей в два раза (ёмкость первой - 128 волокна). 
Вычислить вес всех линий связи, если с каждым волокном сто метров кабеля становятся тяжелее на 200гр.. 
Вывести сообщение вида "самая тяжёлая линия *number* имеет общий вес __, а сто метров используемого кабеля весят __"
Использовать функции
*/

// Длина Оптических Линий Связи
const OpticalLine1 = 12 * 1000; // 12000
const OpticalLine2 = OpticalLine1 + ((OpticalLine1 / 100) * 20); // 14400
const OpticalLine3 = (OpticalLine1 + OpticalLine2) / 2; // 13200
const OpticalLine4 = OpticalLine3; // 13200
// Волоконная Ёмкость
const FiberCapacity1 = 128;
const FiberCapacity2 = FiberCapacity1 / 2;
const FiberCapacity3 = FiberCapacity2 / 2;
const FiberCapacity4 = FiberCapacity3 / 2;

// Вес Всей Линии
function Weight(OpticalLine, FiberCapacity){
    let Weight100 = FiberCapacity * 200;
    let Length = OpticalLine  / 100;
    return((Weight100 * Length) / 1000);
}

let Weight1 = Weight(OpticalLine1, FiberCapacity1); // 3072
let Weight2 = Weight(OpticalLine2, FiberCapacity2); // 1843.2
let Weight3 = Weight(OpticalLine3, FiberCapacity3); // 844.8
let Weight4 = Weight(OpticalLine4, FiberCapacity4); // 422.4

// Вес 100 Метров
function Weight100(OpticalLine, FiberCapacity){
    return((FiberCapacity * 200) / 1000);
}

let Weight101 = Weight100(OpticalLine1, FiberCapacity1); // 25.6
let Weight102 = Weight100(OpticalLine2, FiberCapacity2); // 12.8
let Weight103 = Weight100(OpticalLine3, FiberCapacity3); // 6.4
let Weight104 = Weight100(OpticalLine4, FiberCapacity4); // 3.2

switch (true) {
    case ((Weight1 > Weight2) && (Weight1 > Weight3) && (Weight1 > Weight4)):
        document.write("<p>Самая тяжёлая линия - №1. Имеет общий вес ", Weight1, ", а сто метров используемого кабеля весят ", Weight101);
        break;
    case ((Weight2 > Weight1) && (Weight2 > Weight3) && (Weight2 > Weight4)):
        document.write("<p>Самая тяжёлая линия - №2. Имеет общий вес ", Weight2, ", а сто метров используемого кабеля весят ", Weight102);
        break;
    case ((Weight3 > Weight1) && (Weight3 > Weight2) && (Weight3 > Weight4)):
        document.write("<p>Самая тяжёлая линия - №3. Имеет общий вес ", Weight3, ", а сто метров используемого кабеля весят ", Weight103);
        break;
    case ((Weight4 > Weight1) && (Weight4 > Weight2) && (Weight4 > Weight3)):
        document.write("<p>Самая тяжёлая линия - №4. Имеет общий вес ", Weight4, ", а сто метров используемого кабеля весят ", Weight104);
        break;
}