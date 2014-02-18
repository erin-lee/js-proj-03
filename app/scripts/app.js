/*global define */
define([], function () {
    'use strict';

    return '\'Allo \'Allo!';
});

var user = 'erin-lee';

var getUser = function(resp) {
  var data = resp.data;
  console.log(data);
  var avatar = data.avatar_url;
  var username = data.login;
  var email = data.email;
  var link = data.html_url;
  console.log(avatar);
  $('#js-username').html(username);
  $('#js-email').html(email);
  $('#js-link').html([
    '<a href="',
      link,
      '" target="_blank">',
      link,
      '</a>'
    ].join('')
  );
  $('#js-avatar').append([
        '<img class="avatar" src="',
        avatar,
        '">'
      ].join('')
    );
};

$.ajax({
    url: 'https://api.github.com/users/' + user,
    dataType: 'jsonp',
    success: getUser
  }
);
