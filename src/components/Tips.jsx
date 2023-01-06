import React from 'react'

function Tips() {
  return (
    <section className="good-tips">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h6>Başarıya ulaşmanızda ki temel adımlar.</h6>
                <h2>GOADWAY NASIL ÇALIŞIR?</h2>
              </div>
              <div className="tips-content">
                <ul>
                  <li>
                    <div className="icon">
                      <img src="../public/images/service-icon-01.png" alt="" />
                    </div>
                    <div className="right-content">
                      <h4>ANALİZ ET </h4>
                      <p>Müşterilerimizin hedeflerini ve beklentilerini dinliyoruz, mevcut durumlarını analiz edip ihtiyaclarını belirliyoruz.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="../public/images/service-icon-02.png" alt="" />
                    </div>
                    <div className="right-content">
                      <h4>STRATEJİ OLUŞTUR</h4>
                      <p>Müşterilerimizin hedefleri doğrultusunda verdiği briefler ile dijital pazarlama stratejilerini oluşturuyoruz.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="../public/images/service-icon-03.png" alt="" />
                    </div>
                    <div className="right-content">
                      <h4>UYGULA</h4>
                      <p>Planladığımız dijital pazarlama stratejilerini belirlediğimiz kanallarda uyguluyoruz ve anlık optimizasyonlar ile tüm süreci yönetiyoruz.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-image">
                <img src="../public/images/good-tips-right-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Tips