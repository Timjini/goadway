import React from 'react'

function ServiceCards() {
  return (
    <section className="seo-courses related-products" id="mobile-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>Hizmetlerimiz</h6>
                <h2>Neler Yapıyoruz?</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-purple-button">
                <a href="hizmetler.html">Tüm hizmetleri görüntüleyin</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-courses owl-carousel owl-loaded owl-drag">
                 
              <div className="owl-stage-outer">
                <div className="owl-stage" >
                <div className="owl-item cloned" >
                    <div className="item">
                  <div className="course-item">
                    <a href="pazarlama-stratejisi.html">
                      <div className="course-thumb">
                        <img src="images/pazarlama-stratejisi-goadway-cover.jpg" alt=""/>
                      </div>
                      <div className="down-content">
                        <h4>Pazarlama stratejisi</h4>
                        <p>Ürünlerinizi tanıtmak ve satışını yapmak için hedef kitlenizi, kanallarınızı ve stratejilerinizi belirleyin! </p>
                      </div>
                    </a>
                  </div>
                </div>
            </div>
                
            <div className="owl-item cloned" >
                <div className="item">
                  <div className="course-item">
                    <a href="sosyal-medya-reklamlari.html">
                      <div className="course-thumb">
                        {/* <img src="images/sosyal-medya-reklamları-goadway-cover.jpg" alt="" /> */}
                      </div>
                      <div className="down-content">
                        <h4>Sosyal medya reklamları</h4>
                        <p>Arama ağı, görüntülü ve video reklamlar vererek marka bilinirliğinizi ve satışlarınızı arttırın!</p>
                      </div>
                    </a>
                  </div>
                </div></div><div className="owl-item cloned" >
                    <div className="item">
                  <div className="course-item">
                    <a href="seo.html">
                      <div className="course-thumb">
                        <img src="images/seo-cover-goadway.jpg" alt="" />
                      </div>
                      <div className="down-content">
                        <h4>SEO</h4>
                        <p>Google arama motorunda web sitenizi organik olarak üst sıralara çıkarın!<br/><br/></p>
                      </div>
                    </a>
                  </div>
                </div></div><div className="owl-item cloned" >
                    <div className="item">
                  <div className="course-item">
                    <a href="google-reklamlari.html">
                      <div className="course-thumb">
                        {/* <img src="images/google-reklam-cover-goadway.jpg" alt="" /> */}
                      </div>
                      <div className="down-content">
                        <h4>Google Reklamları</h4>
                        <p>Arama ağı, görüntülü ve video reklamlar vererek marka bilinirliğinizi ve satışlarınızı arttırın!</p>
                      </div>
                    </a>
                  </div>
                </div></div><div className="owl-item active">
                    <div className="item">
                  <div className="course-item">
                    <a href="sosyal-medya-yonetimi.html">
                      <div className="course-thumb">
                        {/* <img src="images/sosyal-medya-yönetimi-goadway-cover.jpg" alt="" /> */}
                      </div>
                      <div className="down-content">
                        <h4>Sosyal medya yönetimi</h4>
                        <p>Sosyal medya kanallarımızda içerikler üretip, takipçileriniz ile etkileşimleri arttırıyoruz.</p>
                      </div>
                    </a>
                  </div>
                </div></div>
               
                </div></div></div></div>
            </div>
          </div>
      </section>
  )
}

export default ServiceCards