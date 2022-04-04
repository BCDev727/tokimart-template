import SectionHeading from "../SectionHeading"

const AuthorItem = ({img , path , title , text , num}) => (

  <div className="top-author">
    <a href="/profile" className="author-info">
      <img src={img} className="avatar" alt="" />
    </a>
    <div className="item-pri">
      <a href={path}><h5>{title}</h5></a>
      <p>{text}</p>
    </div>
    <div className="author-num">{num}</div>
  </div>

)

const TopSellers = ({
  ClassDiv,
  title,
  TopSellersInfo1,
  TopSellersInfo2,
  TopSellersInfo3,
  TopSellersInfo4
}) => {

  return (

    <section className={ClassDiv}>
      <div className="container">
        <div className="row">
          <SectionHeading text={title} />
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-product__text">
              {TopSellersInfo1.map((item , key) => (
                <AuthorItem
                  key={key}
                  img={item.img}
                  path={item.path}
                  title={item.title}
                  text={item.text}
                  num={item.num}
                />
              ))}

            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-product__text">

              {TopSellersInfo2.map((item , key) => (
                <AuthorItem
                  key={key}
                  img={item.img}
                  path={item.path}
                  title={item.title}
                  text={item.text}
                  num={item.num}
                />
              ))}

            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-product__text">

              {TopSellersInfo3.map((item , key) => (
                <AuthorItem
                  key={key}
                  img={item.img}
                  path={item.path}
                  title={item.title}
                  text={item.text}
                  num={item.num}
                />
              ))}

            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-product__text">

              {TopSellersInfo4.map((item , key) => (
                <AuthorItem
                  key={key}
                  img={item.img}
                  path={item.path}
                  title={item.title}
                  text={item.text}
                  num={item.num}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default TopSellers;