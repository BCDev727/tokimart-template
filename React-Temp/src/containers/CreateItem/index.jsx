
import {CreateItemFeature1 , CreateItemUser1} from "../../utils/allImgs"


import dataCreateItem from "../../data/data-containers/CreateItem/data-CreateItem.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'

import Footer from '../../layouts/Footer'

const CreateItemContainer = () => {
	return(
	    <>
			<Header Title="Tokimart | Template" />
			<Breadcumb
				title={dataCreateItem[0].titleBreadcumb}
				TextUp={dataCreateItem[0].TextUpBreadcumb}
				TextMed={dataCreateItem[0].TextMedBreadcumb}
				TextDown={dataCreateItem[0].TextDownBreadcumb}
			/>
			<section className="checkout section-padding-100">
				<div className="container">
				  <div className="checkout__form">
				    <h4>{dataCreateItem[0].checkout__formTit}</h4>
				    <form action="#">
				      <div className="row">
				        <div className="col-lg-8 col-md-6">
				          <div className="row">
				            <div className="col-lg-12">
				              <div className="checkout__input">
				                <p>{dataCreateItem[0].checkout__inputTit}<span>*</span></p>
				                <div className="upload-div">
				                  <p>{dataCreateItem[0].checkout__inputTex}</p>
				                  <a href="#" className="b-blue-btn load-more">{dataCreateItem[0].checkout__inputBtn}</a>
				                </div>
				              </div>
				            </div>
				            <div className="col-lg-12">
				              <div className="checkout__input">
				                <p>{dataCreateItem[0].ItemCategory}<span>*</span></p>
				                <div className="blog__sidebar__item__tags">
				                	{dataCreateItem[0].blog__sidebar__item__tags.map((item , key) => (
				                		<a key={key} href="#">{item.name}</a>
				                	))}
				                </div>
				              </div>
				            </div>
				            <div className="col-lg-12">
				              <div className="checkout__input mt-20">
				                <p>{dataCreateItem[0].inputTit}<span>*</span></p>
				                <input type="text" placeholder="e.g. Redeemable T-Shirt with logo" />
				              </div>
				            </div>
				            <div className="col-lg-12">
				              <div className="checkout__input mt-30">
				                <p>{dataCreateItem[0].inputDesc}<span>*</span></p>
				                <textarea rows={7} placeholder="e. g. After purchasing you’ll be able to get the real T-Shirt" defaultValue={""} />
				              </div>
				            </div>
				          </div>
				          <div className="checkout__input">
				            <p>{dataCreateItem[0].inputPrice}<span>*</span></p>
				            <input type="text" placeholder="Current ETH price: 1 ETH = $1691.64" />
				          </div>
				          <div className="row">
				            <div className="col-lg-6">
				              <div className="checkout__input mt-30">
				                <p>{dataCreateItem[0].inputRoyal}<span>*</span></p>
				                <input type="text" placeholder="Suggested: 0%, 10%, 20%, 30%" />
				              </div>
				            </div>
				            <div className="col-lg-6">
				              <div className="checkout__input mt-30">
				                <p>{dataCreateItem[0].inputNum}<span>*</span></p>
				                <input type="text" placeholder="Amount of tokens" />
				              </div>
				            </div>
				          </div>
				          <button type="submit" className="site-btn mt-30">{dataCreateItem[0].btnList}</button>
				        </div>
				        <div className="col-lg-4 col-md-6">
				          <div className="checkout__order mt-s">
				            <h4>{dataCreateItem[0].ItemPreview}</h4>
				            <div className="featured__item">
				              <div className="featured__item__pic set-bg" data-setbg={CreateItemFeature1} style={{backgroundImage: `url(${CreateItemFeature1})`}}>
				              </div>
				              <div className="featured__item__text">
				                <h6><a href="/shop-details">{dataCreateItem[0].featured__item__text}</a></h6>
				              </div>
				              <div className="item-details">
				                <div className="item-pri">
				                  <h5>{dataCreateItem[0].itemPri1} <span>{dataCreateItem[0].itemPri2}</span></h5>
				                  <p>{dataCreateItem[0].itemPri3}</p>
				                </div>
				                <div className="impressions">
				                  <i className="fa fa-heart-o" />{dataCreateItem[0].impressionsNum}
				                </div>
				              </div>
				              <div className="author-details">
				                <div className="author-info">
				                  <img src={CreateItemUser1} className="avatar" alt="" />
				                  <p>{dataCreateItem[0].authorDetailsName}</p>
				                </div>
				                <div className="author-rate">
				                  <i className="fa fa-star star-icon" />{dataCreateItem[0].rate}
				                </div>
				              </div>
				            </div>
				            <button type="submit" className="site-btn">{dataCreateItem[0].btnEdit}</button>
				          </div>
				        </div>
				      </div>
				    </form>
				  </div>
				</div>
			</section>
			<Footer
				Copyright={true}
			/>
	    </>
	)
}

export default CreateItemContainer