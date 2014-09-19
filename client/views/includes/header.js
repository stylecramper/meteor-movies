Template.header.events({
  'click a.fb-link': function(e) {
    e.preventDefault();
    
    FB.login(function (response) {
      if (response.authResponse) {
      
        FB.api('/me', function(response) {
          var fb_user = '<a href="'+response.link+'" class="fb-user">'+response.name+'</a>';
          $('a.fb-link').before(fb_user);
          $('a.fb-link').remove();
          FB.logout();
        });
        
      } else {
        console.info("Login attempt failed!");
      }
  }, { scope: 'publish_actions' });

  }
});