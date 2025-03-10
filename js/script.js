const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// salvo in una variabile il valore dell'elemento div con classe cards-grid
const cardGridElement = document.querySelector('.cards-grid');

//creo un ciclo for per creare gli elementi da aggiungere all'HTML 
for (let i = 1; i < teamMembers.length; i++) {

  const currentMember = teamMembers[i];

  const cardsElement = document.createElement('div');

  cardsElement.classList.add('member-card');
  cardGridElement.appendChild(cardsElement);

  cardsElement.innerHTML = addInfoCard(currentMember);
}


// creo una variabile dove salvo il valore del form dell'html
const formElement = document.getElementById('form-user');
console.log(formElement);

//creo delle variabili dove salvo i vari input
const nameUserElement = document.getElementById('name-input');
console.log(nameUserElement);
const roleUserElement = document.getElementById('role-input');
console.log(roleUserElement);
const emailUserElement = document.getElementById('email-input');
console.log(emailUserElement);
const imgUserElement = document.getElementById('img-input');
console.log(imgUserElement);

//creo l'evento dove invierò i dati con il form
formElement.addEventListener('submit', function (e) {

  e.preventDefault();

  const name = nameUserElement.value;
  const role = roleUserElement.value;
  const email = emailUserElement.value;
  const img = imgUserElement.value;

  let newObject = {
    name,
    role,
    email,
    img
  }

  teamMembers.push(newObject);
  formElement.reset();
  console.log(teamMembers);



  const cardsElement = document.createElement('div');

  cardsElement.classList.add('member-card');
  cardGridElement.appendChild(cardsElement);

  cardsElement.innerHTML = addInfoCard(newObject);



})



/* funzioni */

function addInfoCard(obj) {
  return `<img src="${obj.img}" alt="${obj.name}">
                            <div class="info-card">
                                <h2>${obj.name}</h2>
                                <span>${obj.role}</span>
                                <a href="#">${obj.email}</a>
                            </div>`;
}