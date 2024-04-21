const blogEntries = [
  {
    image: "https://picsum.photos/id/237/200/300",
    title: "Los Secretos de la Cocina Italiana",
    content:
      "Explorar la cocina italiana va más allá de la pizza y la pasta. En este artículo, descubrimos los ingredientes autóctonos, las técnicas de cocción y los platos menos conocidos que definen la verdadera esencia de la cocina italiana.",
    abstract:
      "Explorar la cocina italiana va más allá de la pizza y la pasta...",
    rating: 8.75,
    fechaCreacion: "2024-04-18",
    autor: "Daniel Torres",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    image: "https://picsum.photos/id/102/200/300",
    title: "Avances en la Energía Solar",
    content:
      "La energía solar ha alcanzado nuevos hitos en la última década, con avances en la eficiencia de los paneles y la reducción de costos. Analizamos cómo estos cambios están configurando el futuro de las energías renovables.",
    abstract:
      "La energía solar ha alcanzado nuevos hitos en la última década...",
    rating: 9.3,
    fechaCreacion: "2024-04-17",
    autor: "Laura Martínez",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    image: "https://picsum.photos/id/401/200/300",
    title: "La Revolución de la Inteligencia Artificial",
    content:
      "La inteligencia artificial está transformando industrias enteras, desde la automotriz hasta la financiera. Este artículo explora los desarrollos más recientes y cómo están influyendo en nuestras vidas cotidianas.",
    abstract:
      "La inteligencia artificial está transformando industrias enteras...",
    rating: 7.9,
    fechaCreacion: "2024-04-16",
    autor: "Sofía Hernández",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    image: "https://picsum.photos/id/200/200/300",
    title: "El Futuro del Trabajo Remoto",
    content:
      "El trabajo remoto se ha convertido en una parte fundamental de muchas industrias. Este artículo analiza las herramientas, técnicas y culturas que están moldeando esta nueva forma de trabajar.",
    abstract: "El trabajo remoto se ha convertido en una parte fundamental...",
    rating: 8.65,
    fechaCreacion: "2024-04-15",
    autor: "Daniel Torres",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    image: "https://picsum.photos/id/305/200/300",
    title: "Secretos para un Jardín Sostenible",
    content:
      "Crear un jardín sostenible no solo es beneficioso para el medio ambiente, sino también relajante y gratificante. Descubre técnicas y consejos para mantener tu jardín verde y próspero con un impacto mínimo en la naturaleza.",
    abstract:
      "Crear un jardín sostenible no solo es beneficioso para el medio ambiente...",
    rating: 9.5,
    fechaCreacion: "2024-04-14",
    autor: "Sofía Hernández",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    image: "https://picsum.photos/id/180/200/300",
    title: "Explorando la Historia del Jazz",
    content:
      "El jazz es un género musical que ha influido en muchas otras formas de música a lo largo del tiempo. Este artículo explora la historia del jazz, sus figuras clave y su impacto en la música moderna.",
    abstract:
      "El jazz es un género musical que ha influido en muchas otras formas...",
    rating: 8.2,
    fechaCreacion: "2024-04-13",
    autor: "Miguel Ángel García",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

console.log(blogEntries);

const createAutorCard = (entryObject) => {
  let { image, autor } = entryObject;


  let autorCard = document.createElement("div");
  autorCard.classList.add("p-2","card", "blog-card", "d-flex","flex-row");

  let containerImg = document.createElement("div")
  containerImg.classList.add("d-flex","align-items-center","p-2")
  let autorImage = document.createElement("img");
  autorImage.classList.add("rounded-circle");
  autorImage.setAttribute("src", image);
  containerImg.append(autorImage);

  let containerAutorName = document.createElement("div");
  containerAutorName.classList.add( "d-flex","align-items-center");
  let autorName = document.createElement("h4");
  autorName.classList.add( "col-8");
  autorName.textContent = autor;
  containerAutorName.append(autorName);
  

  
  autorCard.append(containerImg, containerAutorName);

  return autorCard;
};

const printAutorCards = (blogData, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  blogData.forEach((entry) => {
    let autorCard = createAutorCard(entry); // Corrected function name
    wrapper.append(autorCard);
  });
};

const createBlogCard = (entryObject) => {
  let { image, title, abstract, fechaCreacion, rating } = entryObject;

  let card = document.createElement("div");
  card.classList.add("card", "blog-card", "mb-3");

  let cardImage = document.createElement("img");
  cardImage.setAttribute("src", image);


  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  let cardTitleText = document.createTextNode(title);
  cardTitle.append(cardTitleText);

  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  let cardTextContent = document.createTextNode(abstract);
  cardText.append(cardTextContent);

  // aqui empiezo a modificar en caso de fallas
  
  let cardDateAndRating = document.createElement("p");
   cardDateAndRating.classList.add("card-text", "text-end");
  let createdDateAndRating =document.createTextNode(`${fechaCreacion} / ${rating}`);
  cardDateAndRating.append(createdDateAndRating)

  const containerButton = document.createElement("div")
  containerButton.classList.add("text-end")
  let cardButton = document.createElement("button");
  cardButton.textContent = "Ir al post";
  cardButton.classList.add("btn", "btn-primary", "col-3")
  containerButton.append(cardButton)


  cardBody.append(cardTitle, cardText);
  card.append(cardImage, cardBody, createAutorCard(blogEntries), cardDateAndRating, containerButton);

  return card;
};

const printBlogCards = (blogData, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  blogData.forEach((entry) => {
    let blogCard = createBlogCard(entry);
    wrapper.append(blogCard);
  });
};

const createPopularItem = (entryObject) => {
  let { title } = entryObject;

  let entryItem = document.createElement("li");
  entryItem.classList.add("list-group-item");

  let itemAnchor = document.createElement("a");
  itemAnchor.setAttribute("href", "#");

  let entryHeading = document.createElement("h3");
  let entryTitle = document.createTextNode(title);

  entryHeading.append(entryTitle);
  itemAnchor.append(entryHeading);
  entryItem.append(itemAnchor);

  return entryItem;
};

const printPopularEntries = (popularArray, wrapperId) => {
  console.log(popularArray);
  let wrapper = document.getElementById(wrapperId);
  popularArray.forEach((entry) => {
    let popularEntry = createPopularItem(entry);
    wrapper.append(popularEntry);
  });
};

const getAutorList = (entryObject) => {
  let result = entryObject.reduce((accum, current) =>  accum.includes(current[autor]) ? accum : [...accum, current[autor]],[]);
  return result;
  }

printAutorCards(blogEntries, "autor-entries");

printBlogCards(blogEntries, "main-posts");

printPopularEntries(
  blogEntries.filter((entry) => entry.rating > 9),
  "popular-entries"
);
