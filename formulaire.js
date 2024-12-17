
document.addEventListener('DOMContentLoaded', function () {                                     // Attendre que le DOM soit complètement chargé //  
   
    const form = document.getElementById('tva-form');                                           // Cible le formulaire //
    const resultsSection = document.getElementById('results');

   
    form.addEventListener('submit', function (event) {                                           // Ajoute évenements àsoumettre //
        event.preventDefault();                                                                 // Empêche le rechargement de la page //

       
        const prixTtc = parseFloat(document.getElementById('p').value);                          // Récupére les valeurs des champs du formulaire //
        const tauxTva = parseFloat(document.getElementById('tr').value);                         // parseFloat transforme en chaine de caractère afin de pouvoir mettre la virgule//


        const prixHt = prixTtc / (1 + (tauxTva / 100));                                            // Calcul du prix HT à partir du prix TTC et du taux de TVA //

       
        const tva = prixTtc - prixHt;                                                                // Calcul de la TVA //

       
        resultsSection.innerHTML = `                                                             
            <p><strong>Prix HT :</strong> ${prixHt.toFixed(2)} €</p>                                     
            <p><strong>Part TVA :</strong> ${tva.toFixed(2)} €</p>
            <p><strong>Prix TTC :</strong> ${prixTtc.toFixed(2)} €</p>`;                    // toFixed empèche d'avoir plus de 2 chiffres apres la virgule //
    });
});