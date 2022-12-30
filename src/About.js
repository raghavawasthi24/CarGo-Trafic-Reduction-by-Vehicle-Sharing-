import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='about'>
        <p>WHY CHOOSE US</p>
        <h2>Why Choose Car Pooling</h2>
        <div className='features'>
          <div className='features_div'>
            <div className='features_num'>
              <p>1</p>
            </div>
            <center><p className='features_txt'>Easy 4-step online booking: search, select, book, enjoy!</p></center>
          </div>
          <div className='features_div'>
          <div className='features_num'>
              <p>2</p>
            </div>
            <center><p className='features_txt'>Award-winning car rental company</p></center>
          </div>
          <div className='features_div'>
          <div className='features_num'>
              <p>3</p>
            </div>
            <center><p className='features_txt'>New, comfortable rental car fleet</p></center>
          </div>
          <div className='features_div'>
          <div className='features_num'>
              <p>4</p>
            </div>
            <center><p className='features_txt'>Daily, weekly, monthly, short and long term car rental</p></center>
          </div>
        </div>
        {/* <div className='features'>
          <div className='features_div'>
            <div><p>1</p></div>
            <p>Easy 4-step online booking: search, select, book, enjoy!</p>
          </div>

      
          <div className='features_div'>
            <div><p>2</p></div>
            <p>Easy 4-step online booking: search, select, book, enjoy!</p>
          </div>
        


          <div className='features_div'>
            <div><p>3</p></div>
            <p>Easy 4-step online booking: search, select, book, enjoy!</p>
          </div>

          <div className='features_div'>
            <div><p>4</p></div>
            <p>Easy 4-step online booking: search, select, book, enjoy!</p>
          </div>
        </div> */}
    </div>
  )
}

export default About