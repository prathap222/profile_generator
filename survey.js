const readline = require('readline');

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const answers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let i = 0;

const ques = function() {
  if (i < 7) {
    rl.question(`${questions[i]}\n`, (answer) => {
      answers[i] = answer;
      i++;
      console.log();
      ques();
    });
  } else {
    rl.close();
    console.log("Here's your profile:");
    setTimeout(() => console.log(`
      ${answers[0]} likes doing ${answers[1]} while listening to ${answers[2]}. 
      ${answers[0]}'s favorite meal is ${answers[3]} and likes having ${answers[4]}.
      ${answers[0]}'s absolute favorite sport is ${answers[5]}.
      Last but not least, ${answers[0]}'s superpower is ${answers[6]}`), 1500);
  }
};

ques();