import { SlideCountdown } from 'react-fancy-countdown';


const LiveAuctions = ({title , img , LiveAuctionsInfo}) => {

  return (

    <section className="featured  section-padding-100-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>{title} <img src={img} width={33} alt="" /></h2>
            </div>
          </div>
        </div>
        <div className="row" style={{height:"auto"}}>
          
          {LiveAuctionsInfo && LiveAuctionsInfo.map((item , key) => (
            <div className={item.Class} key={key}>
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg={item.dataSetbg} style={{backgroundImage:`url(${item.dataSetbg})`}}>
                </div>
                <div className="count-down titled circled text-center">
                  <div className="timer-body-block">
                    <SlideCountdown
                      weeks={false}
                      deadline="2030-12-31 14:23:22" />
                  </div>
                </div>
                <div className="featured__item__text">
                  <h6><a href="/shop-details">{item.title}</a></h6>
                </div>
                <div className="item-details">
                  <div className="item-pri">
                    <h5>{item.itemPri1} <span>{item.itemPri2}</span></h5>
                    <a href="/shop-details"><p>{item.itemPri3}</p></a>
                  </div>
                  <div className="impressions">
                    <i className="fa fa-heart-o" />{item.impressionsNum}
                  </div>
                </div>
                <div className="author-details">
                  <a href="/profile" className="author-info">
                    <img src={item.img} className="avatar" alt="" />
                    <p>{item.detailsName}</p>
                  </a>
                  <div className="author-rate">
                    <i className="fa fa-star star-icon" />{item.rate}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );

}

export default LiveAuctions