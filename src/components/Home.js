import React, { Fragment, useEffect } from 'react'
import './Home.css'
import MetaData from './layout/MetaData'
import Pagination from 'react-js-pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'
import Product from './product/Product'
import Loader from './layout/Loader'

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(state => state.products) 

useEffect(() => {
  if(error) {
    return alert.error(error)
  }

  dispatch(getProducts());

}, [dispatch, alert,  error])

  return (
    <Fragment>
      {loading ? <Loader/> : (
        <Fragment>
        <MetaData title={'Home'} />

<h1>Danh sách khóa học</h1>
 <div>
  { products && products.map( product => (
       <Product key = {product._id} product={product} />
  ) )} 
 </div>
        </Fragment>
      )}

    </Fragment>
   
  )
}

export default Home
