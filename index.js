const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
const farmAnimalArray = farmAnimals.split(" ");

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const moo = farmAnimalArray[0]; 
const neigh = farmAnimalArray[1];
const baa = farmAnimalArray[2];
const oink = farmAnimalArray[3];
const cluck = farmAnimalArray[4];


// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

const bessie = farmAnimalArray[0];
const dolly = farmAnimalArray[2];
const babe = farmAnimalArray[3];
const little = farmAnimalArray[4];


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const blackAndWhite = farmAnimalArray[0];
const black = farmAnimalArray[2];
const pink = farmAnimalArray[3];

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const r = colors[0];
const o = colors[1];
const y = colors[2];
const g = colors[3];
const b = colors[4];
const v = colors[6];
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const indg = colors[5];
// Objects
const muppetName = 'Miss Piggy'
const color = 'pink'
const song = 'Never Before, Never Again'
const job = 'Cast member of The Muppet Show'
const partner = 'Kermit'
// 7. Use destructuring to assign all variables using the keys as the variable names
const song2 = 'Moving Right Along'
const song4 = 'I Hope That Something Better Comes Along'
const nestedJob = 'Host of The Muppet Show'
const nestedPartner = 'Miss Piggy'

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner