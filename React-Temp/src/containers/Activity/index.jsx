import Activity from "../../data/data-containers/Activity/data-Activity"

import dataActivity from "../../data/data-containers/Activity/data-Activity.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'

import Footer from '../../layouts/Footer'

const ActivityContainer = () => {

  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataActivity[0].titleBreadcumb}
        TextUp={dataActivity[0].TextUpBreadcumb}
        TextDown={dataActivity[0].TextDownBreadcumb}
      />
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {Activity && Activity.map((item , key) => (
                  <div className="col-lg-12 col-md-12" key={key}>
                    <div className="latest-product__text">
                      <div className="top-author v2">
                        <a href={item.path} className="author-info">
                          <img src={item.img} className="notif" alt="" />
                          <span className={item.Class}><i className={item.icoName} /></span>
                        </a>
                        <div className="item-pri">
                          <span>{item.By} <p className="papple">{item.name}</p></span>
                          <a href={item.path}><h5>{item.title}</h5></a>
                          <span>{item.text}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="mt-s">
                <div className="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><span className="icon_search" /></button>
                  </form>
                </div>
                <div className="blog__sidebar__item">
                  <h4>{dataActivity[0].Filters}</h4>
                  <ul>
                    {dataActivity[0].blog__sidebar__itemList.map((item , key) => (
                       <li key={key}><a href="#">{item.name}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="blog__sidebar__item">
                  <h4>{dataActivity[0].Search}</h4>
                  <div className="blog__sidebar__item__tags">
                    {dataActivity[0].blog__sidebar__item__tags.map((item , key) => (
                       <a key={key} href="#">{item.name}</a>
                    ))}
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

export default ActivityContainer