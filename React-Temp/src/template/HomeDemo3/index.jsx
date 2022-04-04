import {
  SliderShowInfo1,
  TopSellersInfo1,
  TopSellersInfo2,
  TopSellersInfo3,
  TopSellersInfo4,
  FeaturedAssetsInfo,
  LiveAuctionsInfo,
  FromTheBlogInfo
} from '../../data/data-containers/HomeDemo3/data-HomeDemo3.js';
import dataHomeDemo3 from '../../data/data-containers/HomeDemo3/data-HomeDemo3.json';
import {HomeDemo2banner2 , LiveAuctionsFire} from "../../utils/allImgs"

// import "./wellcome.scss"
import HeroSec from '../../components/HeroSec'
import SliderShow from '../../components/SliderShow'
import TopSellers from '../../components/TopSellers'
import FeaturedAssets from '../../components/FeaturedAssets'
import LiveAuctions from '../../components/LiveAuctions'
import FromTheBlog from '../../components/FromTheBlog'


import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'


const HomeDemo3 = () => {

    return (
      <>
        <Header Title="NFT Template" />
        <HeroSec
          dataSetbg={HomeDemo2banner2}
          data={dataHomeDemo3[0].dataHeroSec}
        />
        <SliderShow
          title={dataHomeDemo3[0].titleHowItWorks}
          data={SliderShowInfo1}
        />
        <TopSellers
          ClassDiv={dataHomeDemo3[0].TopSellersClassDiv}
          title={dataHomeDemo3[0].titleTopSellers}
          TopSellersInfo1={TopSellersInfo1}
          TopSellersInfo2={TopSellersInfo2}
          TopSellersInfo3={TopSellersInfo3}
          TopSellersInfo4={TopSellersInfo4}
        />
        <FeaturedAssets
          title={dataHomeDemo3[0].titleFeaturedAssets}
          dataControls={dataHomeDemo3[0].featured__controls}
          FeaturedAssets={FeaturedAssetsInfo}
          LoadMoreBtn={dataHomeDemo3[0].LoadMoreFeaturedAssets}
        />
        <LiveAuctions
          title={dataHomeDemo3[0].titleLiveAuctions}
          img={LiveAuctionsFire}
          LiveAuctionsInfo={LiveAuctionsInfo}
        />
        <div className="clearfix" />
        <div className="d-block"> </div>
        <FromTheBlog
          title={dataHomeDemo3[0].titleFromTheBlog}
          FromTheBlogInfo={FromTheBlogInfo}
        />
        <Footer />
      </>
    );
}

export default HomeDemo3;

