const timer = function(timeArr) {

  if (!timeArr.length) return;

  for (let timeStr of timeArr) {
    const timeNum = Number(timeStr);

    if (isNaN(timeNum)) continue;
    if (timeNum < 0) continue;

    setTimeout(() => {
      console.log(`Beep at ${timeNum} seconds!`);
      process.stdout.write('\x07');
    }, timeNum * 1000);
  }

};

const timeArr = process.argv.slice(2);
timer(timeArr);