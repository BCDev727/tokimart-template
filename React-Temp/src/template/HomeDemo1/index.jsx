import {
  TopSellersInfo1,
  TopSellersInfo2,
  TopSellersInfo3,
  TopSellersInfo4,
  FeaturedAssetsInfo,
  LiveAuctionsInfo,
  FromTheBlogInfo
} from '../../data/data-containers/HomeDemo1/data-HomeDemo1.js';
import dataHomeDemo1 from '../../data/data-containers/HomeDemo1/data-HomeDemo1.json';
import {HeroSecBanner1 , LiveAuctionsFire} from "../../utils/allImgs"

// import "./wellcome.scss"
import HeroSec from '../../components/HeroSec'
import TopSellers from '../../components/TopSellers'
import FeaturedAssets from '../../components/FeaturedAssets'
import LiveAuctions from '../../components/LiveAuctions'
import FromTheBlog from '../../components/FromTheBlog'


import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'


const HomeDemo1 = () => {

    return (
      <>
        <Header Title="NFT Template" />
        <HeroSec
          dataSetbg={HeroSecBanner1}
          data={dataHomeDemo1[0].dataHeroSec}
        />
        <TopSellers
          ClassDiv={dataHomeDemo1[0].TopSellersClassDiv}
          title={dataHomeDemo1[0].titleTopSellers}
          TopSellersInfo1={TopSellersInfo1}
          TopSellersInfo2={TopSellersInfo2}
          TopSellersInfo3={TopSellersInfo3}
          TopSellersInfo4={TopSellersInfo4}
        />
        <FeaturedAssets
          title={dataHomeDemo1[0].titleFeaturedAssets}
          dataControls={dataHomeDemo1[0].featured__controls}
          FeaturedAssets={FeaturedAssetsInfo}
          LoadMoreBtn={dataHomeDemo1[0].LoadMoreFeaturedAssets}
        />
        <LiveAuctions
          title={dataHomeDemo1[0].titleLiveAuctions}
          img={LiveAuctionsFire}
          LiveAuctionsInfo={LiveAuctionsInfo}
        />
        <div className="clearfix" />
        <div className="d-block"> </div>
        <FromTheBlog
          title={dataHomeDemo1[0].titleFromTheBlog}
          FromTheBlogInfo={FromTheBlogInfo}
        />
        <Footer />
      </>
    );
}

export default HomeDemo1;

