import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import callImages from "../../assets/callImages";
const CategoryContainer = () => {
  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text mt-3">كل التصنيفات</div>
        <Row className="my-1 justify-content-between">
          <CategoryCard img={callImages.clothe} background="#F4DBA5" />
          <CategoryCard img={callImages.cat2} background="#0034FF" />
          <CategoryCard img={callImages.labtop} background="#FFD3E8" />
          <CategoryCard img={callImages.clothe} background="#55CFDF" />
          <CategoryCard img={callImages.sale} background="#FF6262" />
          <CategoryCard img={callImages.pic} background="#F4DBA5" />
          <CategoryCard img={callImages.cat2} background="#0034FF" />
          <CategoryCard img={callImages.labtop} background="#FFD3E8" />
          <CategoryCard img={callImages.clothe} background="#55CFDF" />
          <CategoryCard img={callImages.sale} background="#FF6262" />
          <CategoryCard img={callImages.clothe} background="#F4DBA5" />
          <CategoryCard img={callImages.cat2} background="#0034FF" />
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
