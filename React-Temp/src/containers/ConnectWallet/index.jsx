import {ConnectWallet} from "../../utils/allImgs"

import data from "../../data/data-containers/ConnectWallet/data-ConnectWallet"

import dataConnectWallet from "../../data/data-containers/ConnectWallet/data-ConnectWallet.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'

import Footer from '../../layouts/Footer'

const ConnectWalletContainer = () => {

  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataConnectWallet[0].titleBreadcumb}
        TextUp={dataConnectWallet[0].TextUpBreadcumb}
        TextDown={dataConnectWallet[0].TextDownBreadcumb}
      />
      <section className="blog section-padding-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img src={ConnectWallet} alt="" />
            </div>
            <div className="col-lg-7 mt-s">
              <div className="row">
                {data && data.map((item , key) => (
                  <div className="col-lg-6 col-md-6 col-sm-12" key={key}>
                    <div className="shoping__checkout mt-0">
                      {item.walletLabel && <div className="wallet-label">{item.walletLabel}</div> }
                      <img src={item.img} className="support-img" width={30} alt="" />
                      <h5>{item.title}</h5>
                      <p className={`${item.ClasstText && item.ClasstText}`}>{item.text}</p>
                      <a href="#" className="primary-btn">{item.btn}</a>
                    </div>
                  </div>
                ))}
                <div className="col-lg-12">
                  <div className="offer-btn mb-0">{dataConnectWallet[0].offerBtn}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ConnectWalletContainer