const prefix = 'https://kswd-hfls-site.s3-us-west-1.amazonaws.com/forStudents/kinder/vocales/';

const vowels = [
  { letter: 'a', word: 'abeja', phonic: { syllables: ['ah', 'BAY', 'hah'], highlights: [1] } },
  { letter: 'e', word: 'elefante', phonic: { syllables: ['ay', 'ley', 'FAHN', 'tey'], highlights: [0, 1, 3] } },
  { letter: 'i', word: 'iguana', phonic: { syllables: ['ee', 'GWAH', 'nah'], highlights: [0] } },
  { letter: 'o', word: 'oso', phonic: { syllables: ['O', 'so'], highlights: [0, 1] } },
  { letter: 'u', word: 'unicornio', phonic: { syllables: ['oo', 'nee', 'COR', 'nyo'], highlights: [0] } },
];

export const vocales = vowels.map(({ letter, word, phonic }) => ({
    letter,
    letterSoundUrl: `${prefix}${letter}.mp3`,
    letterImageUrl: `${prefix}${letter}.png`,
    phonic,
    wordSoundUrl: `${prefix}${word}.mp3`,
    wordImageUrl: `${prefix}${word}.png`,
}));

const choices = vowels.map(({ letter, word, phonic }) => ({
  label: letter,
  choiceSound: `${prefix}${letter}.mp3`,
}));

export const vowelQuizData = {
  question: 'Which Spanish vowel do you hear?',
  choices,
}
