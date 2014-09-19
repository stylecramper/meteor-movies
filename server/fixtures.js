if (Genres.find().count() === 0) {
  Genres.insert({
    name: 'Foreign'
  });
  Genres.insert({
    name: 'Action'
  });
  Genres.insert({
    name: 'Thriller'
  });
  Genres.insert({
    name: 'Comedy'
  });
  Genres.insert({
    name: 'Drama'
  });
  Genres.insert({
    name: 'Documentary'
  });
  Genres.insert({
    name: 'Horror'
  });
  Genres.insert({
    name: 'Family'
  });Genres.insert({
    name: 'Science Fiction'
  });
  Genres.insert({
    name: 'Romance'
  });
}
if (Movies.find().count() === 0) {
  Movies.insert({
    title: 'Some Like It Hot',
    year: '1959',
    genre: Genres.findOne({name: 'Comedy'})._id,
    submitted: +(new Date())
  });
  
  Movies.insert({
    title: 'On the Waterfront',
    year: '1954',
    genre: Genres.findOne({name: 'Drama'})._id,
    submitted: +(new Date())
  });
  
  Movies.insert({
    title: 'Forbidden Planet',
    year: '1956',
    genre: Genres.findOne({name: 'Science Fiction'})._id,
    submitted: +(new Date())
  });
}