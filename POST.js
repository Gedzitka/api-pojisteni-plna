 export const post=async function fetch() {
    const response = await fetch('http://localhost:8000/api/clients', {
        method: 'POST',
        body:data
    })

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}
