import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/Subtitle";

const CardProductsContainer = ({ title, btnTitle, pathText }) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} pathText={pathText}/>
      <Row className=" my-2 d-flex justify-content-between ">
        <ProductCard title="1" />
        <ProductCard title="2" />
        <ProductCard title="3" />
        <ProductCard title="4" />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
