import Pagination  from '../../components/Utility/Pagination'
import CategoryContainer from "../../components/Category/CategoryContainer"


const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  )
}

export default AllCategoryPage