Movies = new Meteor.Collection('movies');

Meteor.methods({
  movie: function(movieAttributes) {
    var movieWithSameTitle = Movies.findOne({title: movieAttributes.title}),
      movie,
      movieId,
      editing = (movieAttributes.editing === 'true');
    
    if (editing) {
      movie = _.pick(movieAttributes, 'title', 'year', 'genre');
      
      Movies.update(movieAttributes.id, {$set: movie}, function(error) {
        if (error) {
          throw new Meteor.Error(503, 'Sorry, an error occured.');
        }
      });
      
    } else {
    
      if (!movieAttributes.title && !movieAttributes.year) {
        throw new Meteor.Error(422, 'Please fill in movie title and year.');
      } else if (!movieAttributes.title) {
        throw new Meteor.Error(422, 'Please fill in a movie title.');
      } else if (!movieAttributes.year) {
        throw new Meteor.Error(422, 'Please fill in a year.');
      }
      
      if (movieAttributes.title && movieWithSameTitle) {
        throw new Meteor.Error(302, 'This movie has already been added.', movieWithSameTitle._id);
      }
      
      movie = _.extend(_.pick(movieAttributes, 'title', 'year', 'genre'), {
        submitted: new Date().getTime()
      });
      
      movieId = Movies.insert(movie);
    
    }
    return movieId;
  }
});