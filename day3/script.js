const bollywoodHeroes = [
  {
    name: "Salman Khan",
    age: 59,
    married: true,
    movies: ["Sultan", "Bajrangi Bhaijaan", "Tiger Zinda Hai"],
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSNFRMKVVDEDOgTB5k839BSedO6_R9TxlnJ3oUoN5Y-2PzS4CKsVQTBvtomtT3AaUA4_lLarY4lMjdZRftzWkg5YdlmqBCvcCNMvHsq66W4"
  },
  {
    name: "Shah Rukh Khan",
    age: 59,
    married: true,
    movies: ["Pathaan", "Chennai Express", "Dilwale Dulhania Le Jayenge"],
    image: "https://www.pinkvilla.com/images/2024-07/1061787021_shah-rukh-khan.jpg"
  },
  {
    name: "Aamir Khan",
    age: 60,
    married: false,
    movies: ["PK", "Dangal", "3 Idiots"],
    image: "https://th.bing.com/th/id/R.b091367bcc852c2e90aa0aebd7cc7a7c?rik=XwmN%2bfbHB60wJg&riu=http%3a%2f%2fmedia.gqindia.com%2fwp-content%2fuploads%2f2016%2f07%2fGQ-India-aamir-khan.jpg&ehk=r3BWDr6I3kl0oD5oGjZrj2gICnDL1ZEn94GoE8%2bPP0E%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "Akshay Kumar",
    age: 57,
    married: true,
    movies: ["Khiladi", "Hera Pheri", "Toilet: Ek Prem Katha"],
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5EaoGM2WIlqvjT8uSa8b5Pb_IxE5R7PvqK5-wTIfeBoA0ampSS8-WGgAbWjolEU6vzBXQAJk9oHz7gxcEQYlKZg"
  }
];
const container = document.getElementById("container");

// Only create three cards according to arr data
bollywoodHeroes.slice(0, 4).forEach((hero) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
    <img src="${hero.image}" alt="${hero.name}">
    <h1>${hero.name}</h1>
    <h3>Age: ${hero.age}</h3>
    <h3>Married: ${hero.married ? "True" : "False"}</h3>
    <p>Movies: ${hero.movies.join(", ")}</p>
  `;
  container.appendChild(cardDiv);
});