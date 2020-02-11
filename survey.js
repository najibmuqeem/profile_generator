const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", answer1 => {
  rl.question("What's an activity you like doing? ", answer2 => {
    rl.question(`What do you listen to while ${answer2}? `, answer3 => {
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
        answer4 => {
          rl.question(
            `What's your favourite thing to eat for ${answer4}? `,
            answer5 => {
              rl.question(
                "Which sport is your absolute favourite? ",
                answer6 => {
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    answer7 => {
                      process.stdout.write(
                        `${answer1} likes ${answer2} and listening to ${answer3} while ${answer2}. ${answer1}'s favorite thing to eat for ${answer4} is ${answer5}. ${answer1} thoroughly enjoys ${answer6}. In ${answer1}'s own words, "${answer7}."\n`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
