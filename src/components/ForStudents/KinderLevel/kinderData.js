const prefix = 'https://kswd-hfls-site.s3-us-west-1.amazonaws.com/forStudents/kinder/vocales/';

const vowels = [
  {
    letter: 'a',
    wordSyllables: ['a', 'be', 'ja'],
    phonic: { syllables: ['ah', 'BEY', 'hah'], highlights: [1] }
  },
  {
    letter: 'e',
    wordSyllables: ['e', 'le', 'fan', 'te'],
    phonic: { syllables: ['ey', 'ley', 'FAHN', 'tey'], highlights: [0, 1, 3] }
  },
  {
    letter: 'i',
    wordSyllables: ['i', 'gua', 'na'],
    phonic: { syllables: ['ee', 'GWAH', 'nah'], highlights: [0] }
  },
  {
    letter: 'o',
    wordSyllables: ['o', 'so'],
    phonic: { syllables: ['OH', 'soh'], highlights: [0, 1] }
  },
  {
    letter: 'u',
    wordSyllables: ['u', 'ni', 'cor', 'nio'],
    phonic: { syllables: ['oo', 'nee', 'COR', 'nyoh'], highlights: [0] }
  },
];

export const vocales = vowels.map(({ letter, wordSyllables, phonic }) => {
  const word = wordSyllables.join('');
  return {
    letter,
    letterSoundUrl: `${prefix}${letter}.mp3`,
    letterImageUrl: `${prefix}${letter}.png`,
    phonic,
    wordSoundUrl: `${prefix}${word}.mp3`,
    wordImageUrl: `${prefix}${word}.png`,
    wordSyllables,
  }
});

const choices = vowels.map(({ letter, word, phonic }) => ({
  label: letter,
  choiceSound: `${prefix}${letter}.mp3`,
}));

export const vowelQuizData = {
  question: 'Which Spanish vowel do you hear?',
  choices,
}
