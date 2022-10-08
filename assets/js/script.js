const menu = document.querySelector("#AddProfile")
const profiles = document.querySelector(".profiles")
function EditMenu () {   
    menu.classList.toggle("menu-open")
}

function SendProfile () {
    var nome = document.querySelector("#nome")
    var img = document.querySelector("#img")
    CreateProfile(nome.value,img.value)
    menu.classList.toggle("menu-open")
    alert("Dados salvos com sucesso!")
}

function CreateProfile (nome, img) {
    console.log(nome, img)
    const novoItem = document.createElement("div")
    novoItem.classList.add("profiles-column")

    const nomeItem = document.createElement('div')
    nomeItem.classList.add("card-notes")
    nomeItem.innerHTML = nome

    const div = document.createElement('div')
    const parents = div.classList.add("card-profiles")
    
    novoItem.insertBefore(div, parents)
    novoItem.appendChild(nomeItem)

    profiles.appendChild(novoItem)
}