// Components
import { Link } from 'react-router-dom'

// Data
import LAPTOPS_PRODUCTS from '../../data/laptops_products'

const TopRatedColumn = ({ title }) => {
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + '...'
    } else return str
  }

  return (
    <div className="product-colum-wrapper">
      <div className="title p-bottom-10">
        <span className="p-bottom-10">{title}</span>
      </div>

      {LAPTOPS_PRODUCTS.slice(4, 7).map(
        ({ id, name, price, imgUrl, category }) => (
          <div
            key={id}
            className="align-tiny-product-wrapper flex-align-center"
          >
            <Link
              to={`/categories/featured/product/${id}`}
              className="img-wrapper"
            >
              <img src={imgUrl} alt="product" />
            </Link>

            <div className="content">
              <div className="category">{category}</div>
              <Link
                to={`/categories/featured/product/${id}`}
                className="product-name"
              >
                {truncateStr(name, 15)}
              </Link>
              <div className="price">
                <div className="new">${price}</div>
                <del>$250.00</del>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default TopRatedColumn