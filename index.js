const paths = ['blackberry.png', 'kiwi.png', 'orange.png', 'banana.png']
const fruitButtonsDiv = document.getElementById('fruit-buttons')
const fruitDetail = document.getElementById('selected-fruit')

fruitImage = (path, styles) => {
  return `<img src='images/${path}' alt=${path} class='${styles}'></img>`
}

onFruitButtonClick = (path) => {
  fruitDetail.innerHTML = ''
  let div = document.createElement('div')
  div.innerHTML = fruitImage(path, 'rotating med-width')
  div.className += 'med-width'
  fruitDetail.appendChild(div)
}

addFruitButtons = (paths) => {
  paths.forEach((path) => {
    let button = document.createElement('button')
    button.innerHTML = fruitImage(path, 'icon')
    button.className += 'invisi-button margin-s'
    button.addEventListener('click', () => onFruitButtonClick(path))
    fruitButtonsDiv.appendChild(button)
  })
}

addFruitButtons(paths)
