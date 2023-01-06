import {cardVideo} from "/js/templates/card-video.js";
import {cardVideoSidebar} from "/js/templates/card-video-sidebar.js";
import {cardData} from "/js/helpers/get-card-data.js";

const handleRenderCards = () => {
  // Cards grid
  const cardsGrid = document.getElementById('card-grid')

  if (!cardsGrid) return

  const inSidebar = cardsGrid.classList.contains('cards-sidebar')

  for (let i = 1; i <= 30; i++) {
    const element = document.createElement('article')
    const data = cardData()
    element.classList.add('card-video')

    if (inSidebar) element.classList.add('in-sidebar')

    element.innerHTML = inSidebar ? cardVideoSidebar(data) : cardVideo(data)

    cardsGrid.appendChild(element)
  }
}

handleRenderCards()
