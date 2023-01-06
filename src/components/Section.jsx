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
                <h4>Kreatif Tasarımlar</h4>
                <p>Markanıza ve iletişim stratejilerinize uygun basılı ve dijital tasarımlar yaratıyoruz.</p>
              </div>
              <div className="main-purple-button">
                <a href="kreatif-tasarimlar.html">Okumaya devam et</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img src="img/service-icon-02.png" alt="" />
                </div>
                <h4>Dijital Pazarlama</h4>
                <p>Google, programatik ve sosyal medya reklamları, SEO, E-ticaret gibi dijital pazarlama seçenekleri sunuyoruz. </p>
              </div>
              <div className="main-purple-button">
                <a href="pazarlama-stratejisi.html">Okumaya devam et</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img src="img/service-icon-03.png" alt="" />
                </div>
                <h4>Website Tasarımı</h4>
                <p>Kurumsal, e-ticaret, rezervasyon, kişiye özel ihtiyaca yönelik trendlere uygun web sitesi  </p>
              </div>
              <div className="main-purple-button">
                <a href="web-tasarim.html">Okumaya devam et</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

export default Section

