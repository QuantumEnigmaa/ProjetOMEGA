/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : 4 juin 2020, 08:54:26
    Author     : Thibaud VAISSEAU
*/

function validEnvoi() {
    if (window.document.querySelector("validationCustom01").value === "" && 
       window.document.querySelector("validationCustom02").value === "") {
       alert("Le nom ou le prénom doivent être remplis"); //On affiche un message
    }
    else if (window.document.querySelector("validationCustom03").value === "") {
        alert("L'email doit être rempli");
    }
    else {
        let question ="Souhaitez-vous réellement utiliser l'adresse suivante : "
        +window.document.querySelector("validationCustom03l").value;
        if(confirm(question)){
            window.document.querySelector(".needs-validation").submit();// On peut envoyer
        }
    }
}

window.addEventListener("load",function() {
window.document.querySelector(".btn btn-primary").addEventListener("click",validEnvoi);
});