const ProductSecBegin = ({
    DepartTit,
    DepartInfo,
    PriceTit,
    ColorsTit,
    ColorsInfo,
    PopularCatTit,
    PopularCatInfo
  }) => {

  return (

      <div className="col-lg-3 col-md-5">
        <div className="sidebar">
          <div className="sidebar__item">
            <h4>{DepartTit}</h4>
            <ul>
              {DepartInfo && DepartInfo.map((item , key) => (
                <li key={key}><a href={item.path}>{item.title}</a></li>
              ))}
            </ul>
          </div>
          <div className="sidebar__item">
            <h4>{PriceTit}</h4>
            <div className="price-range-wrap">
              <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={10} data-max={540}>
                <div className="ui-slider-range ui-corner-all ui-widget-header" />
                <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
                <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
              </div>
              <div className="range-slider">
                <div className="price-input">
                  <input type="text" id="minamount" />
                  <input type="text" id="maxamount" />
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item sidebar__item__color--option">
            <h4>{ColorsTit}</h4>
            {ColorsInfo && ColorsInfo.map((item , key) => (
              <div className={item.Class} key={key}>
                <label htmlFor={item.ID}>
                  {item.text}
                  <input type="radio" id={item.ID} />
                </label>
              </div>
            ))}
          </div>
          <div className="sidebar__item mb-0">
            <h4>{PopularCatTit}</h4>
            {PopularCatInfo && PopularCatInfo.map((item , key) => (
              <div className={item.Class} key={key}>
                <label htmlFor={item.htmlFor}>
                  {item.text}
                  <input type="radio" id={item.ID} />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default ProductSecBegin;