Errors = new Meteor.Collection(null);
throwError = function(message) {
  Errors.insert({message: message, seen: false});
  $('div.errors').addClass('shown');
};
clearErrors = function() {
  Errors.remove({seen: true});
};