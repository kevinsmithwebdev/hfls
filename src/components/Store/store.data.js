const getBookImagePath = (grade, type) => `https://kswd-hfls-site.s3-us-west-1.amazonaws.com/images/store/grade-${grade}-${type}.jpg`;

export default [
  {
    name: 'Kindergarten',
    imagesMain: [
      getBookImagePath('k', 'textbook'),
    ],
    books: [
      {
        link: 'https://www.amazon.com/Have-Fun-Learning-Spanish-Kindergarten/dp/1724927884/ref=sr_1_3?qid=1563148728&refinements=p_27%3ARoxana+N%C3%BA%C3%B1ez+Trabucco&s=books&sr=1-3&text=Roxana+N%C3%BA%C3%B1ez+Trabucco',
        name: 'Textbook',
        price: 30,
      },
    ],
  },
  {
    name: 'First Grade',
    imagesMain: [
      getBookImagePath(1, 'textbook'),
      getBookImagePath(1, 'stories'),
      getBookImagePath(1, 'literacy'),
    ],
    books: [
      {
        link: 'https://www.amazon.com/Have-Fun-Learning-Spanish-Textbook/dp/1726467643/ref=sr_1_5?qid=1563148728&refinements=p_27%3ARoxana+N%C3%BA%C3%B1ez+Trabucco&s=books&sr=1-5&text=Roxana+N%C3%BA%C3%B1ez+Trabucco',
        name: 'Textbook',
        price: 25,
      },
      {
        link: 'https://www.amazon.com/Have-Fun-Learning-Spanish-Bilingual/dp/1726275701/ref=sr_1_6?qid=1563148728&refinements=p_27%3ARoxana+N%C3%BA%C3%B1ez+Trabucco&s=books&sr=1-6&text=Roxana+N%C3%BA%C3%B1ez+Trabucco',
        name: 'Reading Book',
        price: 20,
      },
      {
        link: 'https://www.amazon.com/dp/1726470105/ref=sr_1_2?qid=1565051587&refinements=p_27%3ANunez+Trabucco&s=books&sr=1-2&text=Nunez+Trabucco%2C+Roxana',
        name: 'Literacy Book',
        price: 14,
      }
    ],
  },
  {
    name: 'Second Grade',
    imagesMain: [
      getBookImagePath(2, 'textbook'),
    ],
    books: [
      {
        link: 'https://www.amazon.com/Have-Fun-Learning-Spanish-Textbook/dp/1726018040/ref=sr_1_2?qid=1563153712&refinements=p_27%3ARoxana+N%C3%BA%C3%B1ez+Trabucco&s=books&sr=1-2&text=Roxana+N%C3%BA%C3%B1ez+Trabucco',
        name: 'Textbook',
        price: 30,
      },
    ],
  },
  {
    name: 'Third Grade',
    imagesMain: [
      getBookImagePath(3, 'textbook'),
      getBookImagePath(3, 'stories'),
    ],
    books: [
      {
        link: 'https://www.amazon.com/Have-Fun-Learning-Spanish-Textbook/dp/1724880179/ref=sr_1_4?qid=1563148728&refinements=p_27%3ARoxana+N%C3%BA%C3%B1ez+Trabucco&s=books&sr=1-4&text=Roxana+N%C3%BA%C3%B1ez+Trabucco',
        name: 'Textbook',
        price: 30,
      },
      {
        link: 'https://www.amazon.com/Have-Fun-Learning-Spanish-Bilingual/dp/1726044432/ref=sr_1_7?qid=1563148728&refinements=p_27%3ARoxana+N%C3%BA%C3%B1ez+Trabucco&s=books&sr=1-7&text=Roxana+N%C3%BA%C3%B1ez+Trabucco',
        name: 'Reading Book',
        price: 15,
      },
    ],
  },
  {
    name: 'Fourth Grade',
    imagesMain: [
      getBookImagePath(4, 'textbook'),
    ],
    books: [
      {
        link: 'https://www.amazon.com/dp/1087099137/ref=sr_1_1?qid=1565052309&refinements=p_27%3A+Roxana%5CcNunez+Trabucco&s=books&sr=1-1&text=Nunez+Trabucco%2C+Roxana',
        name: 'Textbook',
        price: 30,
      },
    ],
  },
];