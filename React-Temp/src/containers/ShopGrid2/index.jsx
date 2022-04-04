import {useEffect} from "react"
import Slider from "react-slick";

import NewAddedAssetsInfo from "../../data/data-containers/ShopGrid2/data-ShopGrid2"

import dataShopGrid2 from "../../data/data-containers/ShopGrid2/data-ShopGrid2.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import ProductSecBegin from '../../components/ProductSecBegin'

import Footer from '../../layouts/Footer'

const ShopGrid2Container = () => {

  useEffect(() => {
    let slickSilde = document.querySelector(".product__discount .slick-list");

    if(slickSilde){
      slickSilde.style.height = "80vh";
    }
  },[])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false
        }
      }
    ]
  };

  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataShopGrid2[0].titleBreadcumb}
        TextUp={dataShopGrid2[0].TextUpBreadcumb}
        TextDown={dataShopGrid2[0].TextDownBreadcumb}
      />
      <section class="product spad">
          <div class="container">
            <div class="row">
              <ProductSecBegin
                DepartTit={dataShopGrid2[0].DepartTit}
                DepartInfo={dataShopGrid2[0].DepartInfo}
                PriceTit={dataShopGrid2[0].PriceTit}
                ColorsTit={dataShopGrid2[0].ColorsTit}
                ColorsInfo={dataShopGrid2[0].ColorsInfo}
                PopularCatTit={dataShopGrid2[0].PopularCatTit}
                PopularCatInfo={dataShopGrid2[0].PopularCatInfo}
              />
              <div className="col-lg-9 col-md-7">
                <div className="product__discount">
                  <div className="section-title product__discount__title">
                    <h2>{dataShopGrid2[0].NewAddedAssetsTit}</h2>
                  </div>
                  <div className="row">
                    <Slider
                      {...settings}
                      className="product__discount__slider col-sm-12">

                      {NewAddedAssetsInfo && NewAddedAssetsInfo.map((item , key) => (
                        <div className="col-lg-4" key={key}>
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

                    </Slider>
                  </div>
                </div>
                <div className="product__pagination text-center">
                  {Array(3).fill().map((_i , key) => (
                      <a href="#">{key + 1}</a>
                  ))}
                  <a href="#"><i className="fa fa-long-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  );
}

export default ShopGrid2Container