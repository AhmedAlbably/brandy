import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/Subtitle";
import CategoryCard from "../Category/CategoryCard";
import callImages from "../../assets/callImages";

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle=" المزيد" pathText="/allCategory" />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard
          img={callImages.clothe}
          background="#f9f9f9"
          title="ملابس"
        />
        <CategoryCard
          img={callImages.cat2}
          background="#f9f9f9"
          title="أجهزة"
        />
        <CategoryCard
          img={callImages.labtop}
          background="#f9f9f9"
          title="لابتوبات"
        />
        <CategoryCard
          img={callImages.sale}
          background="#f9f9f9"
          title="تخفيضات"
        />
        <CategoryCard img={callImages.pic} background="#f9f9f9" title="صور" />
        <CategoryCard
          img={callImages.clothe}
          background="#f9f9f9"
          title="ملابس"
        />
      </Row>
    </Container>
  );
};

export default HomeCategory;
