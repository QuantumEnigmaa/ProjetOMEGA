/* 
    Created on : 2 juin 2020, 15:43:35
    Author     : luc CHERMETTE, Thibaud VAISSEAU, Raphaël GALANO
*/

function validEnvoi() 
{
    if (window.document.querySelector("#nom").value === "" && 
            window.document.querySelector("#prenom").value === "") 
    {
        alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
    }
    else if (window.document.querySelector("#mail").value === "") 
    {
        alert("L'email doit être rempli"); // On affiche un message
    }
    else
    {
        let question = "Souhaitez-vous réellement utiliser l'adresse suivante : " 
                + window.document.querySelector("#mail").value;
        if (confirm(question)) 
        {
            window.document.querySelector("#form_contact").submit(); // On peut envoyer
        }
    }
}

window.addEventListener("load", function() 
{
    window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi);
});

