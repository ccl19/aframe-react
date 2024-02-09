import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render () {
    return (
      <Scene>
        <a-assets>
          {/* Add any assets needed for the streaming video here */}
        </a-assets>

        {/* Replace existing entities with a-videosphere for streaming */}
        <Entity>
          <a-videosphere src="https://video.360cities.net/storyandmorecom/01669269_Pyramids-Aerial-360-VR-Stock-video-Footage-at-Egypt-Ancient-pharaonic-video-footage-ID2-3-1920x960.mp4"></a-videosphere>
        </Entity>

        {/* Optional camera rig */}
        <Entity position="0 0 0">
          <a-camera></a-camera>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
