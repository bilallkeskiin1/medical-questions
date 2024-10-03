import React, { useState } from 'react';
import AbdominalArea from './AbdominalArea';
import FingerArea from './FingerArea';

const PainSelection = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="pain-selection">
      <h1>Select Area of ​​Pain</h1>
      <div className="buttons">
        <button onClick={() => setSelectedArea('abdomen')}>Abdominal Area</button>
        <button onClick={() => setSelectedArea('finger')}>Finger Area</button>
      </div>
      <div className="selected-area">
        {selectedArea === 'abdomen' && <AbdominalArea />}
        {selectedArea === 'finger' && <FingerArea />}
      </div>
    </div>
  );
};

export default PainSelection;
