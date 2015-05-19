var current = 'home';

var updatePage = function(whose) {

    current = whose;
    var contents;
    if (whose === 'home') {
        contents = streams.home;
    } else {
        contents = streams.users[whose];
    }
    
    // grab the stage
    var $stage = $('#stage');
    // clear content of stage
    $stage.html('');

    // insert content of streams
    var index = contents.length - 1;
    while(index >= 0){
    var tweet = contents[index];
    var click = 'onclick=\"updatePage\(\'' + tweet.user + '\'\)\"';
    var timeStamp = ' <div class="time-stamp">' + tweet.created_at + '</div>'
    var link = '<div class="tweet"><a href="#"' + click + ' >@'+tweet.user+'</a>: ' + tweet.message + timeStamp +'</div>';
    var $tweet = $(link);
    $tweet.appendTo($stage);
    index -= 1;
  }
};

// var wall = function(whose) {}