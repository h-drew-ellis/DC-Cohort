//database
let database = firebase.database()
let rootRef = database.ref()


//HTML Elements
let input = document.getElementById("input")
let storeName = document.getElementById("storeName")
let streetAddress = document.getElementById("streetAddress")
let city = document.getElementById("city")
let state = document.getElementById("state")
let zip = document.getElementById("zip")
let submit = document.getElementById("sumbit")
let myStores = document.getElementById("myStores")


//obserations

rootRef.on('value', (snapshot) => {
    let stores = [];
    let snapshotValue = snapshot.val();
    console.log(snapshotValue)

    for (let key in snapshotValue) {
        let store = snapshotValue[key]
        stores.push(store)
    }
    let li = stores.map(s => {
        return `<li>
        <label>${s.storeName}<label>
        <p><label>${s.streetAddress}</label>
        <label>${s.city}</label>
        <label>${s.state}</label>
        <label>${s.zip}</label>
        </li>
        `
    })
})
submit.addEventListener("click", () => {
    let store = storeName.value
    let address = streetAddress.value
    let c = city.value
    let s = state.value
    let z = zip.value

    rootRef.push({
        StoreName: store,
        location: address + c + s + z
    })
})