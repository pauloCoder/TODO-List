/**
 * Récupération des données entrées (input) du bouton (clic)
 * et du container contenant les informations 
 */
const addButton = document.querySelector(".add-button");
const inputValue = document.querySelector(".input");
const container = document.querySelector(".container");

class Item
{
    //Create the item div
    constructor(itemName)
    {
        this.createDiv(itemName);
    }

    createDiv(itemName)
    {

        // Défiition de item box (contenant de item-input...)
        let itemBox = document.createElement("div");
        itemBox.classList.add("item");
        // Définition de l'entrée saisie
        let input = document.createElement("input");
        input.type = "text";
        input.value = itemName;
        input.disabled = true;
        input.classList.add("item-input");

        //Définition de edit button
        let editButton = document.createElement("button");
        editButton.textContent = "EDIT";
        editButton.classList.add("edit-button");

        //Définition de remove button
        let removeButton = document.createElement("button");
        removeButton.textContent = "REMOVE";
        removeButton.classList.add("remove-button");

        //Ajout des composants ci-dessus dans leur parent
        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        //Listener pour écouter les évènements
        
        /**Evènement pour edit button **/
        //Méthode 1 
        editButton.addEventListener('click',() => this.edit(input));
       //Méthode 2 
        /*editButton.onclick = () =>{
            input.disabled = !input.disabled;
        };*/

        /**Evènement pour remove button **/
        removeButton.addEventListener('click',() => this.remove(itemBox));


    }

    edit(input)
    {
        input.disabled = !input.disabled;
    }

    remove(itemBox)
    {
        container.removeChild(itemBox);
    }
}

//Ecoute du bouton ajout 
addButton.addEventListener('click',check);
function check()
{
    if (inputValue.value != '')
        new Item(inputValue.value);
        inputValue.value = "";
}
