import {Dreadcrumb} from "../../utils/allImgs"

const Breadcumb = ({title , TextUp , TextMed , TextDown , addUl=false}) => {

  return (

    <section className="breadcrumb-section set-bg" data-setbg={Dreadcrumb} style={{backgroundImage:`url(${Dreadcrumb})`}}>
        <div className="container">
            <div className="row">
                {addUl ? (
                        <div className="col-lg-12">
                            <div className="blog__details__hero__text">
                                <h2>{title}</h2>
                                <ul>
                                    <li>{TextUp}</li>
                                    <li>{TextMed}</li>
                                    <li>{TextDown}</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>{title}</h2>
                                <div className="breadcrumb__option">
                                    <a href="/">{TextUp}</a>
                                    <span>{TextDown}</span>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    </section>
  );

}

export default Breadcumb