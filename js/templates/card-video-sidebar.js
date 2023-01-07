export const cardVideoSidebar = (data) => `
  <a href="/video.html" class="cover">
    <img class="image" src=${data.cover}>
    <time class="time">${data.time}</time>
  </a>
  <div class="content">
    <h3 class="title rows-text-2">
      <a href="/video.html">#JhericoS - This video is an example for YouTube Clone</a>
    </h3>
    <a href="#">Jherico Solier</a>
    <p class="video-information">
      <span class="views">${data.views} views</span>
      <span>${data.upload} ${data.type} ago</span>
    </p>
  </div>
`
