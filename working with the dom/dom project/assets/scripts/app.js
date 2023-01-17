const addMovieModal = document.getElementById("add-modal");

// const addMovieModal = document.querySelector('add-model'); // above and this expression are same

const startAddMovieButton = document.querySelector("header button"); // or
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = ({ title, imageUrl, rating }) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
        <div class="movie-element__image"><img src="${imageUrl}" alt="${title}"/></div>
        <div class="movie-element__info"><h2>${title}</h2> <p>${rating}/5 stars</p></div>
    `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackDrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" || //it removes the empty space from the string
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter the valid values (rating between 1 and 5).");
    clearMovieInput();
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  toggleMovieModal();
  clearMovieInput();
  updateUI();
  renderNewMovieElement(newMovie);
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
