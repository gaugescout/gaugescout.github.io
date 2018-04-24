// State argument is not application state only
// the state this reducer is responsible for
export default function (state = null, action) {
    console.log("Reducer action:", action);
    return [
        {id:1, address:'18 Chestnut Way', city: 'Lee', state: 'NH'},
        {id:2, address:'19 Chestnut Way', city: 'Lee', state: 'NH'},
        {id:3, address:'100 Pine Hill Rd', city: 'Boxborough', state: 'MA'}
    ]
}
