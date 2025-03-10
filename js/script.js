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

const cardGridElement = document.querySelector('.cards-grid');
console.log(cardGridElement);

for (let i = 1; i < teamMembers.length; i++) {

  const currentMember = teamMembers[i];
  console.log(currentMember.name);

  const cardsElement = document.createElement('div');
  // console.log(cardsElement);

  cardsElement.classList.add('member-card');
  cardGridElement.appendChild(cardsElement);

  cardsElement.innerHTML = `<img src="${currentMember.img}" alt="${currentMember.name}">
                <div class="info-card">
                    <h2>${currentMember.name}</h2>
                    <span>${currentMember.role}</span>
                    <a href="#">${currentMember.email}</a>
                </div>`;


}