

const BlogRightSidebar = ({data , post_item , instagramRow}) => {

    return (

      <div className="col-lg-4">
        <div className="blog_right_sidebar">
          <aside className="single_sidebar_widget search_widget">
            <form action="#">
              <div className="form-group">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'" />
                  <div className="input-group-append">
                    <button className="btns" type="button"><i className="ti-search" /></button>
                  </div>
                </div>
              </div>
              <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
            </form>
          </aside>
          <aside className="single_sidebar_widget post_category_widget">
            <h4 className="widget_title">{data[0].CategoryName}</h4>
            <ul className="list cat-list">
              {data[0].CategoryInfo && data[0].CategoryInfo.map((item , key) => (
                <li key={key}>
                  <a href="#" className="d-flex">
                    <p>{item.title}</p>
                    <p>{item.text}</p>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <aside className="single_sidebar_widget popular_post_widget">
            <h3 className="widget_title">{data[0].RecentPostName}</h3>

            {post_item && post_item.map((item , key) => (
              <div className="media post_item" key={key}>
                <img src={item.img} alt="post" />
                <div className="media-body">
                  <a href="/blog-details">
                    <h3>{item.title}</h3>
                  </a>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

          </aside>
          <aside className="single_sidebar_widget tag_cloud_widget">
            <h4 className="widget_title">{data[0].TagCloudsName}</h4>
            <ul className="list">
              {data[0].TagCloudsInfo && data[0].TagCloudsInfo.map((item , key) => (
                <li key={key}>
                  <a href="#">{item.text}</a>
                </li>
              ))}
            </ul>
          </aside>
          <aside className="single_sidebar_widget instagram_feeds">
            <h4 className="widget_title">{data[0].InstagramFeeds}</h4>
            <ul className="instagram_row flex-wrap">
              {instagramRow && instagramRow.map((item , key) => (
                <li key={key}>
                  <a href="#">
                    <img className="img-fluid" src={item.img} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <aside className="single_sidebar_widget newsletter_widget">
            <h4 className="widget_title">{data[0].Newsletter}</h4>
            <form action="#">
              <div className="form-group">
                <input type="email" className="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" placeholder="Enter email" required />
              </div>
              <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">{data[0].Subscribe}</button>
            </form>
          </aside>
        </div>
      </div>
    );

}

export default BlogRightSidebar