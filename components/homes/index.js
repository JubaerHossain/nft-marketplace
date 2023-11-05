import Wrapper from "../Layout/wrapper";
import HeroSection from '../hero-sections/heroSection';
import { AuctionDeals, Brand, CTA, Collection, CreateAndSell, Creators, Discover, TopSelling } from "../widgets";
const Index = () => {
  return (
    <Wrapper>
      {/* HERO_BANNER::START  */}
      <HeroSection />
      {/* HERO_BANNER::END    */}

      {/* AUCTION::START  */}
      <AuctionDeals/>
      {/* AUCTION::END  */}

      {/* TOP_SELLING::START  */}
      <TopSelling />
      {/* TOP_SELLING::START  */}

      {/* LiveAuctions::Start  */}
      {/* <LiveAuctions /> */}
      {/* LiveAuctions::Start  */}

      {/* Discover::start  */}
      <Discover />
      {/* Discover::start  */}

      {/* TrendingAuction::start  */}
      {/* <TrendingAuction/> */}
      {/* TrendingAuction::end  */}

      {/* CreateAndSell::start  */}
      <CreateAndSell />
      {/* CreateAndSell::start  */}

      {/* Creators::start  */}
      <Creators />
      {/* Creators::start  */}

      {/* Collection::START  */}
      {/* <Collection /> */}
      {/* Collection::END  */}

      {/* Brand::START  */}
      <Brand />
      {/* Brand::END  */}

      {/* CTA::START  */}
      <CTA />
      {/* CTA::START  */}
      </Wrapper>
  )
}
export default Index;