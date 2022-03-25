export const nameHandler = (val) => {
    const arr = val.split(" ")
    for(var i = 0; i < arr.length; i++) {
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    const nameCap = arr.join(" ")
    return nameCap
}