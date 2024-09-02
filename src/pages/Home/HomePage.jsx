import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Product/CardProductsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatured from "../../components/Brands/BrandFeatured";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الاكثر مبيعا" btnTitle=" المزيد" pathText={'/products'}/>
      <DiscountSection />
      <CardProductsContainer title="احدث الازياء" btnTitle=" المزيد" pathText={'/products'}/>
      <BrandFeatured title="اشهر الماركات" btnTitle=" المزيد" />
    </div>
  );
};

export default HomePage;
