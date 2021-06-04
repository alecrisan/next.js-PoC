const shows = [{ id: 1, title: 'Friends', score: 8.9, image: '/images/friends.jpg', episodes: 235, description: "Friends is an American television sitcom, created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons.[1] With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City." }, 
              { id: 2, title: 'Lucifer', score: 8.1, image: '/images/lucifer.jpg', episodes: 93, description: "Lucifer is an American urban fantasy superhero television series developed by Tom Kapinos that premiered on Fox on January 25, 2016. The series revolves around the story of Lucifer Morningstar (Tom Ellis), the Devil, who abandons Hell for Los Angeles where he runs his own nightclub named Lux and becomes a consultant to the Los Angeles Police Department (LAPD). " },
              { id: 3, title: 'Peaky Blinders', score: 8.8, image: '/images/peaky.jpg', episodes: 36, description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby." },
              { id: 4, title: 'Emily in Paris', score: 8, image: '/images/emily.jpg', episodes: 20, description: "A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things." }]

export const find = ({ id }) => {
  if (!id) {
    return shows;
  }
  const index = shows.findIndex(it => it.id == id);
  return index === -1 ? null : shows[index];
}