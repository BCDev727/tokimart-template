import dataSignup from "../../data/data-containers/Signup/data-Signup.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'


import Footer from '../../layouts/Footer'

const SignupContainer = () => {

    return (
      <>
        <Header Title="Tokimart | Template" />
        <Breadcumb
          title={dataSignup[0].titleBreadcumb}
          TextUp={dataSignup[0].TextUpBreadcumb}
          TextMed={dataSignup[0].TextMedBreadcumb}
          TextDown={dataSignup[0].TextDownBreadcumb}
        />
        <section className="checkout spad">
          <div className="container">
            <div className="checkout__form">
              <form action="#">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 col-md-12 checkout__order">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="checkout__input mb-15">
                          <p>{dataSignup[0].Name}<span>*</span></p>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkout__input mb-15">
                          <p>{dataSignup[0].Email}<span>*</span></p>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkout__input">
                          <p>{dataSignup[0].Password}<span>*</span></p>
                          <input type="password" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-15">
                      <button type="submit" className="site-btn">{dataSignup[0].btn}</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer
          Copyright={true}
          CopyrightTex={dataSignup[0].CopyrightTex}
        />
      </>
    );
}

export default SignupContainer;

