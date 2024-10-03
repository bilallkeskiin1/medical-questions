import React, { useState } from 'react';
import abdomenImage from './images/default-abs.png'; // Abdominal area picture
import umbilicusHighlight from './images/umbilicus-highlight.png'; // Image for center emphasis
import epigastriumHighlight from './images/epigastrium-highlight.png'; // Picture for mid-up (epigastrium) region
import llqHighlight from './images/llq-highlight.png'; // Picture for mid-down region
import rlqHighlight from './images/rlq-highlight.png'; // Image for lower-right region
import luqHighlight from './images/luq-highlight.png'; // Image for upper-right region
import ruqHighlight from './images/ruq-highlight.png'; // Image for upper-left region
import supraHighlight from './images/suprapubic-highlight.png'; // upper-down bölgesi için resim
import ruqActive from './images/ruq-active.png'; // Ekstra resim
import epigastriumActive from './images/epigastrium-active.png'; // Extra picture2
import rlqActive from './images/rlq-active.png'; // Extra picture3
import supraActive from './images/suprapubic-active.png'; // Extra picture4
import umbilicusActive from './images/umbilicus-active.png'; // Extra picture5
import llqActive from './images/llq-active.png'; // Extra picture6
import luqActive from './images/luq-active.png'; // Extra picture7
import allOverHightlight from './images/all-over-highlight.png'

const AbdominalArea = () => {
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [isCenterVisible, setIsCenterVisible] = useState(false);
    const [isMidUpVisible, setIsMidUpVisible] = useState(false);
    const [isMidDownVisible, setIsMidDownVisible] = useState(false);
    const [isLowerRightVisible, setIsLowerRight] = useState(false);
    const [isUpperRightVisible, setIsUpperRight] = useState(false);
    const [isLowerLeftVisible, setIsLowerLeft] = useState(false);
    const [isUpperLeftVisible, setIsUpperLeft] = useState(false);
    const [isUpperDownVisible, setIsUpperDown] = useState(false);
    const [isExtraImageVisible, setIsExtraImageVisible] = useState(false);
    const [isExtra2ImageVisible, setIsExtra2ImageVisible] = useState(false);
    const [isExtra3ImageVisible, setIsExtra3ImageVisible] = useState(false);
    const [isExtra4ImageVisible, setIsExtra4ImageVisible] = useState(false);
    const [isExtra5ImageVisible, setIsExtra5ImageVisible] = useState(false);
    const [isExtra6ImageVisible, setIsExtra6ImageVisible] = useState(false);
    const [isExtra7ImageVisible, setIsExtra7ImageVisible] = useState(false);

    const handleAreaClick = (area) => {
        console.log("Clicked area:", area);

        if (area === 'center') {
            setIsCenterVisible(prev => {
                const newValue = !prev;
                setIsExtra5ImageVisible(newValue); //  manage extra image on click
                return newValue;

            });
        } else if (area === 'mid-up') {
            setIsMidUpVisible(prev => {
                const newValue = !prev;
                setIsExtra2ImageVisible(newValue); //  manage extra image on click
                return newValue;
            });
        } else if (area === 'mid-down') {
            setIsMidDownVisible(prev =>{
                const newValue = !prev;
                setIsExtra6ImageVisible(newValue); //  manage extra image on click
                return newValue;

            });
        } else if (area === 'lower-right') {
            setIsLowerRight(prev => !prev);
        } else if (area === 'lower-left') {

            setIsLowerLeft(prev =>{
                const newValue = !prev;
                setIsExtra3ImageVisible(newValue); // manage extra image on click
                return newValue;

            });

        } else if (area === 'upper-right') {
            setIsUpperRight(prev => {
                const newValue = !prev;
                setIsExtra7ImageVisible(newValue); // manage extra image on click
                return newValue;
            });
        } else if (area === 'upper-left') {
            setIsUpperLeft(prev => {
                const newValue = !prev;
                setIsExtraImageVisible(newValue); // manage extra image on click
                return newValue;
            });
        } else if (area === 'upper-down') {
            setIsUpperDown(prev =>{
                const newValue = !prev;
                setIsExtra4ImageVisible(newValue); // manage extra image on click
                return newValue;
            });
        } else {
            setSelectedAreas(prevSelected => {
                const areaIdentifier = area;
                return prevSelected.includes(areaIdentifier)
                    ? prevSelected.filter(a => a !== areaIdentifier)
                    : [...prevSelected, areaIdentifier];
            });
        }
    };

    const getAreaStyle = (area) => {
        const isSelected = selectedAreas.includes(area);
        return {
            position: 'absolute',
            backgroundColor: isSelected ? 'rgba()' : '',
            width: '5%',
            height: '5%',
            zIndex: 1000,
        };
    };

    const getMidUpStyle = () => {
        return {
            position: 'absolute',
            top: '42%',
            left: '44%',
            width: '9%',
            height: '9%',
            zIndex: 1000,
            backgroundColor: isMidUpVisible ? 'rgba()' : '',
        };
    };

    const getMidDownStyle = () => {
        return {
            position: 'absolute',
            top: '59%',
            left: '54%',
            width: '9%',
            height: '7%',
            zIndex: 1000,
            backgroundColor: isMidDownVisible ? 'rgba()' : '',
        };
    };

    const getLowerRightStyle = () => {
        return {
            position: 'absolute',
            top: '59%',
            left: '54%',
            width: '9%',
            height: '7%',
            zIndex: 1000,
            backgroundColor: isLowerRightVisible ? 'rgba()' : '',
        };
    };

    const getLowerLeftStyle = () => {
        return {
            position: 'absolute',
            top: '59%',
            left: '33%',
            width: '10%',
            height: '7%',
            zIndex: 1000,
            backgroundColor: isLowerLeftVisible ? 'rgba()' : '',
        };
    };

    const getUpperRightStyle = () => {
        return {
            position: 'absolute',
            top: '49%',
            left: '54%',
            width: '9.5%',
            height: '8%',
            zIndex: 1000,
            backgroundColor: isUpperRightVisible ? 'rgba()' : '',
        };
    };

    const getUpperLeftStyle = () => {
        return {
            position: 'absolute',
            top: '50%',
            left: '32.5%',
            width: '11%',
            height: '6%',
            zIndex: 1000,
            backgroundColor: isUpperLeftVisible ? 'rgba()' : '',
        };
    };

    const getUpperDownStyle = () => {
        return {
            position: 'absolute',
            top: '64%',
            left: '44%',
            width: '9%',
            height: '7%',
            zIndex: 1000,
            backgroundColor: isUpperDownVisible ? 'rgba()' : '',
        };
    };

    return (
        <div style={{ position: 'relative', cursor: 'pointer', width: '300px', margin: '0 auto' }}>
            {isCenterVisible && (
                <img
                    src={umbilicusHighlight}
                    alt="Center Highlight"
                    style={{
                        position: 'absolute',
                        top: '5%',
                        left: '0%',
                        width: '100%',
                        height: '100%',
                        zIndex: 100,
                    }}
                />
            )}
             {isExtra5ImageVisible && (
                <img
                    src={umbilicusActive}
                    alt="Ekstra5 Resim"
                    style={{
                        position: 'absolute',
                        top: '9%',
                        left: '0%',
                        width: '100%',
                        transform: 'rotate(12deg)',
                        height: '100%',
                        zIndex: 100,
                    }}
                />
            )}
            {isMidUpVisible && (
                <img
                    src={epigastriumHighlight}
                    alt="Epigastrium Highlight"
                    style={{
                        position: 'absolute',
                        top: '8.8%',
                        left: '2.7%',
                        width: '94.5%',
                        height: '94.5%',
                        zIndex: 100,
                    }}
                />
            )}
             {isExtra2ImageVisible && (
                <img
                    src={epigastriumActive}
                    alt="Ekstra2 Resim"
                    style={{
                        position: 'absolute',
                        top: '9%',
                        left: '-8%',
                        transform: 'rotate(32deg)',
                        width: '100%',
                        height: '100%',
                        zIndex: 100,
                    }}
                />
            )}
            {isMidDownVisible && (
                <img
                    src={llqHighlight}
                    alt="LLQ Highlight"
                    style={{
                        position: 'absolute',
                        top: '7.7%',
                        left: '3.4%',
                        width: '94.4%',
                        height: '94.5%',
                        zIndex: 100,
                    }}
                />
            )}
             {isExtra6ImageVisible && (
                <img
                    src={llqActive}
                    alt="Ekstra6 Resim"
                    style={{
                        position: 'absolute',
                        top: '0%',
                        left: '0%',
                        width: '100%',
                        height: '100%',
                        zIndex: 100,
                    }}
                />
            )}
            {isLowerLeftVisible && (
                <img
                    src={rlqHighlight}
                    alt="RLQ Highlight"
                    style={{
                        position: 'absolute',
                        top: '7.7%',
                        left: '1.4%',
                        width: '96.29%',
                        height: '94.5%',
                        zIndex: 100,
                    }}
                />
            )}
              {isExtra3ImageVisible && (
                <img
                    src={rlqActive}
                    alt="Ekstra3 Resim"
                    style={{
                        position: 'absolute',
                        top: '0%',
                        left: '-3%',
                        width: '100%',
                        height: '100%',
                        zIndex: 100,
                    }}
                />
            )}
            {isUpperRightVisible && (
                <img
                    src={luqHighlight}
                    alt="LUQ Highlight"
                    style={{
                        position: 'absolute',
                        top: '8.2%',
                        left: '1%',
                        width: '98.29%',
                        height: '94.5%',
                        zIndex: 100,
                    }}
                />
            )}
                {isExtra7ImageVisible && (
                <img
                    src={luqActive}
                    alt="Ekstra7 Resim"
                    style={{
                        position: 'absolute',
                        top: '11%',
                        left: '0%',
                        width: '100%',
                        height: '100%',
                        zIndex: 100,
                    }}
                />
            )}
            {isUpperLeftVisible && (
                <img
                    src={ruqHighlight}
                    alt="RUQ Highlight"
                    style={{
                        position: 'absolute',
                        top: '8.2%',
                        left: '0.7%',
                        width: '98.29%',
                        height: '94.5%',
                        zIndex: 100,
                    }}
                />
            )}
            {isExtraImageVisible && (
                <img
                    src={ruqActive}
                    alt="Ekstra Resim"
                    style={{
                        position: 'absolute',
                        top: '12%',
                        left: '-1%',
                        width: '100%',
                        transform: 'rotate(-5deg)',
                        height: '100%',
                        zIndex: 100,
                    }}
                />
            )}
            {isUpperDownVisible && (
                <img
                    src={supraHighlight}
                    alt="Suprapubic Highlight"
                    style={{
                        position: 'absolute',
                        top: '7%',
                        left: '0.79%',
                        width: '98.29%',
                        height: '94.5%',
                        zIndex: 100,
                    }}
                />
            )}
             {isExtra4ImageVisible && (
                <img
                    src={supraActive}
                    alt="Ekstra Resim4"
                    style={{
                        position: 'absolute',
                        top: '4%',
                        left: '0%',
                        transform: 'rotate(-14deg)',   
                        width: '100%',
                        height: '100%',
                        zIndex: 100,
                    }}
                />
            )}

            <h2>Finger Area</h2>
            <img
                src={abdomenImage}
                alt="Karın Bölgesi"
                style={{ width: '100%' }}
            />

            {/* Fixed display image */}
          <img
        src={allOverHightlight}
        alt="Fixed Visual"
        style={{
          position: 'absolute', // Absolute identity to keep the image stable
          top: '12%',            // Location to be determined
          left: '0%',
          width: '100%',        // Width by percentage
          zIndex: 100,          // To appear above other items
        }}
      />

            {/* Clickable areas */}
            <div onClick={() => handleAreaClick('lower-left')} style={getLowerLeftStyle()} />
            <div onClick={() => handleAreaClick('upper-left')} style={getUpperLeftStyle()} />
            <div onClick={() => handleAreaClick('upper-right')} style={getUpperRightStyle()} />
            <div onClick={() => handleAreaClick('lower-right')} style={getLowerRightStyle()} />
            <div onClick={() => handleAreaClick('mid-up')} style={getMidUpStyle()} />
            <div onClick={() => handleAreaClick('mid-down')} style={getMidDownStyle()} />
            <div onClick={() => handleAreaClick('upper-down')} style={getUpperDownStyle()} />
            <div onClick={() => handleAreaClick('center')} style={{ ...getAreaStyle('center'), top: '55%', left: '45%' }} />
        </div>
    );
};

export default AbdominalArea;
