AFRAME.registerComponent('songplayer1', {
    init: function () {
    let audiosource = document.querySelector('#track1');
    let musicplay = () => {
    audiosource.components.sound.playSound()
    }
    this.el.addEventListener('click', musicplay);
    }});
    
    AFRAME.registerComponent('songstopper1', {
    init: function () {
    let audiosource = document.querySelector('#track1');
    let musicstop = () => {
    audiosource.components.sound.stopSound()
    }
    this.el.addEventListener('click', musicstop);
    }});
    