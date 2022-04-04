import { SlideCountdown } from 'react-fancy-countdown';
import {ShopDetailsProductDetails1} from "../../utils/allImgs"

import {
  latestProduct,
  HistoryInfo,
  LatestBidsInfo
} from "../../data/data-containers/ShopDetails/data-ShopDetails"

import dataShopDetails from "../../data/data-containers/ShopDetails/data-ShopDetails.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'

import Footer from '../../layouts/Footer'

const ShopDetailsContainer = () => {

  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataShopDetails[0].titleBreadcumb}
        TextUp={dataShopDetails[0].TextUpBreadcumb}
        TextDown={dataShopDetails[0].TextDownBreadcumb}
      />
      <section className="product-details section-padding-100-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img className="product__details__pic__item--large" src={ShopDetailsProductDetails1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{dataShopDetails[0].product__details__textTit}</h3>
                <div className="blog__sidebar__item__tags">
                  <p>{dataShopDetails[0].product__details__textItem} <span className="item-tags">{dataShopDetails[0].product__details__textItemTags}</span></p>
                </div>
                <p className="mb-0">{dataShopDetails[0].product__details__textTex}</p>
                <div className="row mt-30">
                  {latestProduct && latestProduct.map((item , key) => (
                    <div className="col-lg-6 col-md-12" key={key}>
                      <div className="latest-product__text">
                        <div className="top-author">
                          <a href={item.path} className="author-info">
                            <img src={item.img} className="avatar" alt="" />
                          </a>
                          <div className="item-pri">
                            <p className="papple">{item.titleUp}</p>
                            {item.removeLink ? <h5>{item.titleDown}</h5> : <a href={item.path}><h5>{item.titleDown}</h5></a>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="offer-btn">{dataShopDetails[0].offerBtnTit}</div>
                <div className="auction-details text-center mb-30">
                  <div className="top-bord" />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="item-detail">
                        <h4 className="bid-title">{dataShopDetails[0].offerBtnBid}</h4>
                        <p className>{dataShopDetails[0].offerBtnTex}</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <input type="text" className="mb-15" placeholder="Your Bid Amount" />
                          </div>
                          <div className="col-lg-12 text-center">
                            <a href="/connect-wallet" className="b-blue-btn">{dataShopDetails[0].offerBtnLink}</a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="auction-details mb-0">
                  <div className="top-bord" />
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="item-detail">
                        <p className="mb-0">{dataShopDetails[0].itemDetailTitUp}</p>
                        <h3 className="mt-15">{dataShopDetails[0].itemDetailTitMed}</h3>
                        <p className="mb-0">{dataShopDetails[0].itemDetailTitDown}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-s auction-start">
                      <p className="mb-0">{dataShopDetails[0].auctionStartTex}</p>
                      <div className="count-down titled circled text-center">
                        <div className="timer-body-block">
                          <SlideCountdown
                            weeks={false}
                            deadline="2030-12-31 14:23:22" />
                        </div>
                      </div>
                    </div>  
                    <div className="col-sm-12"><a href="/login" className="b-blue-btn mt-20">{dataShopDetails[0].itemDetailTitLink}</a></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="blog__sidebar__item mt-30 mb-30">
                      <h4>{dataShopDetails[0].History}</h4>
                      <div className="blog__sidebar__recent">
                        {HistoryInfo && HistoryInfo.map((item , key) => (
                          <div className="blog__sidebar__recent__item" key={key}>
                            <div className="blog__sidebar__recent__item__pic">
                              <img src={item.img} width={75} alt="" />
                            </div>
                            <div className="blog__sidebar__recent__item__text">
                              <h6>{item.titleUp}</h6>
                              <p className={item.titleDownClass}>{item.titleDown}</p>
                              <span>{item.hist}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className=" mt-30 mb-30">
                      <h4 className="latest">{dataShopDetails[0].latest}</h4>
                      {LatestBidsInfo && LatestBidsInfo.map((item , key) => (
                        <div className={item.Class} key={key}>
                          <a href={item.path} className="author-info">
                            <img src={item.img} className="avatar" alt="" />
                          </a>
                          <div className="item-pri">
                            <a href={item.path}><h5>{item.title}</h5></a>
                            <p>{item.time}</p>
                          </div>
                          <div className="item-pri">
                            <a href={item.path}><h5>{item.price}</h5></a>
                            <p>{item.ETH}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ShopDetailsContainer