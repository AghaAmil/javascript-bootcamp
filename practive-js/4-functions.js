// user-define function
console.log("1. User-defined Function");

function preloader() {
  console.log("Loading...");
}
preloader();

// funtion parameters
console.log("\n");
console.log("2. Funtion Parameters");

function reminder(event) {
  console.log("You set a reminder about " + event);
}
reminder("sex");
reminder("practice JS");

// multiple parameters
console.log("\n");
console.log("3. Using Multiple Parameters with Functions");

function decider(team1, team2) {
  if (team1 > team2) console.log("Team 1 won");
  else if (team1 < team2) console.log("Team 2 won");
  else if (team1 === team2) console.log("Draw");
}
console.log("Team1 scrore = 3");
console.log("Team2 scrore = 4");
decider(3, 4);

console.log("Team1 scrore = 5");
console.log("Team2 scrore = 1");
decider(5, 1);

console.log("Team1 scrore = 2");
console.log("Team2 scrore = 2");
decider(2, 2);

// the return statement
console.log("\n");
console.log("4. The return Statement");

function avg(a, b, c) {
  return (a + b + c) / 3;
}
console.log("num1 = 34");
console.log("num2 = 25");
console.log("num3 = 71");
console.log(avg(34, 25, 71).toFixed(2));
