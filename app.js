let main = document.querySelector("main");
const form = document.querySelector("form");
const formToggle = document.querySelector(".form-toggle");

// toggling the form

formToggle.addEventListener("click", (e) => {
  e.target.classList.toggle("hidden");
  form.classList.toggle("hidden");
});

function addToPage(item, child) {
  item.append(child);
}

form.addEventListener("submit", (e) => {
  // checking validity of form, but also preventing it from submitting
  e.preventDefault();
  if (form.checkValidity === false) {
    form.reportValidity();
    return;
  }

  // selecting inputs and main area for adding books
  const bookTitleInput = document.getElementById("book-title").value;
  const bookAuthorInput = document.getElementById("book-author").value;
  const pageNumberInput = document.getElementById("book-pages").value;
  const hasReadInput = document.getElementById("read-book");

  // creating the div element that holds the book the user inputs

  const bookHolder = document.createElement("div");
  bookHolder.classList.add("book-holder");
  const displayTitle = document.createElement("h2");
  displayTitle.innerText = bookTitleInput;
  const displayAuthor = document.createElement("p");
  displayAuthor.classList.add("author");
  displayAuthor.innerText = bookAuthorInput;
  const displayPageNumber = document.createElement("p");
  displayPageNumber.classList.add("page-number");
  displayPageNumber.innerText = "pgs: " + pageNumberInput;
  const boxHolder = document.createElement("div");
  boxHolder.classList.add("box-holder");
  const labelForCheckbox = document.createElement("label");
  labelForCheckbox.setAttribute("for", "read-status");
  labelForCheckbox.innerText = "Did you read it yet?";
  const readCheckbox = document.createElement("input");
  readCheckbox.setAttribute("type", "checkbox");
  readCheckbox.setAttribute("name", "read-status");
  readCheckbox.setAttribute("id", "read-status");
  const deleteBox = document.createElement("button");
  deleteBox.setAttribute("class", "delete-button");
  deleteBox.innerText = "X";

  // appending the new item to the page

  // function Book(a, b, c, d) {
  //   this.title = a;
  //   this.author = b;
  //   this.pages = c;
  //   this.hasRead = d;
  // }

  // const CurrentBook = new Book(
  //   bookTitleInput,
  //   bookAuthorInput,
  //   pageNumberInput,
  //   hasReadInput
  // );

  boxHolder.append(labelForCheckbox, readCheckbox);

  bookHolder.append(
    displayTitle,
    displayAuthor,
    displayPageNumber,
    boxHolder,
    deleteBox
  );

  if (hasReadInput.checked) {
    readCheckbox.setAttribute("checked", "true");
    bookHolder.style.border = "green solid 3px";
  }

  addToPage(main, bookHolder);

  readCheckbox.addEventListener("change", () => {
    if (readCheckbox.checked) {
      bookHolder.style.border = "green solid 3px";
    } else {
      bookHolder.style.border = "red solid 3px";
    }
  });

  // resetting the buttons and form after submitting
  e.target.classList.toggle("hidden");
  formToggle.classList.toggle("hidden");

  deleteBox.addEventListener("click", () => {
    deleteBox.parentNode.remove();
  });
});
