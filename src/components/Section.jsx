import React from 'react';

function Section() {
  return (
    <section className="features pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img src='img/service-icon-01.png' alt="" />
                </div>
                <h4>Reach & Awarness</h4>
                <p>Seo, blogging and other organic marketing channels to boost your traffic.</p>
              </div>
              <div className="main-purple-button">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img src="img/service-icon-02.png" alt="" />
                </div>
                <h4>Planning</h4>
                <p>Choosing the strategy that fits your business model is a hustle...</p>
              </div>
              <div className="main-purple-button">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img src="img/service-icon-03.png" alt="" />
                </div>
                <h4>Analytics</h4>
                <p>Set up the right tools to follow your business growth closley, latest Online Marketing tools</p>
              </div>
              <div className="main-purple-button">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

export default Section

