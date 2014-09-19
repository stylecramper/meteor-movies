Template.movieSubmit.helpers({
  genres: function() {
    return Genres.find();
  }
});
function resetForm(form, editing) {
  form.find('input').not(':submit, :button').val('');
  form.find('select').prop('selectedIndex', 0);
  if (editing) {
    form.find('input.editing, input.movie-to-edit').val('false');
    $('tr.movie').removeClass('editing');
    $('div.cancel').removeClass('shown');
  }
}
Template.movieSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var $form = $(e.target),
      movie = {
        title: $form.find('[name=title]').val(),
        year: $form.find('[name=year]').val(),
        genre: $form.find('[name=genre]').val(),
        editing: $form.find('[name=editing]').val(),
        id: $form.find('[name=movie_to_edit]').val()
      };
    
    Meteor.call('movie', movie, function(error, id) {
      if (error) {
        throwError(error.reason);
        if (error.error = 302) {
          Router.go('moviesList', {_id: error.details});
        } else {
          Router.go('moviesList', {_id: id});
        }
      }
      resetForm($form, (movie.editing !== 'false'));
    });
  },
  
  'click input.cancel-button': function(e) {
    
    var $form = $('form.main');
    
    resetForm($form, true);
  }
});