Template.movieItem.helpers({
  genre: function() {
    return Genres.findOne({_id: this.genre}).name;
  }
});