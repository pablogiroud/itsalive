export const nameHandler = (val) => {
  let valUp = val.toUpperCase()
  const arr = valUp.split(' ')
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
  }
  const nameCap = arr.join(' ')
  return nameCap
}
