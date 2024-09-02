import { Dropdown } from 'react-bootstrap';
import callImages from "../../assets/callImages";

const SearchCountResult = ({ title }) => {
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex">
        <Dropdown>
          <Dropdown.Toggle
            as="div"
            className="d-flex align-items-center mx-1"
          >
            <img
              width="20px"
              height="20px"
              className="ms-1"
              src={callImages.sort}
              alt=""
            />
            <span>ترتيب حسب</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>الاكثر مبيعا</Dropdown.Item>
            <Dropdown.Item>الاعلي تقييما</Dropdown.Item>
            <Dropdown.Item>السعر من الاقل للاعلي</Dropdown.Item>
            <Dropdown.Item>السعر من الاعلي للاقل</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
