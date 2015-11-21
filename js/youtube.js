var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // プレーヤーを埋め込む場所指定
        var ytArea = 'background';
        // 埋め込むYouTube ID指定
        var ytID = 'c0gLVkKU5lE';

        // プレーヤーの埋め込み
        function onYouTubeIframeAPIReady() {
            ytPlayer = new YT.Player(ytArea, {
                videoId: ytID,
                playerVars: {
                    rel: 0,
                    controls: 0,
                    showinfo: 0,
                    wmode: 'transparent',
                    vq: 'hd1080',
                    autohide: 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        // YouTubeの準備完了後
        function onPlayerReady(e) {
            ytPlayer.playVideo();
            ytPlayer.mute();
        }

        // 再生完了後
        function onPlayerStateChange(e) {
            var ytStatus = e.target.getPlayerState();
            if (ytStatus == YT.PlayerState.ENDED) {
                ytPlayer.playVideo();
                ytPlayer.mute();
            }
        }