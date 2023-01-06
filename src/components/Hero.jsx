import React from 'react'

function Hero() {
  return (
    <div className="main-content">
      <div className="parallax-banner">
        <div className="inner-header">
          <div className="inner-content">
            <h4>Hedeflerinize inanıyoruz, tek ihtiyacınız doğru iş ortağı!</h4>
            <h1>Dijital Pazarlama, Tasarım<br/>&amp; SEO Ajansı</h1>
        
            <div className="main-decoration">
              <img src="img/baner-main-decoration.png" alt=""/>
            </div>
          </div>
        </div>

        {/* <!--Waves Container--> */}
        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g className="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
          </g>
          </svg>
        </div>
        {/* <!--Waves end--> */}
      </div>
    </div>
  )
}

export default Hero