
import Category from '../../components/category/Category';
import HeroSection from '../../components/heroSection/HeroSection';
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard';
import Loader from '../../components/loader/Loader';
import Testimonial from '../../components/testimonial/Testimonial';
import Track from '../../components/track/Track';
import Layout from './../../components/layout/Layout';

const HomePage = () => {
  

  return (
   <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
      <Loader/>
   </Layout> 
 )
}

export default HomePage