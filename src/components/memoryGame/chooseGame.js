import React from 'react'
import { useHistory } from "react-router-dom";
import './choose.css'
import { Button } from '@material-ui/core';

const Choose = () => {
    let history = useHistory();

    function goToMishkal() {
        history.push('/mishkal')
    }
    function goToCompleteWordsFamily() {
        history.push('/Family')
    }
    function goToHoliday() {
        history.push('/Holiday')
    }
    function goToShabbat() {
        history.push('/Shabbat')
    }
    function goToDownloads() {
        history.push('/Downloads')
    }
    function goToMemoryGame() {
        history.push('/game')
    }
  
    //Downloads
    return (
        <div className="generalDiv">
            <div className="btns">
                <button className="btn" onClick={goToMishkal}>משקל</button>
                <button className="btn" variant="contained" onClick={goToCompleteWordsFamily}>משפחה </button>
                <button className="btn" onClick={goToHoliday}>חגים</button>
                <button className="btn" onClick={goToShabbat}>שבת</button>
                <button className="btn" onClick={goToDownloads}>הדפסות</button>
                <button className="btn" onClick={goToMemoryGame}>משחק הזיכרון</button>

                {/* <button className="btn">Button 6</button> */}
            </div>
        </div>
    )
}

export default Choose;