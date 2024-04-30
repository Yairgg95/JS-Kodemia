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

let inputs = document.querySelectorAll("#post-form input");
let saveEntryBtn = document.getElementById("save-entry-button");
saveEntryBtn.addEventListener("click", () => {
  let blogEntry = {};
  console.log("hol");
  inputs.forEach((input) => {
    blogEntry[input.name] = input.value;
  });
  console.log(blogEntry);
  saveEntry(blogEntry);
});
