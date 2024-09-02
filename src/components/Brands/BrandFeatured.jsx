
import { Container, Row} from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/Subtitle";
import callImages from "../../assets/callImages";
const BrandFeatured = ({ title, btnTitle, pathText}) => {
  
  return (
    <div className="my-3">
      <Container>
        <SubTitle title={title} btnTitle={btnTitle} pathText={"/allBrand"}/>

        <Row className="my-1 justify-content-between">
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand3} />
          <BrandCard img={callImages.brand2} />
          <BrandCard img={callImages.brand1} />
          <BrandCard img={callImages.brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandFeatured;
