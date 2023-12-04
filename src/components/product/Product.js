import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <ul  className="course-list">
      
       <li class="course-item">
         <img src="/image/anh.jpg"  alt="Khóa học 1"/>
         {/* src={product.images[0].url} */}
         <h2>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h2>
         <Link to={`/product/${product._id}`}>Xem khoa hoc</Link>
       </li>
     </ul>
  )
}

export default Product
