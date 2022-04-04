import {data , title} from '../../data/data-containers/Home/data-Home.js';

// import "./wellcome.scss"
import Preloader from '../../components/Preloader'
import SectionHeading from '../../components/SectionHeading'


const HomeContainer = () => {

    return (
      <>
        <Preloader Title="NFT Template" />
        <section className="categories section-padding-100-70">
          <div className="container">
            <SectionHeading text={title} />
            <div className="row">
              {data && data.map((item , key) => (
                <div className="col-lg-4" key={key}>
                  <a href={item.path} target="_blanl" className={item.Class}>
                    <img src={item.img} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
}

export default HomeContainer;

