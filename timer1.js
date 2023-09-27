function beep() {
    process.stdout.write('\x07');
  }

  function setAlarm(seconds) {
    const milliseconds = seconds * 1000;
    setTimeout(() => {
      console.log(`Time's up! Alarm for ${seconds}seconds`);
      beep();
    }, seconds);
  }

  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('No numbers are provided,exiting');
  } else {
    args.forEach((arg) => {
      const seconds = parseInt(arg, 10);

      if (!isNaN(seconds) && seconds > 0) {
        setAlarm(seconds);
        console.log(`Alarm set for ${seconds}seconds`);
      } else if (isNaN(seconds)) {
        console.log(`Skipping invalid argument: ${arg}`);
      } else if (duration <= 0) {
        console.log(`Skipping negative or zero duration: ${arg}`);
      }
    });
  }