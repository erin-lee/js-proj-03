/*global define */
define([], function () {
    'use strict';

    return '\'Allo \'Allo!';
});

var user = 'erin-lee';

var getUser = function(resp) {
  var data = resp.data;
  console.log('getUser: ', data);
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


$.ajax({
    url: 'https://api.github.com/users/' + user + '/repos',
    dataType: 'jsonp',
    success: function(resp) {
      var data = resp.data;
      // console.log(resp.data);
      // console.log(resp.data[0].description);
      var repoArray = [];
      var repoHash = {};
      for (var index = 0; index < data.length; index++) {
        repoHash.index = index;
        repoHash.description = data[index].description;
        repoHash.html_url = data[index].html_url;
        repoHash.full_name = data[index].full_name;
        repoHash.homepage = data[index].homepage;
        repoArray.push(repoHash);

        console.log(repoArray);
        // repoArray.push(description);
        // $('#js-list-repos').append(description).wrap('<li></li>');
      }

      // function listEachItem( element, index, array ) {
      //   console.log(element, 'index: ', index)
      // }
        // console.log(repoArray);
        // repoArray.forEach(listEachItem);
    }
});