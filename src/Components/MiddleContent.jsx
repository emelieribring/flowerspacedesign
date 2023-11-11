import React from 'react';
import '../Styles/Middle.css'; 
import productIcon from '../Images/productIcon.png';


function Content() {

  const playVideo = (event) => {
    const video = event.target;
    video.currentTime = 0; // Återställ tiden till början
    video.play();
  };

  return (
    <div className='wrapperMiddle'>
      <div className='arrowDiv'>
        <div className='left'></div>
        <div className='right'></div>
      </div>
      <div className='product'>
        <video
          src={require('../Videos/bgMovie.mp4')}
          type='video/mp4'
          loop={false}
          autoPlay={false}
          onMouseOver={playVideo}>
        </video>
        <p className='number'>01</p>
        <div className='iconDiv'>
          <img className='productIcon' src={productIcon} alt="productIcon" />
        </div>
        <p className='heading'>Product</p>
        <p className='underText'>Watch video</p>
        <p className='hoverText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque, 
          dolorum et qui totam necessitatibus deleniti excepturi eaque rem ea 
          mollitia illum cumque temporibus saepe soluta autem nam eos corporis.
        </p>
        <div className='hoverBtn'>
          <button>Lern More</button>
          <div className='iconPlay'></div>
        </div>
      </div>
      <div className='performance'>
        <video
          src={require('../Videos/bgMovieTwo.mp4')}
          type='video/mp4'
          loop={false}
          autoPlay={false}
          onMouseOver={playVideo}>
        </video>
        <p className='number'>02</p>
        <div className='iconDiv'>
          <img className='productIcon' src={productIcon} alt="productIcon" />
        </div>
        <p className='heading'>Preformance</p>
        <p className='underText'>Our Results</p>
        <p className='hoverText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque, 
          dolorum et qui totam necessitatibus deleniti excepturi eaque rem ea 
          mollitia illum cumque temporibus saepe soluta autem nam eos corporis.
        </p>
        <div className='hoverBtn'>
          <button>Lern More</button>
          <div className='iconPlay'></div>
        </div>
      </div>
      <div className='media'>
        <video
          src={require('../Videos/bgMovieThree.mp4')}
          type='video/mp4'
          loop={false}
          autoPlay={false}
          onMouseOver={playVideo}>
        </video>
        <p className='number'>03</p>
        <div className='iconDiv'>
          <img className='productIcon' src={productIcon} alt="productIcon" />
        </div>
        <p className='heading'>Media</p>
        <p className='underText'>Show more</p>
        <p className='hoverText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque, 
          dolorum et qui totam necessitatibus deleniti excepturi eaque rem ea 
          mollitia illum cumque temporibus saepe soluta autem nam eos corporis.
        </p>
        <div className='hoverBtn'>
          <button>Lern More</button>
          <div className='iconPlay'></div>
        </div>
      </div>
      <div className='pre-order'>
        <video
          src={require('../Videos/bgMovieFour.mp4')}
          type='video/mp4'
          loop={false}
          autoPlay={false}
          onMouseOver={playVideo}>
        </video>
        <p className='number'>04</p>
        <div className='iconDiv'>
          <img className='productIcon' src={productIcon} alt="productIcon" />
        </div>
        <p className='heading'>Pre-Order</p>
        <p className='underText'>Don't miss out</p>
        <p className='hoverText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque, 
          dolorum et qui totam necessitatibus deleniti excepturi eaque rem ea 
          mollitia illum cumque temporibus saepe soluta autem nam eos corporis.
        </p>
        <div className='hoverBtn'>
          <button>Lern More</button>
          <div className='iconPlay'></div>
        </div>
      </div>
    </div>
  );
}

export default Content;