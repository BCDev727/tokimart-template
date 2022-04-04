import SidebarArea from '../../../components/SidebarArea'
import dataContact from "../../../data/data-containers/Blog/data-contact.json"

const SingleBlogArea = ({
  data,
  sidebarInfoData
}) => {
    return (

      <section className="blog-area section-padding-150-0">
        <div className="container">
          <div className="row">
            {data && data.map((item , key) => (
              <div className="col-12 col-md-9" key={key}>
                <div className="single-blog-area wow fadeInUp" data-wow-delay="0.2s">
                  {/* Post Thumbnail */}
                  <div className="blog_thumbnail">
                    <img src={item.img1} alt="" />
                  </div>
                  {/* Post Content */}
                  <div className="blog-content">
                    <div className="post-meta">
                      <p>By <a href="#" className="post-author">{item.blogContentAuthor}</a> <a href="#">{item.blogContentHist}</a> <a href="#" className="post-comments">{item.blogContentNumCom}</a></p>
                    </div>
                    <h4 className="post-title">{item.blogContentTitle}</h4>
                    <p>{item.blogContentText1}</p>
                    <p>{item.blogContentText2}</p>
                    <p>{item.blogContentText3}</p>
                    <blockquote>
                      <h5>{item.blogContentText4}</h5>
                      <span>{item.blogContentText5}</span>
                    </blockquote>
                    <p>{item.blogContentText6}</p>
                    <p>{item.blogContentText7}</p>
                  </div>
                </div>
                {/* Comment Area Start */}
                <div className="comment_area clearfix mt-70" data-wow-delay="0.4s">
                  <h5 className="title">{item.commentAreaTitle}</h5>
                  <ol>
                    {/* Single Comment Area */}
                    <li className="single_comment_area">
                      {/* Comment Content */}
                      <div className="comment-content d-flex" data-aos="fade-up">
                        {/* Comment Author */}
                        <div className="comment-author">
                          <img src={item.commentAuthorImg1} alt="author" />
                        </div>
                        {/* Comment Meta */}
                        <div className="comment-meta">
                          <p>{item.commentMetaText}</p>
                          <a href="#" className="post-date">{item.commentMetaDate1}</a>
                          <p><a href="#" className="post-author">{item.commentMetaAuthor1}</a></p>
                          <a href="#" className="comment-reply">{item.commentMetaReply1}</a>
                        </div>
                      </div>
                      <ol className="children">
                        <li className="single_comment_area" data-aos="fade-up">
                          {/* Comment Content */}
                          <div className="comment-content d-flex">
                            {/* Comment Author */}
                            <div className="comment-author">
                              <img src={item.commentAuthorImg2} alt="author" />
                            </div>
                            {/* Comment Meta */}
                            <div className="comment-meta">
                              <p>{item.commentMetaText2}</p>
                              <a href="#" className="post-date">{item.commentMetaDate2}</a>
                              <p><a href="#" className="post-author">{item.commentMetaAuthor2}</a></p>
                              <a href="#" className="comment-reply">{item.commentMetaReply2}</a>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                    {/* Single Comment Area */}
                    <li className="single_comment_area" data-aos="fade-up">
                      {/* Comment Content */}
                      <div className="comment-content d-flex">
                        {/* Comment Author */}
                        <div className="comment-author">
                          <img src={item.commentAuthorImg3} alt="author" />
                        </div>
                        {/* Comment Meta */}
                        <div className="comment-meta">
                          <p>{item.commentMetaText3}</p>
                          <a href="#" className="post-date">{item.commentMetaDate3}</a>
                          <p><a href="#" className="post-author">{item.commentMetaAuthor3}</a></p>
                          <a href="#" className="comment-reply">{item.commentMetaReply3}</a>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="post-a-comment-area mt-100 mb-5" data-wow-delay="0.6s">
                  <h5>{item.postACommentAreaTitle}</h5>
                  {/* Reply Form */}
                  <form action="#" method="post">
                    <div className="row">
                      {dataContact && dataContact.map((item , key) => (
                        <div className={item.ClassUp} key={key} data-aos="fade-up">
                          <div className="group wow fadeInUp" data-wow-delay="0.5s">
                            {item.addTextArea ? (
                              <textarea name={item.nameInput} id={item.nameInput} required />
                            ):(
                              <input type="text" name={item.nameInput} id={item.nameInput} required />
                            )}
                            <span className="highlight" />
                            <span className="bar" />
                            <label>{item.title}</label>
                          </div>
                        </div>
                      ))}
                      <div className="col-12 mb-5">
                        <button type="submit" className="btn info-btn">{item.submitBtn}</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ))}
            <SidebarArea data={sidebarInfoData} />
          </div>
        </div>
      </section>
    );
}

export default SingleBlogArea