const HowItWorks = ({title , data}) => {

    return (
  
      <section className="Services section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2>{title}</h2>
                  </div>
                </div>
                {data && data.map((item , key) => (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={key}>
                    <div className="shoping__checkout v2 mt-0">
                      <img src={item.img} className="support-img" alt="" />
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      );
}

export default HowItWorks;