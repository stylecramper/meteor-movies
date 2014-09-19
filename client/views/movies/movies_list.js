Meteor.startup(function() {
    Session.set("sorter", {title: 1});
});
Template.moviesList.helpers({
  movies: function() {
    return Movies.find({}, {sort: Session.get('sorter')});
  }
});
Template.moviesList.events({
  'click a.delete': function(e) {
    e.preventDefault();
    
    var currentMovieId = this._id;
    
    if (confirm('Delete this movie?')) {
      Movies.remove(currentMovieId);
      Router.go('moviesList');
    }
  },
  'click a.edit': function(e) {
    e.preventDefault();
    
    var currentMovieId = this._id,
      form = $('form.main');
    
    form.find('.editing').val('true');
    form.find('.movie-to-edit').val(currentMovieId);
    form.find('#title').val(this.title);
    form.find('#year').val(this.year);
    form.find('#genre').val(this.genre);
    form.find('div.cancel').addClass('shown');
    $(e.target).parents('tr').addClass('editing');
  },
  
  'click a.sorter': function(e) {
    e.preventDefault();
    
    var sorter = {},
    key = $(e.target).attr('data-field'),
    value = $(e.target).attr('data-order');
    
    sorter[key] = parseInt(value, 10);
    if (_.has(Session.get('sorter'), key)) {
      sorter[key] = -sorter[key];
      $(e.target).attr('data-order', sorter[key]);
    }
    Session.set('sorter', sorter);
    Movies.find();
    
  }
});