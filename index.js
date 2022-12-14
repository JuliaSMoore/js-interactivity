console.log(`Start`)

const message = document.querySelector(`#message`)

const addMovie = (event) => {

event.preventDefault()

const inputField = document.querySelector(`input`)

const movie = document.createElement(`li`)

const movieTitle = document.createElement('span')

movieTitle.textContent = inputField.value

movieTitle.addEventListener(`click`, crossOffMovie)

movie.appendChild(movieTitle)

const deleteBtn = document.createElement('button')

deleteBtn.textContent = `x`

deleteBtn.addEventListener(`click`, deleteMovie)

movie.appendChild(deleteBtn)

const movieList = document.querySelector('ul')

movieList.appendChild(movie)

inputField.value = ``

} 

const form = document.querySelector('form')

form.addEventListener(`submit`, addMovie)

const deleteMovie = (event) => {

    message.textContent = `Movie deleted!`

    event.target.parentNode.remove() 
}

crossOffMovie = (event) => {

    event.target.classList.toggle(`checked`)

    if (event.target.classList.contains(`checked`)) {
        message.textContent = `Movie watched!`
    } else {
        message.textContent = `Movie added back!`
    }
}