function displayLocation() {
  const locationSpan = document.getElementById("locationSpan");
  getLocation(
    (location) => (locationSpan.innerHTML = location),
    (err) => alert("Error: " + err.message)
  );
}

function getLocation(successCallback, errorCallback) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location =
          "Latitude: " +
          position.coords.latitude +
          " " +
          "Longitude: " +
          position.coords.longitude;
        successCallback(location);
      },
      (error) => {
        errorCallback(error);
      }
    );
  }
  