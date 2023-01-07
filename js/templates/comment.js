export const commentTemplate = (data) => `
<div class="user-avatar">
    <img
        class="image"
        src=${data.avatar}
        alt="User Avatar"
    >
  </div>
  <div class="content">
    <header class="header">
      <a href="#"
          class="name"><b>Jherico Solier</b></a>
      <time class="time">1 month ago</time>
    </header>
    <p class="text rows-text-4">${data.content}</p>
    <footer class="buttons-container">
      <button class="action-button has-text"
          data-tooltip="Like">
        <span class="icon icon-like-video"></span>
        <span class="text">${data.likes}</span>
      </button>
      <button class="action-button has-text"
          data-tooltip="Dislike">
        <span class="icon icon-dislike-video"></span>
      </button>
      <button class="button link">Responder</button>
    </footer>
  </div>
`
