import {useEffect} from "react"
import NewAddedAssetsInfo from "../../data/data-containers/ShopGrid3/data-ShopGrid3"

import dataShopGrid3 from "../../data/data-containers/ShopGrid3/data-ShopGrid3.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import ProductSecBegin from '../../components/ProductSecBegin'

import Footer from '../../layouts/Footer'

const ShopGrid3Container = () => {


  useEffect(() => {
    let listSelect = document.querySelector(".filter__sort .list");

    if(listSelect){
      listSelect.style.backgroundColor = "#fff";
      listSelect.style.border = "none";
      listSelect.style.color = "#13238f";
    }
  },[])



  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataShopGrid3[0].titleBreadcumb}
        TextUp={dataShopGrid3[0].TextUpBreadcumb}
        TextDown={dataShopGrid3[0].TextDownBreadcumb}
      />
      <section class="product spad">
          <div class="container">
            <div class="row">
              <ProductSecBegin
                DepartTit={dataShopGrid3[0].DepartTit}
                DepartInfo={dataShopGrid3[0].DepartInfo}
                PriceTit={dataShopGrid3[0].PriceTit}
                ColorsTit={dataShopGrid3[0].ColorsTit}
                ColorsInfo={dataShopGrid3[0].ColorsInfo}
                PopularCatTit={dataShopGrid3[0].PopularCatTit}
                PopularCatInfo={dataShopGrid3[0].PopularCatInfo}
              />
              <div className="col-lg-9 col-md-7">
                <div className="filter__item">
                  <div className="row">
                    <div className="col-lg-4 col-md-5">
                      <div className="filter__sort">
{/*                        <span className="current">{dataShopGrid3[0].filter__sortTit}</span>
                        <select className="list">
                          <option value={0} className="option selected focus">{dataShopGrid3[0].Default}</option>
                          <option value={0} className="option">{dataShopGrid3[0].Default}</option>
                        </select>*/}
                        <span className="current mr-4">{dataShopGrid3[0].filter__sortTit}</span>
                        <select className="list">
                          <option value={0} className="option selected focus">{dataShopGrid3[0].Default}</option>
                          <option value={0} className="option">{dataShopGrid3[0].Default}</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="filter__found">
                        <h6><span>{dataShopGrid3[0].filter__foundNum}</span>{dataShopGrid3[0].filter__foundTit}</h6>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3">
                      <div className="filter__option">
                        <span className="icon_grid-2x2" />
                        <span className="icon_ul" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">

                  {NewAddedAssetsInfo && NewAddedAssetsInfo.map((item , key) => (
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12" key={key}>
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

export default ShopGrid3Container