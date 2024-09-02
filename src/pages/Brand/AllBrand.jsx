
import { Container } from "react-bootstrap";
import BrandContainer from "../../components/Brands/BrandContainer";
import Pagination from "../../components/Utility/Pagination";
const AllBrand = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <BrandContainer />
      <Pagination />
    </Container>
  );
};

export default AllBrand;
