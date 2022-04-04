import {shopingCheckout} from "../../data/data-containers/HelpCenter/data-HelpCenter"

import dataHelpCenter from "../../data/data-containers/HelpCenter/data-HelpCenter.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
// import CatAside from '../../components/CatAside'
// import FromTheBlog from '../../components/FromTheBlog'

import Footer from '../../layouts/Footer'

const HelpCenterContainer = () => {
	return(
	    <>
	      <Header addDepartments={true} Title="Tokimart | Template" />
	      <Breadcumb
	        title={dataHelpCenter[0].titleBreadcumb}
	        TextUp={dataHelpCenter[0].TextUpBreadcumb}
	        TextMed={dataHelpCenter[0].TextMedBreadcumb}
	        TextDown={dataHelpCenter[0].TextDownBreadcumb}
	      />
	      <section className="blog section-padding-100-70">
	        <div className="container">
	          <div className="row">
	            <div className="col-lg-12">
	            	<div className="row">
	            		{shopingCheckout && shopingCheckout.map((item , key) => (
	                        <div className="col-lg-3 col-md-6 col-sm-12" key={key}>
	                            <div className="shoping__checkout mt-0">
	                                <img src={item.img} className="support-img" alt=""/>
	                                <h5>{item.title}</h5>
	                                <p>{item.text}</p>
	                                <a href="#" className="primary-btn">{item.submit}</a>
	                            </div>
	                        </div>
	            		))}
                        <div className="col-lg-12 section-padding-70-0">
                            <div className="section-title">
                                <h2>{dataHelpCenter[0].MostAskedFAQ}</h2>
                            </div>
                        </div>
                        {dataHelpCenter[0].faqItem && dataHelpCenter[0].faqItem.map((item , key) => (
	                        <div className="col-lg-6 col-md-6 col-sm-12" key={key}>
	                            <div className="faq-item">
	                                <h4>{item.title}</h4>
	                                <div className="faq-text">
	                                    <p>{item.text} </p>
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
	)
}

export default HelpCenterContainer