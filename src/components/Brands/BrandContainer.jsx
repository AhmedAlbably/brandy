
import { Container, Row} from "react-bootstrap";
import BrandCard from "./BrandCard";
import callImages from "../../assets/callImages";
const BrandContainer = () => {
  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل الماركات</div>
        <Row className="my-1 justify-content-between">
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand3} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand3} />
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand3} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand3} />
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand3} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand3} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandContainer;
