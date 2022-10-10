const menu = document.querySelector("#AddProfile")
const profiles = document.querySelector(".profiles")
const CreatedProfiles = JSON.parse(localStorage.getItem("Profiles")) || []


CreatedProfiles.forEach ((elemento) => {
    CreateProfile(elemento)
})


function EditMenu () {   
    menu.classList.toggle("menu-open")
}

function SendProfile () {
    var nome = document.querySelector("#nome")
    var img = document.querySelector("#img")

    const NewProfile = {
        "nome": nome.value,
        "img": img.value
    }
    
    CreateProfile(NewProfile)

    CreatedProfiles.push(NewProfile)
    LocalStorageAdd(CreatedProfiles)

    menu.classList.toggle("menu-open")
    alert("Dados salvos com sucesso!")
}

function CreateProfile (Profile) {
    const novoItem = document.createElement("div")
    novoItem.classList.add("profiles-column")

    const nomeItem = document.createElement('div')
    nomeItem.classList.add("card-notes")
    nomeItem.innerHTML = Profile.nome

    const div = document.createElement('img')
    div.src = Profile.img
    const parents = div.classList.add("card-profiles")
    
    novoItem.insertBefore(div, parents)
    novoItem.appendChild(nomeItem)

    profiles.appendChild(novoItem)
}

function LocalStorageAdd (CreatedProfiles) {
    localStorage.setItem("Profiles", JSON.stringify(CreatedProfiles))
}