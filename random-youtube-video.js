var player;
var videoList, videoCount;
function onYouTubeIframeAPIReady()
{
    player = new YT.Player('ytplayer',
    {
        height: '50',
        width: '400',
        events:
        {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },

        playerVars:
        {
            controls:0,
            autoplay:0
        }
    });
}

function onPlayerReady(event)
{
    // cue the playlist, to get the video's ids 
    event.target.cuePlaylist
    ({
        listType: 'search',
        list: 'javascript',
        suggestedQuality:'default',
        autoplay: 1,
        index:0,
    });

    event.target.setLoop();
}

function onPlayerStateChange(event)
{
    if(event.data == YT.PlayerState.CUED)
    {
        videoList = event.target.getPlaylist();

        // to prevent adding new video and for the randomize
        videoCount = videoList.length; 

        // get the ids before randomize playlist, send it
        sendIds(videoList);

        // starting the player (like autoplay)
        event.target.playVideo();
    }

    // randomize at each video ending
    if(event.data == YT.PlayerState.ENDED)
    {
        var num = getRandom(1,videoCount);
        event.target.playVideoAt(num);
    }
}

function sendIds(ids)
{
    console.log(ids);
    // make what you want to do with them... ajax call to your php
}
