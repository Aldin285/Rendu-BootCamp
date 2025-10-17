// Il faudra créer une fonction qui crée les éléments li 
// J'ai remarqué que 

// Partie input
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Ajouter une tâche";

// Appel du locale storage
let localStorageTasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log("Type local storage : "+localStorageTasks);
console.log("Local storage : "+localStorageTasks);
// Affichage du LocaleStorage 
const titleStorage = document.createElement("h1");
titleStorage.innerHTML = "Liste des tâches dans le locale storage: <br/>";
titleStorage.innerHTML += localStorageTasks

// localStorage.clear();

// List des tâches existantes dans le locale storage
const tasksList = document.createElement("ul");

localStorageTasks.forEach(el => {
    if (el){
       
        tasksList.innerHTML += `<li id="${el.name}"  ${el.checked? "style='text-decoration: line-through;'":""} ><input type="checkbox" onclick="CheckTask(this)" ${el.checked?"checked":""} > ${el.name}</input> <button onclick="deleteTask(this)"> Delete</button> </li>`;
        
    }else {
        tasksList.innerHTML = "Aucune tâche dans le locale storage";
    }
});


// Bouton Ajouter
const addButton = document.createElement("button");
addButton.textContent = "Ajouter";
addButton.onclick = addTask;

// Ajout d'une tâche
function addTask() {
    const inputValue = input.value.trim();

    if(localStorageTasks.includes(inputValue)){
        alert("La tâche existe déjà !");
        input.value = "";
        return;
    }else if (inputValue !== "") {

        tasksList.innerHTML += `<li id="${inputValue}"><input type="checkbox" onclick="CheckTask(this)" "> ${inputValue} </input> <button onclick="deleteTask(this)"> Delete</button></li>`;
        
       
        localStorageTasks.push({name: inputValue, checked: false});
        localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
        console.log("Check add : "+localStorageTasks.includes( inputValue));
        input.value = "";
    }
    
};

// Supprimer une tâche
function deleteTask(el){
    const elementName = el.parentNode.id;
    localStorageTasks = localStorageTasks.filter(task => task !== elementName);
    localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
    el.parentElement.remove();
    
}

// Check Task
function CheckTask(el){
    if (el.checked){
        el.parentElement.style.textDecoration = "line-through";
       localStorageTasks = localStorageTasks.map(task => {
            if (task.name === el.parentElement.id){
                return {name: task.name, checked: true};
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
    } else {
        el.parentElement.style.textDecoration = "none";
}
}

// Tâches par défaut
const defaultTasks = [{name:"Revoir le code",checked: false},{name:"Faire les courses",checked: true},{name:"Appeler le client",checked: false}];

// Ajout des tâches par défaut
// Oui, ces éléments réapparaissent à chaque rechargement de la page
defaultTasks.forEach(el => {
    if(!localStorageTasks.some(task => task.name === el.name)){
        localStorageTasks.push(el);
        // localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
       
        tasksList.innerHTML += `<li id="${el.name}"  ${el.checked? "style='text-decoration: line-through;'":""} ><input type="checkbox" onclick="CheckTask(this)" ${el.checked?"checked":""} > ${el.name}</input> <button onclick="deleteTask(this)"> Delete</button> </li>`;
       
        // tasksList.innerHTML += `<li id="${el.name}"><input type="checkbox" onclick="CheckTask(this)" > ${el.name}</input> <button onclick="deleteTask(this)" ${el.checked?"checked":""}> Delete</button> </li>`;
    } 
});

// Radio filtre 
const filtreList = document.createElement("div");
filtreList.innerHTML = "<h2>Filtrer les tâches:</h2> \
<input type='radio' name='filtre' value='Tout' checked> Tout </input> \
<input type='radio' name='filtre' value='Fait'> Fait </input>\
<input type='radio' name='filtre' value='AFaire'> A Faire </input>";



const ListItems = document.getElementsByTagName("li");

// Attente le chargement du DOM pour afficher les éléments
document.addEventListener("DOMContentLoaded", () => {    
    // List des li présents
    console.log(ListItems);

    ListItems.addEventListener

    // Filtre
    const filtre = document.querySelectorAll('input[type="radio"]')
    console.log(filtre);

    filtre.forEach(el => {
        el.addEventListener("change", () => {
           
                console.log("Valeur selectionnée: "+el.value);

                for (let item of ListItems){
                    switch(el.value){
                        case "Tout":
                            item.style.display = "block";
                            break;
                        case "Fait":
                            if(item.firstChild.checked){
                                item.style.display = "block";
                            } else {
                                item.style.display = "none";
                            }
                            break;
                        case "AFaire":
                            if(!item.firstChild.checked){
                                item.style.display = "block";
                            } else {
                                item.style.display = "none";
                            }
                            break;
                    }
                };
            
        });
    });


});


// Saut de ligne
const br = document.createElement("br");

// Contenu

document.body.appendChild(input);
document.body.appendChild(br);

document.body.appendChild(addButton);
document.body.appendChild(br);
document.body.appendChild(filtreList);
document.body.appendChild(br);
document.body.appendChild(titleStorage);
document.body.appendChild(br);
document.body.appendChild(tasksList);
document.body.appendChild(br);


// localStorage.clear();