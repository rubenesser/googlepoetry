//const button = document.querySelector('button');

// let timecode = 0



// This function set the images in the timecode.
function setImagesInTime() {
  const images =
  [
    { timecode: 1000, imgUrl: 'assets/images/GooglePoetry_logo.jpg', lineId: 'line0' },
    { timecode: 1080, imgUrl: 'assets/images/my-life_01.png', lineId: 'line1' },
    { timecode: 1400, imgUrl: 'assets/images/my-life_02.jpeg', lineId: 'line1' },
    { timecode: 2200, imgUrl: 'assets/images/had_stood_01.jpg', lineId: 'line2' },
    { timecode: 2800, imgUrl: 'assets/images/had_stood_03.jpg', lineId: 'line2' },
    { timecode: 3800, imgUrl: 'assets/images/loaded_gun_01.jpeg', lineId: 'line3' },
    { timecode: 4500, imgUrl: 'assets/images/loaded_gun_03.jpeg', lineId: 'line3' },
    { timecode: 5500, imgUrl: 'assets/images/in_corners_01.jpg', lineId: 'line4' },
    { timecode: 5900, imgUrl: 'assets/images/in_corners_02.jpg', lineId: 'line4' },
    { timecode: 7000, imgUrl: 'assets/images/till_a_day_02.jpg', lineId: 'line5' },
    { timecode: 7700, imgUrl: 'assets/images/the_owner_01.jpg' , lineId: 'line6'},
    { timecode: 8300, imgUrl: 'assets/images/passed_03.jpeg' , lineId: 'line7'},
    { timecode: 9300, imgUrl: 'assets/images/identified_01.jpg' , lineId: 'line8'},
    { timecode: 10000, imgUrl: 'assets/images/identified_05.jpg' , lineId: 'line8'},
    { timecode: 11000, imgUrl: 'assets/images/carried_me_away_01.jpg' , lineId: 'line9'},
    { timecode: 11400, imgUrl: 'assets/images/carried_me_away_04.jpg' , lineId: 'line9'},
    { timecode: 12000, imgUrl: 'assets/images/carried_me_away_06.jpg' , lineId: 'line10'},

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
