

const apiKey = "37fe945a"


fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error("Det gick inte att hämta datan från api", error)
})