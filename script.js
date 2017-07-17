//const button = document.querySelector('button');

// let timecode = 0



// This function set the images in the timecode.
function setImagesInTime() {
  const images =
  [
    { timecode: 1150, imgUrl: 'assets/images/my-life_01.png', lineId: 'line1' },
    { timecode: 1420, imgUrl: 'assets/images/my-life_02.jpeg', lineId: 'line1' },
    { timecode: 2500, imgUrl: 'assets/images/had_stood_01.jpg', lineId: 'line2' },
    { timecode: 2800, imgUrl: 'assets/images/had_stood_03.jpg', lineId: 'line2' },
    { timecode: 3500, imgUrl: 'assets/images/loaded_gun_01.jpeg' },
    { timecode: 3800, imgUrl: 'assets/images/loaded_gun_02.jpeg' },
    { timecode: 4200, imgUrl: 'assets/images/loaded_gun_03.jpeg' },
    { timecode: 5000, imgUrl: 'assets/images/in_corners_01.jpg' },
    { timecode: 5800, imgUrl: 'assets/images/in_corners_02.jpg' },
    { timecode: 7000, imgUrl: 'assets/images/had_stood_03.jpg' },
    { timecode: 8000, imgUrl: 'assets/images/had_stood_03.jpg' },
    { timecode: 9000, imgUrl: 'assets/images/had_stood_03.jpg' },
    { timecode: 10000, imgUrl: 'assets/images/had_stood_03.jpg' },
    { timecode: 11000, imgUrl: 'assets/images/had_stood_03.jpg' },
    { timecode: 12000, imgUrl: 'assets/images/had_stood_03.jpg' },
    { timecode: 13000, imgUrl: 'assets/images/had_stood_03.jpg' },
  ]

// This is the loop runs the timecode.
  for (const image of images) {
    window.setTimeout( function(){setImageInTime (image)}, image.timecode)
  }
}

//
function setImageInTime(image) {
  const para = document.querySelector('p');
  const line = document.getElementById(image.lineId)
  const greenBackground = document.getElementsByClassName('green-background')

  for (const i of greenBackground) {
    i.className = '';
  }

  line.className = 'green-background';
  para.innerHTML = '<img src="' + image.imgUrl + '">';
}

// This enables the function when click the audio
const audio = document.querySelector('audio')
audio.addEventListener('play', setImagesInTime);
// audio.addEventListener('pause', HandlePause);

// function HandlePause() {}








//button.addEventListener('click', showImages, playAudio);




/*



  }

  for (const image of images)

  {
    window.setTimeout(image.timecode, setImageInTime)
  }
}

document.getElementById('play-btn').addEventListener('click', play)


HTMLAudioElement

*/
