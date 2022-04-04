import {useEffect} from "react"
import Slider from "react-slick";

import SectionHeading from "../SectionHeading"


const SliderShow = ({
  ClassSec="hos-features section-padding-100-70",
  data
}) => {

  useEffect(() => {
    let slickPrev = document.querySelector(".categories .slick-prev"),
        slickNext = document.querySelector(".categories .slick-next");

    if(slickPrev && slickNext){
      slickPrev.style.backgroundColor = "#ffffff";
      slickPrev.style.border = ".1px solid #000";
      slickPrev.style.color = "#000";
      slickPrev.style.width = "30px";
      slickPrev.style.height = "58px";


      slickNext.style.backgroundColor = "#ffffff";
      slickNext.style.border = ".1px solid #000";
      slickNext.style.color = "#000";
      slickNext.style.width = "30px";
      slickNext.style.height = "58px";
    }
  },[])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding:"100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows:false
        }
      }
    ]
  };

  return (

    <section className="categories">
      <div className="container">
        <div className="row">
          <Slider
            {...settings}
            className="categories__slider col-sm-12">
              {data && data.map((item , key) => (
                <div className="" key={key}>
                  <div className="categories__item set-bg" data-setbg={item.img} style={{backgroundImage:`url(${item.img})`}}>
                    <h5><a href={item.path}>{item.title}</a></h5>
                  </div>
                </div>
              ))}

          </Slider>
        </div>
      </div>
    </section>
  );

}

export default SliderShow