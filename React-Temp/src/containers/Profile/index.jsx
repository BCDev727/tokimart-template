import {useEffect} from "react";
import {SortingCard} from '../../utils'

import {ProfileDetailsAuthor} from "../../utils/allImgs"

import data from "../../data/data-containers/Profile/data-Profile"

import dataProfile from "../../data/data-containers/Profile/data-Profile.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'

import Footer from '../../layouts/Footer'

const ProfileContainer = () => {

  useEffect(() => {
    SortingCard()
  },[])

  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataProfile[0].titleBreadcumb}
        TextUp={dataProfile[0].TextUpBreadcumb}
        TextDown={dataProfile[0].TextDownBreadcumb}
      />
      <section className="featured section-padding-100-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="checkout__order">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog__details__author">
                      <div className="blog__details__author__pic">
                        <img src={ProfileDetailsAuthor} alt="" />
                      </div>
                      <div className="blog__details__author__text">
                        <h6>{dataProfile[0].blog__details__author__textTex}</h6>
                        <span>{dataProfile[0].blog__details__author__textTit }<img src="img/fire.png" alt="" width={16} /></span>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <p className="mt-20">{dataProfile[0].checkout__orderTex}</p>
                    <div className="blog__details__widget">
                      <div className="blog__details__social">
                        {dataProfile[0].blog__details__social.map((item , key) => (
                          <a key={key} href="#"><i className={item.name} /></a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="blog__sidebar__search mt-30">
                      <form action="#">
                        <input type="text" placeholder="oxhjd-dakjdkla-eyieie" />
                        <button type="submit"><i className="fa fa-copy" /></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="checkout__order__products">{dataProfile[0].Earning} <span>{dataProfile[0].ETH}</span></div>
                <div className="checkout__order__subtotal">{dataProfile[0].Followers} <span>{dataProfile[0].num}</span></div>
                <button type="submit" className="site-btn">{dataProfile[0].Follow}</button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="featured__controls">
                <ul>
                  {dataProfile[0].featured__controls && dataProfile[0].featured__controls.map((item , key) => (
                    <li key={key} className={item.Class ? item.Class : " "} data-filter={item.dataFilter}>{item.title}</li>
                  ))}
                </ul>
              </div>
              <div className="row featured__filter">
                {data && data.map((item , key) => (
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
                          <i className="blue">{item.impressionsNum}</i>ETH
                        </div>
                      </div>
                      <div className="author-details">
                        <div className="author-info v2">
                          <img src={item.img1} className="avatar" alt="" />
                          <img src={item.img2} className="avatar stack" alt="" />
                          <img src={item.img3} className="avatar stack" alt="" />
                          <p>{item.detailsName}</p>
                        </div>
                        <div className="author-rate">
                          <img src={item.img4} className="mr-5p" width={20} alt="" />{item.NewBid}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProfileContainer