import { Link } from 'react-router-dom'
import { BiPurchaseTag } from 'react-icons/bi'
import './productCard.css'

const ProductCart = ({ name, path, value, description }) => {
  return (
    <div className='product-card'>
      <Link to='/'>
        <img
          src={path}
          width='250'
          height='210'
        />
      </Link>
      <div className='product-info'>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to='/'>
          <div className='price'>
            <span>$ {value} <BiPurchaseTag /></span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductCart
