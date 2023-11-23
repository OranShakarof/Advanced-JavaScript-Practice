function getStrongPassword() {
  getStrongPasswordAfterDelayAsync()
    .then((password) => alert(`${password} is Strong Password`))
    .catch((err) => alert(err.message));
}
function getStrongPasswordAfterDelayAsync() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        let password = "";
        for (let i = 1; i <= 6; i++) {
          const letter = Math.floor(Math.random() * 74) + 48;
          password += String.fromCharCode(letter);
        }
        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasNumbers = false;
        for (let i = 0; i < password.length; i++) {
          let char = password.charAt(i);
          if (char >= "A" && char <= "Z") hasUpperCase = true;
          if (char >= "a" && char <= "z") hasLowerCase = true;
          if (char >= "0" && char <= "9") hasNumbers = true;
        }
        if (hasUpperCase && hasLowerCase && hasNumbers) resolve(password);
        reject(new Error(`The Password: ${password} not Strong Enough`));
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}
