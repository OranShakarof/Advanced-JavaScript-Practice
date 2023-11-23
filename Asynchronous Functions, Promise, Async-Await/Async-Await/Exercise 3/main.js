async function getCuteAnimal() {
  try {
    const cuteAnimal = await generateCuteAnimalAfterDelayAsync();
    alert(cuteAnimal + " is Cute Animal");
  } catch (err) {
    alert(err.message);
  }
}

function generateCuteAnimalAfterDelayAsync() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const animals = [
          "Kitten",
          "Puppy",
          "Bunny",
          "Parrot",
          "Scorpion",
          "Spider",
          "Cockroach",
        ];
        const randomAnimal = Math.floor(Math.random() * 7);
        if (
          animals[randomAnimal] === "Scorpion" ||
          animals[randomAnimal] === "Cockroach" ||
          animals[randomAnimal] === "Spider"
        )
          reject(new Error(`${animals[randomAnimal]} isn't cute animal`));
        resolve(animals[randomAnimal]);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}
