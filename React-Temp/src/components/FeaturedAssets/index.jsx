import {useEffect} from "react";
import {SortingCard} from '../../utils'

const FeaturedAssets = ({
    ClassSec="featured section-padding-85-0",
    title,
    dataControls,
    FeaturedAssets,
    LoadMoreBtn
  }) => {

    useEffect(() => {
      SortingCard()
    },[])

    return (

      <section className={ClassSec}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>{title}</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  {dataControls && dataControls.map((item , key) => (
                    <li key={key} className={item.Class ? item.Class : " "} data-filter={item.dataFilter}>{item.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            
            {FeaturedAssets && FeaturedAssets.map((item , key) => (
              <div className={`${item.Class} featuredFilterItem`} key={key}>
                <div className="featured__item">
                  <div className="featured__item__pic set-bg" data-setbg={item.dataSetbg} style={{backgroundImage:`url(${item.dataSetbg})`}}>
                    <ul className="featured__item__pic__hover">
                      <li><a href="/shop-details"><i className="fa fa-heart" /></a></li>
                      <li><a href="/shop-details"><i className="fa fa-retweet" /></a></li>
                      <li><a href="/shop-details"><i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="/shop-details">{item.title}</a></h6>
                  </div>
                  <div className="item-details">
                    <div className="item-pri">
                      <h5>{item.itemPri1} <span>{item.itemPri2}</span></h5>
                      <p>{item.itemPri3}</p>
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
          <div className="row">
            <div className="col-sm-12 text-center"><a href="#" className="b-blue-btn load-more">{LoadMoreBtn}</a></div>
          </div>
        </div>
      </section>
    );
}

export default FeaturedAssets;