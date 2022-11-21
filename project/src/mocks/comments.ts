import { Comments } from '../types/Comments';

const comments: Comments = [
  {
    id: 1,
    user: {
      id: 14,
      name: 'Corey'
    },
    rating: 9.6,
    comment:
      'It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.',
    date: '2022-06-20T12:25:36.946Z'
  },
  {
    id: 2,
    user: {
      id: 16,
      name: 'Mollie'
    },
    rating: 1.1,
    comment:
      'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2022-06-23T12:25:36.946Z'
  },
  {
    id: 3,
    user: {
      id: 17,
      name: 'Emely'
    },
    rating: 8.4,
    comment:
      'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2022-06-05T12:25:36.946Z'
  }
];

export default comments;
