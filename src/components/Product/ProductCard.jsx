import { Card, Col } from "react-bootstrap";
import callImages from "../../assets/callImages";

const ProductCard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <img
          style={{ height: "228px", width: "100%" }}
          src={callImages.prod1}
          alt="Product image"
        />
        <div className="d-flex justify-content-end mx-2">
          <img
            src={callImages.favOff}
            alt="Favorite icon"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            سود كربون ساعة يد ذكية بيب إس أسود كربون
          </Card.Title>
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  src={callImages.rate}
                  alt="Rating icon"
                  height="16px"
                  width="16px"
                />
                <span className="mx-2">4.5</span>
              </div>
              <div className="d-flex">
                <span>880</span>
                <span className="mx-1">جنيه</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;