Meteor.publish('movies', function() {
  return Movies.find();
});
Meteor.publish('genres', function() {
  return Genres.find();
});