const HeroSec = ({data , dataSetbg}) => {

    return (
      <>
        {data && data.map((item , key) => (
          <section key={key} className="hero hero-normal set-bg" data-setbg={dataSetbg} style={{backgroundImage:`url(${dataSetbg})`}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hero__item">
                    <div className="col-xl-6 col-lg-7 col-md-12">
                      <div className="hero__text">
                        <span className="offer-span">{item.offerSpan}</span>
                        <h2>{item.title} <span className="hero-span"> {item.heroSpan}</span> </h2>
                        <p>{item.text}</p>
                        <a href="#" className="primary-btn">{item.ShopBtn}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </>
    );

}

export default HeroSec