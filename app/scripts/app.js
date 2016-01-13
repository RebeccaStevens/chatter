(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

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
    app.$.headerPanelMain.scrollToTop(true);
  };

  app.closeDrawer = function() {
    app.$.paperDrawerPanel.closeDrawer();
  };

  // set the active chatroom based on the given id
  app.setActiveChatRoom = function(id) {
    app.activeChatroomId = id;
    app.chatroomsDataUpdated();
  };

  // set the active chatroom based on `app.activeChatroomId`
  app._setActiveChatRoom = function() {
    app.chatrooms.forEach(function(e) {
      if (e.__firebaseKey__ === app.activeChatroomId) {
        app.activeChatroom = e;
        return false;
      }
    });
  };

  app.sendMessage = function(event) {
    app.$['chat-input'].clearMessage();

    app.$.firebaseChatrooms.query.ref()
      .child(app.activeChatroomId)
      .child('messages')
      .push().set({
        from: event.detail.from,
        message: event.detail.message
      });
  };

  app.chatroomsDataUpdated = function() {
    app._setActiveChatRoom();

    if (app.activeChatroom) {
      app.set('activeChatroom.messagesAsArray',
        app.activeChatroom.messages ?
          Object.keys(app.activeChatroom.messages).map(function(key) {
            return app.activeChatroom.messages[key];
          })
          : []
      );
    }
  };

})(document);
