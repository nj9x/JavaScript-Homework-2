console.log("===Zodiac Homework===")
var year = prompt("What year were you born in?");
var zodiacResult = (year - 4) % 12;

if (zodiacResult == 0) {
    console.log("You are a Rat");
}  
else if (zodiacResult == 1) {
    console.log("You are an OX"); 
}
else if (zodiacResult == 2) {
        console.log("You are a Tiger");
} 
else if (zodiacResult == 3) {
        console.log("You are a Rabbit");
}
else if (zodiacResult == 4) {
    console.log("You are a Dragon"); 
}
else if (zodiacResult == 5) {
        console.log("You are a Snake");
} 
else if (zodiacResult == 6) {
        console.log("You are a Horse");
}
else if (zodiacResult == 7) {
        console.log("You are a Goat");
}
else if (zodiacResult == 8) {
        console.log("You are a Monkey");
}
else if (zodiacResult == 9) {
        console.log("You are a Rooster");
}
else if (zodiacResult == 10) {
        console.log("You are a Dog");
}
else if (zodiacResult == 11) {
        console.log("You are a Pig");
}
else  {
        console.log("You need to correctly input a year");
}