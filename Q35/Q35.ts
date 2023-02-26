const animals: string[] = ['dog', 'cat', 'rabbit'];
const animals_quality: string[] = ['would make a great pet.', 'would make a good companion.', 'would make a cute and cuddly pet.'];
// Print list of animals
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
  }

// Modify program for description of animals
 console.log(`A ${animals[0]}, ${animals_quality[0]}`);
 console.log(`A ${animals[1]}, ${animals_quality[1]}`);
 console.log(`A ${animals[2]}, ${animals_quality[2]}`);
 
 //Animals have in common Qualities
 console.log(`Any of these animals would make a great pet! They are all furry and fun to play with.`);