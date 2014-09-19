Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('movies'); }
});

Router.map(function() {
  this.route('moviesList', {path: '/'});
});

Router.onBeforeAction('loading');
Router.onBeforeAction(function() { clearErrors(); });