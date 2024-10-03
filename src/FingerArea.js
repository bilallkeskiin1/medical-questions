import React, { useState } from 'react';
import fingerDefault from './images/default-finger.png';        // Default finger image
import fingerHighlighted1 from './images/pip-highlight.png';    // Highlighted finger image 1
import fingerHighlighted2 from './images/mcp-highlight.png';    // Highlighted finger image 2
import fingerHighlighted3 from './images/dip-highlight.png';    // Highlighted finger image 3
import otherHighlight from './images/others-highlight.png'

import fingerSecondImage1 from './images/pip-active.png';       // Second picture for finger 1
import fingerSecondImage2 from './images/mcp-active.png';       // Second picture for finger 2
import fingerSecondImage3 from './images/dip-active.png';       // Second picture for finger 3
import './App.css';

const FingerArea = () => {
  const [selectedFingers, setSelectedFingers] = useState({
    finger1: false,
    finger2: false,
    finger3: false,
  });

  const handleFingerClick = (finger) => {
    setSelectedFingers((prevState) => {
      const newState = {
        ...prevState,
        [finger]: !prevState[finger],
      };
      console.log("SelectedFingers:", newState); // Print status in console
      return newState;
    });
  };

  return (
    <div className="finger-area" style={{ position: 'relative', width: '300px', cursor: 'pointer', textAlign: 'center' }}>
      <h2>Finger Area</h2>

      <img
        src={fingerDefault}
        alt="Parmak Bölgesi"
        style={{ width: '100%' }}
      />

      {/* Parmak 1 */}
      {selectedFingers.finger1 && (
        <>
          <img
            src={fingerHighlighted1}
            alt="Highlighted Finger 1"
            style={{
              position: 'absolute',
              top: '11.5%',
              left: '0%',
              width: '100%',
              zIndex: 1000,
            }}
          />
          <img
            src={fingerSecondImage1}
            alt="SecondImageFinger 1"
            style={{
              position: 'absolute',
              top: '13%',
              left: '0%',
              width: '100%',
              zIndex: 3000,
            }}
          />
        </>
      )}

      {/* Parmak 2 */}
      {selectedFingers.finger2 && (
        <>
          <img
            src={fingerHighlighted2}
            alt="HighlightedFinger2"
            style={{
              position: 'absolute',
              top: '11.5%',
              left: '0%',
              width: '100%',
              zIndex: 1000,
            }}
          />
          <img
            src={fingerSecondImage2}
            alt="SecondImageFinger2"
            style={{
              position: 'absolute',
              top: '14%',
              left: '0%',
              width: '100%',
              zIndex: 3000,
            }}
          />
        </>
      )}

      {/* Parmak 3 */}
      {selectedFingers.finger3 && (
        <>
          <img
            src={fingerHighlighted3}
            alt="HighlightedFinger3"
            style={{
              position: 'absolute',
              top: '11.5%',
              left: '0%',
              width: '100%',
              zIndex: 5000,
            }}
          />
          <img
            src={fingerSecondImage3}
            alt="SecondImageFinger3"
            style={{
              position: 'absolute',
              top: '12%',
              left: '0%',
              width: '100%',
              zIndex: 5000,
            }}
          />
        </>
      )}

      {/* Tıklanabilir parmak alanları */}
      <div
        onClick={() => handleFingerClick('finger1')}
        style={{
          position: 'absolute',
          top: '31%',
          left: '22%',
          width: '40%',
          height: '29px',
          transform: 'rotate(-24deg)',
          zIndex: 5000,
        }}
      />
      <div
        onClick={() => handleFingerClick('finger2')}
        style={{
          position: 'absolute',
          top: '43%',
          left: '25%',
          width: '38%',
          height: '25px',
          zIndex: 5000,
        }}
      />
      <div
        onClick={() => handleFingerClick('finger3')}
        style={{
          position: 'absolute',
          top: '22%',
          left: '12%',
          width: '56%',
          height: '32px',
          transform: 'rotate(-23deg)',
          zIndex: 5000,
        }}
      />
          {/* Fixed display image */}
          <img
        src={otherHighlight}
        alt="Fixed Visual"
        style={{
          position: 'absolute', // Absolute positioning to keep the image stable
          top: '12%',            // Location to be determined
          left: '0%',
          width: '100%',        // Width by percentage
          zIndex: 4000,          // To appear above other items
        }}
      />
    </div>
  );
};

export default FingerArea;
