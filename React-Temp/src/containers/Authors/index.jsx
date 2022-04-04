import data from "../../data/data-containers/Authors/data-Authors"

import dataAuthors from "../../data/data-containers/Authors/data-Authors.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import Footer from '../../layouts/Footer'

const AuthorsContainer = () => {

  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataAuthors[0].titleBreadcumb}
        TextUp={dataAuthors[0].TextUpBreadcumb}
        TextDown={dataAuthors[0].TextDownBreadcumb}
      />
      <section className="featured section-padding-100">
          <div className="container">
              <div className="row">
                {data && data.map((item , key) => (
                  <div className="col-lg-4 col-md-6" key={key}>
                      <div className="checkout__order">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="blog__details__author">
                                      <div className="blog__details__author__pic">
                                          <img src={item.img} alt="" />
                                      </div>
                                      <div className="blog__details__author__text">
                                          <h6>{item.title}</h6>
                                          <a href={item.path} className="author-link">{item.authorLink}</a>
                                      </div>
                                  </div>
                                  <div className="clearfix"></div>
                                  <p className="mt-20">{item.text}</p>
                              </div>
                          </div>
                          <div className="checkout__order__subtotal">{item.Followers} <span>{item.nums}</span></div>
                          <button type="submit" className="site-btn">{item.Follow}</button>
                      </div>
                  </div>
                ))}
                <div className="col-lg-12 text-center">
                    <div className="product__pagination blog__pagination">
                        {Array(3).fill().map((_i , key) => (
                          <a key={key} href="#">{key + 1}</a>
                        ))}
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
              </div>
          </div>
      </section>
      <Footer />
    </>
  );
}

export default AuthorsContainer