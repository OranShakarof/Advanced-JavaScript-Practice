async function getDay() {
   try{
    const day = await generateWorkingDayAfterDelayAsync();
    alert(day + " is Working Day");
   }
   catch (err){
    alert(err.message);
   }
}

function generateWorkingDayAfterDelayAsync() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const week = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const day = Math.floor(Math.random() * 7);
        if (day >= 5)
          reject(new Error(`${week[day]} is rest day`));
        resolve(week[day]);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}
