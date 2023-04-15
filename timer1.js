// Implement an alarm clock / timer which :
// beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments


//get arguments from the user
//loop over arguements
//set timeout time for each of those arguements


let args = process.argv.slice(2);
const delay = 1000;

const time = function(args) {
  for (let i = 0; i < args.length; i++)
    if (args[i] === null || args[i] === NaN | args[i] <= 0) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, i * delay);
    }
};

(time(args));


