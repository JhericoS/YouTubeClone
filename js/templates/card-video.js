export const cardVideo = (data) => `
  <a href="/video.html" class="cover">
    <img class="image" src=${data.cover}>
    <time class="time">${data.time}</time>
  </a>
  <div class="container flex">
    <div class="user-avatar">
      <img class="image" src=${data.avatar}>
    </div>
    <div class="content">
      <h3 class="title rows-text-2">
        <a href="/video.html">#JhericoS - Este es un video random</a>
      </h3>
      <a href="#">Jherico Solier</a>
      <p class="video-information">
        <span class="views">${data.views} views</span>
        <span>${data.upload} ${data.type} ago</span>
      </p>
    </div>
  </div>
`
