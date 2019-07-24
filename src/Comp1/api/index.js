export const getData = () => {
  return fetch('https://helloacm.com/api/random/?n=128').
    then((res) => {
      return res.json()
    })
}
