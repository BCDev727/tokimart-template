import SectionHeading from '../SectionHeading'
// import './Testimonial.scss'


const BlogArea = ({data}) => {

    return (

        <section className="our_blog_area clearfix section-padding-100-0" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <SectionHeading
                  title="Blog Posts"
                  ClassTitle="gradient-text blue"
                  ClassDiv="more-dots justify-content-center"
                  textUp="Latest News"
                  textDown="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
                />
              </div>
            </div>
            <div className="row justify-content-center">
              {data && data.map((item , key) => (
                <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" key={key}>
                  <div className="single-blog-area">
                    {/* Post Thumbnail */}
                    <div className="blog_thumbnail">
                        <img src={item.img} alt="" />
                    </div>
                    {/* Post Content */}
                    <div className="blog-content">
                        <div className="post-meta mt-20">
                          <p>By <a href="#" className="post-author">{item.Name}</a> <a href="#">{item.hist}</a> <a href="#" className="post-comments">{item.NumCom}</a></p>
                        </div>
                        <a href="#" className="post-title">
                        <h4>{item.title}</h4>
                        </a>
                        <p>{item.text}</p>
                        <a href="#" className="more-info">{item.link} <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

}

export default BlogArea