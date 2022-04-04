import {RecentNewsInfo , BlogDownInfo} from "../../data/data-containers/Blog/data-Blog"

import dataBlog from "../../data/data-containers/Blog/data-Blog.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import CatAside from '../../components/CatAside'

import Footer from '../../layouts/Footer'

const BlogContainer = () => {

  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataBlog[0].titleBreadcumb}
        TextUp={dataBlog[0].TextUpBreadcumb}
        TextDown={dataBlog[0].TextDownBreadcumb}
      />
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <CatAside
              data={dataBlog[0]}
              RecentNews={RecentNewsInfo}
            />
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {BlogDownInfo.map((item , key) => (
                  <div className="col-lg-6 col-md-6 col-sm-6" key={key}>
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li><i className="fa fa-calendar-o" /> {item.hist}</li>
                          <li><i className="fa fa-comment-o" /> {item.num}</li>
                        </ul>
                        <h5><a href={item.path}>{item.title}</a></h5>
                        <p>{item.text} </p>
                        <a href={item.path} className="blog__btn">{item.ReadMore} <span className="arrow_right" /></a>
                      </div>
                    </div>
                  </div>
                ))} 
                <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
                    {Array(3).fill().map((_i , key) => (
                      <a key={key} href="#">{key + 1}</a>
                    ))}
                    <a href="#"><i className="fa fa-long-arrow-right" /></a>
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

export default BlogContainer