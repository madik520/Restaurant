import React, { useState } from 'react';
import BlogItem from './blog-item';
import { BLOG_ARR } from './sliderArr';


const SliderBlog = () => {
    const [firstSlide, setFirstSlide] = useState(0);
    const [lastSlide, setLastSlide] = useState(3);
    const [counter, setCounter] = useState(0);
    //For adaptive
    const size = document.body.clientWidth;

    const handlePrevClick = () => {
        if(size > 990){
            setFirstSlide(0);
            setLastSlide(3);
        }else if(size > 414){
            counter <= 0 ? setCounter(0) : setCounter(counter - 100);
        }else if(size <= 414){
            counter <= 0 ? setCounter(0) : setCounter(counter - 107);
        }
    };
    const handleNextClick = () => {
        if(size > 990){
            setFirstSlide(3);
            setLastSlide(6);
        }else if(size > 414){
            counter === 100*(BLOG_ARR.length - 1) ? setCounter(0) : setCounter(counter + 100);
        }else if(size <= 414){
            counter === 107*(BLOG_ARR.length - 1) ? setCounter(0) : setCounter(counter + 107);
        }
    }

    return(
        <div className="blog-content">
            <i onClick={handlePrevClick} id="prev-icon" className="fas fa-chevron-left"></i>
            <ul style={{ 'transform': `translate(-${counter}%)` }} className="blog-list">
            {/* adaptive slider for displays larger / smaller than 990px */}
              {size > 990 ? <BlogItem items={BLOG_ARR.slice(firstSlide, lastSlide )} /> : <BlogItem items={BLOG_ARR} />}
            </ul>
            <i onClick={handleNextClick} id="next-icon" className="fas fa-chevron-right"></i>
        </div>
    )
};

export default SliderBlog;