//const button = document.querySelector('button');

function setImagesInTime() {
  const images =
  [
    { timecode: 1000, imgUrl: 'assets/images/my-life_01.png' },
    { timecode: 2000, imgUrl: 'assets/images/my-life_02.jpeg' },
    { timecode: 3000, imgUrl: 'assets/images/my-life_03.jpg' },
    { timecode: 4000, imgUrl: 'assets/images/my-life_04.jpg' },
  ]

  for (const image of images) {
    window.setTimeout(function() {
      setImageInTime(image)
    }, image.timecode)
  }
}

function setImageInTime(image) {
  const para = document.querySelector('p');
  para.innerHTML = '<img src="' + image.imgUrl + '">';
}

function playAudio() {
  const audio = document.querySelector('audio')
  audio.addEventListener('play', setImagesInTime);
}

function showImages(){
  const para = document.querySelector('p');
  para.innerHTML = setImageInTime;
}

const audio = document.querySelector('audio')
audio.addEventListener('play', setImagesInTime);

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
