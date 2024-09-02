
import { Container, Col, Row } from "react-bootstrap";
import CardProductsContainer from "../../components/Product/CardProductsContainer";
import SearchCountResult from '../../components/Utility/SearchCountResult';
import Pagination from "../../components/Utility/Pagination";
import CategoryHeader from "../../components/Category/CategoryHeader";
import SideFilter from "../../components/Utility/SideFilter";
const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container style={{ minHeight: "660px" }}>
        <div className="">
          <SearchCountResult title="٦٠٠ منتج متاح ٠٠٠" />
          <Row className="d-flex flex-row">
            <Col sm="2" xs="2" md="1" className="d-flex">
              <SideFilter />
            </Col>
            <Col sm="10" xs="11" md="11">
              <CardProductsContainer title="" btntitle="" />
            </Col>
          </Row>
          <Pagination />
        </div>
      </Container>
    </div>
  );
};

export default ShopProductsPage;
