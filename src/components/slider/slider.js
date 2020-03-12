import React, { useState } from 'react';
import { SLIDES } from './slider-arr';


const Slider = () => {
    const [ counter, setCounter ] = useState(0);

    const handleNextClick = () => {
        const size = document.body.clientWidth;
        if(size >= 1920){
            counter >= 80 ? setCounter(0) : setCounter(counter + 20);
        }else if(size >= 1280){
            counter >= 160 ? setCounter(0) : setCounter(counter + 40);
        }else if(size >= 1024){
            counter >= 300 ? setCounter(0) : setCounter(counter + 50);
        }else if(size >= 768){
            counter >= 400 ? setCounter(0) : setCounter(counter + 50);
        }else if(size >= 520){
            counter >= 80*(SLIDES.length - 1) ? setCounter(0) : setCounter(counter + 80);
        }else if(size <= 414){
            counter >= 99*(SLIDES.length - 1) ? setCounter(0) : setCounter(counter + 99);
        }
    }
    const handlePrevClick = () => {
        const size = document.body.clientWidth;
        if(size >= 1920){
            counter <= 0 ? setCounter(0) : setCounter(counter - 20);
        }else if(size >= 1280){
            counter <= 0 ? setCounter(0) : setCounter(counter - 40);
        }else if(size >= 1024){
            counter <= 0 ? setCounter(0) : setCounter(counter - 50);
        }else if(size >= 768){
            counter <= 0 ? setCounter(0) : setCounter(counter - 50);
        }else if(size >= 520){
            counter <= 0 ? setCounter(0) : setCounter(counter - 80);
        }else if(size <= 414){
            counter <= 0 ? setCounter(0) : setCounter(counter - 99);
        }
    }
    
    return (
        <div className="Slider">
            <button onClick={handlePrevClick} className="btn-prev"><i className="fas fa-arrow-left"></i></button>
            <ul style={{ 'transform': `translate(-${counter}%)` }}>
                { SLIDES.map(({ id, classText, text, newPrice, lastPrice, img }) => {
                    return <li key={id} id={id}>
                        <div style={{'backgroundImage': `url(${img})`}} className={classText}></div>
                        <h1>{text}</h1>
                        <p>{newPrice}<span>{lastPrice}</span></p>
                    </li>
                }) }
            </ul>
            <button onClick={handleNextClick} className="btn-next"><i className="fas fa-arrow-right"></i></button>
        </div>
    )
};

export default Slider;