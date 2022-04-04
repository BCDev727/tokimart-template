
const CatAside = ({data , RecentNews}) => {


    return (

      <div className="col-lg-4 col-md-5">
        <div className="blog__sidebar">
          <div className="blog__sidebar__search">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit"><span className="icon_search" /></button>
            </form>
          </div>
          <div className="blog__sidebar__item">
            <h4>{data.Categories}</h4>
            <ul>
            	{data.blog__sidebar__itemList.map((item , key) => (
            		<li key={key}><a href="#">{item.name}</a></li>
            	))}
            </ul>
          </div>
          <div className="blog__sidebar__item">
            <h4>{data.RecentNewsTit}</h4>
            <div className="blog__sidebar__recent">
              {RecentNews && RecentNews.map((item , key) => (
	              <a href={item.path} key={key} className="blog__sidebar__recent__item">
	                <div className="blog__sidebar__recent__item__pic">
	                  <img src={item.img} alt="" />
	                </div>
	                <div className="blog__sidebar__recent__item__text">
	                	  {item.addBr ? <h6>{item.textLeft}<br /> {item.textRight}</h6> : <h6>{item.title}</h6>}
	                  	<span>{item.hist}</span>
	                </div>
	              </a>
              ))}
            </div>
          </div>
          <div className="blog__sidebar__item">
            <h4>{data.Search}</h4>
            <div className="blog__sidebar__item__tags">
            	{data.blog__sidebar__item__tags.map((item , key) => (
            		<a key={key} href="#">{item.name}</a>
            	))}
            </div>
          </div>
        </div>
      </div>

	  );
}

export default CatAside