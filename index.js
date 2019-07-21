import FruitButton from '/javascript/fruitButton.js'
const paths = ['blackberry.png', 'kiwi.png', 'orange.png', 'banana.png']
const fruitButtonsDiv = document.getElementById('fruit-buttons')
const fruitDetail = document.getElementById('selected-fruit')
let selectedFruitPath = ''

const fruitImage = (path, styles) => {
  return `<img src='images/${path}' alt=${path} class='${styles}'></img>`
}

const onFruitButtonClick = (path) => {
  fruitDetail.innerHTML = ''
  let div = document.createElement('div')
  div.innerHTML = fruitImage(path, 'rotating med-width')
  div.className += 'med-width'
  fruitDetail.appendChild(div)
  selectedFruitPath = path
}

const createFruitButton = (path) => {
  let button = new FruitButton(path).create()
  button.addEventListener('click', () => onFruitButtonClick(path))
  fruitButtonsDiv.appendChild(button)
}

const createFruitButtons = (paths) => {
  paths.forEach((path) => {
    createFruitButton(path)
  })
}

const onNextButtonClick = (path) => {
  toggleNextBackButtons('toBack')
  createBackButtonHandler()
  fruitButtonsDiv.innerHTML = ""
  if (path === 'banana.png') {
    fruitDetail.innerHTML = "You picked banana."
  } else {
    fruitDetail.innerHTML = "Orange you glad you didn't pick banana?"
  }
}

const createNextButtonHandler = () => {
  const nextButton = document.getElementById('next-button')
  nextButton.addEventListener('click', () => onNextButtonClick(selectedFruitPath))
}

const onBackButtonClick = () => {
  fruitDetail.innerHTML = ""
  addFruitSelectorSetup(paths)
  toggleNextBackButtons('toNext')
}

const createBackButtonHandler = () => {
  const nextButton = document.getElementById('back-button')
  nextButton.addEventListener('click', onBackButtonClick)
}

const addFruitSelectorSetup = (paths) => {
  createFruitButtons(paths)
  createNextButtonHandler()
}

const toggleNextBackButtons = (direction) => {
  switch (direction){
    case 'toBack':
      document.getElementById("next-button").style.visibility = "hidden"
      document.getElementById("back-button").style.visibility = "visible"
      break;
    case 'toNext':
      document.getElementById("next-button").style.visibility = "visible"
      document.getElementById("back-button").style.visibility = "hidden"
      break;
    default:
      document.getElementById("next-button").style.visibility = "visible"
      document.getElementById("back-button").style.visibility = "hidden"
  }
}

addFruitSelectorSetup(paths)
