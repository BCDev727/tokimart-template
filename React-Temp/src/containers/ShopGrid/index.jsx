
import FeaturedAssetsInfo from "../../data/data-containers/ShopGrid/data-ShopGrid"

import dataShopGrid from "../../data/data-containers/ShopGrid/data-ShopGrid.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import FeaturedAssets from '../../components/FeaturedAssets'

import Footer from '../../layouts/Footer'

const ShopGridContainer = () => {

  return (
    <>
      <Header Title="Tokimart | Template" />
      <Breadcumb
        title={dataShopGrid[0].titleBreadcumb}
        TextUp={dataShopGrid[0].TextUpBreadcumb}
        TextDown={dataShopGrid[0].TextDownBreadcumb}
      />
      <FeaturedAssets
        ClassSec="featured section-padding-100-70"
        title={dataShopGrid[0].titleFeaturedAssets}
        dataControls={dataShopGrid[0].featured__controls}
        FeaturedAssets={FeaturedAssetsInfo}
        LoadMoreBtn={dataShopGrid[0].LoadMoreFeaturedAssets}
      />
      <Footer />
    </>
  );
}

export default ShopGridContainer