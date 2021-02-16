const data = [
  {
      "id": 1,
      "nom": "Lee",
      "prenom": "Bruce",
      "adresse": "Marseille",
      "specialite": "ophtalmologue"
  },
  {
      "id": 2,
      "nom": "Hugo",
      "prenom": "Victor",
      "adresse": "Aix-En-Provence",
      "specialite": "Dentiste"
  },
  {
      "id": 3,
      "nom": "Mozart",
      "prenom": "Amadeus",
      "adresse": "Paris",
      "specialite": "Dentiste"
  },
  {
      "id": 4,
      "nom": "Beethoven",
      "prenom": "Ludwig Von",
      "adresse": "Nantes",
      "specialite": "ophtalmologue"
  },
  {
      "id": 5,
      "nom": "Proust",
      "prenom": "Marcel",
      "adresse": "Marseille",
      "specialite": "Dentiste"
  },
  {
      "id": 6,
      "nom": "Arouet",
      "prenom": "François-Marie",
      "adresse": "Paris",
      "specialite": "ophtalmologue"
  },
  {
      "id": 7,
      "nom": "Poquelin",
      "prenom": "Jean-baptiste",
      "adresse": "Lille",
      "specialite": "Dentiste"
  },
  {
      "id": 8,
      "nom": "Shakespear",
      "prenom": "William",
      "adresse": "Paris",
      "specialite": "Infirmier"
  },
  {
      "id": 9,
      "nom": "Geldog",
      "prenom": "Bob",
      "adresse": "Rouen",
      "specialite": "Infirmier"
  },
  {
      "id": 10,
      "nom": "Shakespear",
      "prenom": "William",
      "adresse": "Lille",
      "specialite": "Dentiste"
  }
]

  const praticien = document.querySelector('.bb-section')
  data.forEach((element) =>  {
    praticien.insertAdjacentHTML('beforeend',`
    <div class="card"  alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.prenom}</h5>
        <h5 class="card-title">${element.nom}</h5>
        <h5 class="card-title">${element.specialite}</h5>
      </div>
    </div>
    `);
      
 });


 //function load() {
 //  var mydata = JSON.parse(data);
  //  alert(mydata.length);

  //  var div = document.getElementById('data');

 //   for(var i = 0;i < mydata.length; i++)
  //    {
  //     div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].name +"</p>" + "<br>";
  //   }
 // }




