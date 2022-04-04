import SectionHeading from "../SectionHeading"

const FromTheBlog = ({
  ClassSec="from-blog spad padding-top-0",
  title,
  FromTheBlogInfo
}) => {

  return (

      <section className={ClassSec}>
        <div className="container">
          <div className="row">
            <SectionHeading
              text={title}
            />
          </div>
          <div className="row">

            {FromTheBlogInfo && FromTheBlogInfo.map((item , key) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={key}>
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li><i className="fa fa-calendar-o" /> {item.hist}</li>
                      <li><i className="fa fa-comment-o" /> {item.commentNum}</li>
                    </ul>
                    <h5><a href="/blog">{item.title}</a></h5>
                    <p>{item.text} </p>
                    {item.addLink && <a href={item.path} className="blog__btn">{item.linkTex} <span className="arrow_right" /></a>}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
  );

}

export default FromTheBlog