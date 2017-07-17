const button = document.querySelector('button');

function showImages(){
  const para = document.querySelector('p');
  const images =
  [
    { timecode: 1000, imgUrl: 'assets/images/my-life_01.png' },
    { timecode: 2000, imgUrl: 'assets/images/my-life_02.jpeg' },
    { timecode: 3000, imgUrl: 'assets/images/my-life_03.jpg' },
    { timecode: 4000, imgUrl: 'assets/images/my-life_04.jpg' },
  ]
  para.innerHTML = 'images';
}

button.addEventListener('click', showImages);



/*

function setImageInTime() {

  }

  for (const image of images)

  {
    window.setTimeout(image.timecode, setImageInTime)
  }
}

document.getElementById('play-btn').addEventListener('click', play)


HTMLAudioElement

*/
