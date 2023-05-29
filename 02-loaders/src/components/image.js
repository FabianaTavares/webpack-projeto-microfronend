import SoundCloud from '../img/SoundCloud.jpg';

class Image {

  insertSoundCloudImage() {

    const img = document.createElement('img');

    img.src = SoundCloud;
    img.width = 200;

    document.querySelector('body').appendChild(img);
  }
}

export default Image;