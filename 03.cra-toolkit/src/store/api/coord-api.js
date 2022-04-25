
export const coordApi = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude: lat, longitude: lon } = position.coords;
      resolve({ lat, lon });
    }, err => {
      reject(err)
    })
  })
}