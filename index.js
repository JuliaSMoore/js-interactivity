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


const revealMessage = () => {

    message.removeAttribute(`class`, `hide`)

    setTimeout(() => message.setAttribute(`class`, `hide`), 1000)

}

const deleteMovie = (event) => {

    event.target.parentNode.remove() 

    message.textContent = `${event.target.previousSibling.textContent} deleted!`

    revealMessage()
}

crossOffMovie = (event) => {

    event.target.classList.toggle(`checked`)

    if (event.target.classList.contains(`checked`)) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

