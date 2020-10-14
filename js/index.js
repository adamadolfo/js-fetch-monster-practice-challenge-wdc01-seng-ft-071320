const URL_PREFIX='http://localhost:3000/monsters/';
 
document.addEventListener("DOMContentLoaded", () => {
    fetchMonsters()
    let form = document.querySelector("#form").addEventListener("submit", handleSubmit)
    
})

function fetchMonsters() {
    fetch('http://localhost:3000/monsters/?_limit=50&_page')
    .then(r => r.json())
    .then(monsters => monsters.forEach(monster => renderMonster(monster)))
}   

function renderMonster(monster) {
    let container = document.getElementById("monster-container")
    let name = document.createElement("h2")
    name.innerText = monster.name

    let age = document.createElement("h3")
    age.innerText= monster.age

    let desc = document.createElement("p")
    desc.innerText = monster.description


    container.append(name, age, desc)
}

function handleSubmit(event) {
    event.preventDefault()

    obj = {
       name: event.target.name.value,
       age: event.target.age.value,
       description: event.target.description.value
    }

    fetch(URL_PREFIX, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(obj)
      }).then(res => res.json())
      .then(renderMonster)
}