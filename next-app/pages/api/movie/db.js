const movies = [{ id: 1, title: 'Mamma Mia', score: 8, image: '/images/mammamia.jpg', description: "The plot follows a young bride-to-be who invites three men to her upcoming wedding, each one with the possibility of being her father. The film was an international co-production between the United Kingdom and the United States, and was co-produced by Playtone and Littlestar Productions." }, 
                { id: 2, title: 'Titanic', score: 8.7, image: '/images/titanic.jpg', description: "Titanic is a 1997 American epic romantic disaster movie. It was directed, written, and co-produced by James Cameron. The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio. The two play characters who are of different social classes. They fall in love after meeting aboard the ship, but it was not good for a rich girl to fall in love with a poor boy in 1912. " },
                { id: 3, title: 'Venom', score: 7, image: '/images/venom.jpg', description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it. " },
                { id: 4, title: 'Joker', score: 8.4, image: '/images/joker.jpg', description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker." }]

export const find = ({ id }) => {
  if (!id) {
    return movies;
  }
  const index = movies.findIndex(it => it.id == id);
  return index === -1 ? null : movies[index];
}