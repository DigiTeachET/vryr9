AFRAME.registerComponent('songplayer1', {
    init: function () {
        let audiosource = document.querySelector('#track1');
        this.el.addEventListener('click', function () {
            console.log("Play button clicked");
            if (audiosource && audiosource.components.sound) {
                audiosource.components.sound.playSound();
            } else {
                console.error("Sound component not found on track1");
            }
        });
    }
});

AFRAME.registerComponent('songstopper1', {
    init: function () {
        let audiosource = document.querySelector('#track1');
        this.el.addEventListener('click', function () {
            console.log("Stop button clicked");
            if (audiosource && audiosource.components.sound) {
                audiosource.components.sound.stopSound();
            } else {
                console.error("Sound component not found on track1");
            }
        });
    }
});
