import {getRandom} from "../helpers/random.js";

export const cardData = () => {
  const list = ["minutes", "weeks", "months", "years"];
  const type = list[Math.floor(Math.random() * list.length)];
  let maxT;
  switch (type) {
    case "minutes":
      maxT = 60;
      break;
    case "weeks":
      maxT = 5;
      break;
    case "months":
      maxT = 12;
      break;
    case "years":
      maxT = 9;
      break;
  };
  return {
    cover: `https://picsum.photos/id/${getRandom(1, 70)}/520/300`,
    avatar: `https://i.pravatar.cc/100?img=${getRandom(1, 70)}`,
    time: `${getRandom(0, 60)}:${getRandom(10, 60)}`,
    views: `${getRandom(1, 100)}.${getRandom(100, 999)}`,
    upload: `${getRandom(2, maxT)}`,
    type,
  }
}
