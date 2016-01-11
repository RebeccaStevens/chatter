(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.chatrooms = [
    {
      id: 'c0',
      name: 'Chat Room 1',
      description: 'chat and stuff',
      messages: [
        {
          from: 'Bob',
          message: 'Hello'
        },
        {
          from: 'Tom',
          message: 'Test'
        }
      ]
    },
    {
      id: 'c1',
      name: 'Chat Room 2',
      description: 'other stuff',
      messages: [
        {
          from: 'Tim',
          message: '123'
        },
        {
          from: 'Alex',
          message: '456'
        },
        {
          from: 'Matt',
          message: '789'
        }
      ]
    }
  ];

  app.activeChatroom = app.chatrooms[0];

  // Sets app default base URL
  app.baseUrl = '/';
  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
      Polymer.dom(document).querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {

  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    console.log('no main panel');
    // app.$.headerPanelMain.scrollToTop(true);
  };

  app.closeDrawer = function() {
    console.log('no drawer');
    // app.$.paperDrawerPanel.closeDrawer();
  };

  // set the active chatroom based on the given id
  app.setActiveChatRoom = function(id) {
    app.chatrooms.forEach(function(e) {
      if (e.id === id) {
        app.activeChatroom = e;
        return false;
      }
    });
  };

})(document);
