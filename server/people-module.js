let people = ['Dev', 'Ally', 'Mary', 'Chris'];

function printPeople() {
  
  for (person of people){
    console.log(person);
  }
}

// What you to share must be exported
module.exports = {
  displayPeople: printPeople, 
  people: people
};