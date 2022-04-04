import {
  HowItWorksInfo1,
  TopSellersInfo1,
  TopSellersInfo2,
  TopSellersInfo3,
  TopSellersInfo4,
  FeaturedAssetsInfo,
  LiveAuctionsInfo,
  FromTheBlogInfo
} from '../../data/data-containers/HomeDemo2/data-HomeDemo2.js';
import dataHomeDemo2 from '../../data/data-containers/HomeDemo2/data-HomeDemo2.json';
import {HomeDemo2banner2 , LiveAuctionsFire} from "../../utils/allImgs"

// import "./wellcome.scss"
import HeroSec from '../../components/HeroSec'
import HowItWorks from '../../components/HowItWorks'
import TopSellers from '../../components/TopSellers'
import FeaturedAssets from '../../components/FeaturedAssets'
import LiveAuctions from '../../components/LiveAuctions'
import FromTheBlog from '../../components/FromTheBlog'


import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'


const HomeDemo2 = () => {

    return (
      <>
        <Header Title="NFT Template" />
        <HeroSec
          dataSetbg={HomeDemo2banner2}
          data={dataHomeDemo2[0].dataHeroSec}
        />
        <HowItWorks
          title={dataHomeDemo2[0].titleHowItWorks}
          data={HowItWorksInfo1}
        />
        <TopSellers
          ClassDiv={dataHomeDemo2[0].TopSellersClassDiv}
          title={dataHomeDemo2[0].titleTopSellers}
          TopSellersInfo1={TopSellersInfo1}
          TopSellersInfo2={TopSellersInfo2}
          TopSellersInfo3={TopSellersInfo3}
          TopSellersInfo4={TopSellersInfo4}
        />
        <FeaturedAssets
          title={dataHomeDemo2[0].titleFeaturedAssets}
          dataControls={dataHomeDemo2[0].featured__controls}
          FeaturedAssets={FeaturedAssetsInfo}
          LoadMoreBtn={dataHomeDemo2[0].LoadMoreFeaturedAssets}
        />
        <LiveAuctions
          title={dataHomeDemo2[0].titleLiveAuctions}
          img={LiveAuctionsFire}
          LiveAuctionsInfo={LiveAuctionsInfo}
        />
        <div className="clearfix" />
        <div className="d-block"> </div>
        <FromTheBlog
          title={dataHomeDemo2[0].titleFromTheBlog}
          FromTheBlogInfo={FromTheBlogInfo}
        />
        <Footer />
      </>
    );
}

export default HomeDemo2;

