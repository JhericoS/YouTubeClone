import {getRandom} from "../helpers/random.js";

const comments = [
  'I like that Arnold was sick of his immortality after 200 years, which in the grand scheme of things, is only like 2.5x the human average.',
  'We always dream of becoming immortal, and I guess everyone is on board in tackling the nightmares ahead.',
  'I love how at the end he`s not running away when the Sun is dying he`s just standing here watching the Sun explode.',
  `Even tho it would be really depressing & lonely I wouldn't turn this down, there's nothing I've wanted more to have immortality so that I can learn and continuously help our species advance, it'd be a huge honour, depressing or not I want immortality`,
  `I'd say that being immortal doesn't mean not feeling pain, you just cant die from it.`,
  'This is literally my dream. I know I`ll be alone and probably depressed beyond comprehension, however, I can`t explain how much I want to see the evolution of humanity, it`s downfall, the planet in 5000 years and all the cataclysmic events like the sun exploding and galaxies crashing into one another. I don`t want immortality to live forever or because I`m afraid of death. I simply want the front row seat to everything that will ever happen.',
  '500million years later: Arnold has become the center of a planet that hosts life, a miracle',
  'As he floated through space, he realized that he kill himself was obsolete, eventually Arnold`s the brain stopped thinking',
  'Immortality is one of the scariest concept you can imagine you would wanna take an extended life span instead of living forever',
]

export const commentData= () => {
  return {
    avatar: `https://i.pravatar.cc/100?img=${getRandom(1, 70)}`,
    content: comments[getRandom(0, comments.length - 1)],
    likes: getRandom(0, 50),
  }
}
