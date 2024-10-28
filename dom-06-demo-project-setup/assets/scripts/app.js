const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('add-moal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
//const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
}

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
}; 

const cancelAddMovie = () => {
    toggleMovieModal();
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);