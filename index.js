const paths = ['blackberry.png', 'kiwi.png', 'orange.png', 'banana.png']
const fruitButtonsDiv = document.getElementById('fruit-buttons')
const fruitDetail = document.getElementById('selected-fruit')
let selectedFruitPath = ''

fruitImage = (path, styles) => {
  return `<img src='images/${path}' alt=${path} class='${styles}'></img>`
}

onFruitButtonClick = (path) => {
  fruitDetail.innerHTML = ''
  let div = document.createElement('div')
  div.innerHTML = fruitImage(path, 'rotating med-width')
  div.className += 'med-width'
  fruitDetail.appendChild(div)
  selectedFruitPath = path
}

createFruitButton = (path) => {
  let button = document.createElement('button')
  button.innerHTML = fruitImage(path, 'icon')
  button.className += 'invisi-button margin-s'
  button.addEventListener('click', () => onFruitButtonClick(path))
  fruitButtonsDiv.appendChild(button)
}

createFruitButtons = (paths) => {
  paths.forEach((path) => {
    createFruitButton(path)
  })
}

onNextButtonClick = (path) => {
  fruitButtonsDiv.innerHTML = ""
  if (path === 'banana.png') {
    fruitDetail.innerHTML = "You picked banana."
  } else {
    fruitDetail.innerHTML = "Orange you glad you didn't pick banana?"
  }
}

createNextButtonHandler = () => {
  const nextButton = document.getElementById('next-button')
  nextButton.addEventListener('click', () => onNextButtonClick(selectedFruitPath))
}

addFruitSelectorSetup = (paths) => {
  createFruitButtons(paths)
  createNextButtonHandler()
}

addFruitSelectorSetup(paths)
