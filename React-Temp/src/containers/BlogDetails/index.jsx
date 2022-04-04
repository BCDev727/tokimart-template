import {BlogDetailsDetailsPic , BlogDetailsUser9} from "../../utils/allImgs"

import {RecentNewsInfo , FromTheBlogInfo} from "../../data/data-containers/BlogDetails/data-BlogDetails"

import dataBlogDetails from "../../data/data-containers/BlogDetails/data-BlogDetails.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import CatAside from '../../components/CatAside'
import FromTheBlog from '../../components/FromTheBlog'

import Footer from '../../layouts/Footer'

const BlogDetailsContainer = () => {
	return(
	    <>
	      <Header Title="Tokimart | Template" />
	      <Breadcumb
	      	addUl={true}
	        title={dataBlogDetails[0].titleBreadcumb}
	        TextUp={dataBlogDetails[0].TextUpBreadcumb}
	        TextMed={dataBlogDetails[0].TextMedBreadcumb}
	        TextDown={dataBlogDetails[0].TextDownBreadcumb}
	      />
	      <section className="blog-details spad">
	        <div className="container">
	          <div className="row">
	            <CatAside
	              data={dataBlogDetails[0]}
	              RecentNews={RecentNewsInfo}
	            />
				<div className="col-lg-8 col-md-7 order-md-1 order-1">
					<div className="blog__details__text">
					  <img src={BlogDetailsDetailsPic} alt="" />
					  <h3>{dataBlogDetails[0].blog__details__textH3}</h3>
					  <p>{dataBlogDetails[0].blog__details__textPUp}</p>
					  <p>{dataBlogDetails[0].blog__details__textPDown}</p>
					</div>
					<div className="blog__details__content">
					  <div className="row">
					    <div className="col-lg-6">
					      <div className="latest-product__text">
					        <div className="top-author">
					          <a href="/profile" className="author-info">
					            <img src={BlogDetailsUser9} className="avatar" alt="" />
					          </a>
					          <div className="item-pri">
					            <h5> {dataBlogDetails[0].itemPriTit}</h5>
					            <p className="papple">{dataBlogDetails[0].itemPriTex}</p>
					          </div>
					        </div>
					      </div>
					    </div>
					    <div className="col-lg-6">
					      <div className="blog__details__widget">
					        <ul>
					          <li><span>{dataBlogDetails[0].Categories}</span> <span className="item-cat">{dataBlogDetails[0].itemCat}</span></li>
					          <li className="cat-list">
					            <span>{dataBlogDetails[0].Tags}</span>
					            {dataBlogDetails[0].catList.map((item , key) => (
					            	<span key={key} className="item-tags">{item.name}</span>
					            ))}
					          </li>
					        </ul>
					        <div className="blog__details__social">
					        	{dataBlogDetails[0].blog__details__social.map((item , key) => (
					        		<a key={key} href="#"><i className={item.name} /></a>
					        	))}
					        </div>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
	          </div>
	        </div>
	      </section>
	      <FromTheBlog
	      	ClassSec="related-blog section-padding-100-70"
	      	title={dataBlogDetails[0].FromTheBlogTit}
	      	FromTheBlogInfo={FromTheBlogInfo}
	      />
	      <Footer />
	    </>
	)
}

export default BlogDetailsContainer