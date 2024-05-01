const saveEntry = async (entryObject) => {
  let response = await fetch(
    `https://kodemiajs-f4a26-default-rtdb.firebaseio.com/blogEntries/.json`,
    {
      method: "POST",
      body: JSON.stringify(entryObject),
    }
  );

  let data = await response.json();
};

// Función para obtener el objeto y convertirlo de formato Json a JS
const getPosts = async () => {
  let response = await fetch(
    `https://kodemiajs-f4a26-default-rtdb.firebaseio.com/blogEntries/.json`
  );
  let posts = await response.json();
  let keys = Object.keys(posts);

  let postsArray = keys.map((key) => {
    return { ...posts[key], key };
  });
  return postsArray;
};

const printPost = async () => {
  const posts = await getPosts();
  const postsLists = document.getElementById(`post-list`);

  postsLists.innerHTML = "";

  posts.forEach((post) => {
    let card = document.createElement("li");
    card.classList.add("card", "text-white", "bg-dark", "mb-3");
    card.style.maxWidth = "30rem";

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    let headerTitle = document.createElement("h5");
    headerTitle.textContent = post.title;
    cardHeader.append(headerTitle);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("p");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = post.content;
    let cardAuthor = document.createElement("p");
    cardAuthor.classList.add("card-text");
    let authorEmphasis = document.createElement("em");
    authorEmphasis.textContent = post.autor;
    cardAuthor.append(authorEmphasis);

    card.append(cardHeader);
    cardBody.append(cardTitle, cardAuthor);
    card.append(cardBody);

    postsLists.append(card);
  });
};

let inputs = document.querySelectorAll("#post-form input");
let saveEntryBtn = document.getElementById("save-entry-button");
saveEntryBtn.addEventListener("click", async () => {
  let blogEntry = {};
  inputs.forEach((input) => {
    blogEntry[input.name] = input.value;
  });

  await saveEntry(blogEntry);

  await printPost();
  inputs.forEach((input) => (input.value = ""));
});

document.addEventListener(`DOMContentLoaded`, async () => {
  await printPost();
});
