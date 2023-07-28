const subjects = ['You', 'I', 'We'];
const verbs = ['are', 'am', 'is'];
const objects = ['programmers', 'artists', 'writers'];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateMessage() {
  const subject = subjects[getRandomIndex(subjects)];
  const verb = verbs[getRandomIndex(verbs)];
  const object = objects[getRandomIndex(objects)];

  return `${subject} ${verb} ${object}!`;
}

console.log(generateMessage());