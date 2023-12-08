import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { useAlert } from 'react-alert'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import { Carousel } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, error, product } = useSelector(state => state.productDetails)

     useEffect(() => {
        dispatch(getProductDetails(id))

        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }

     }, [dispatch, alert, error, id])

  return (
    <Fragment>
    { loading ? <Loader/>: (
        <Fragment>
            <MetaData title={product.name}/>
        <div>
      <Carousel pause='hover'>
        {product.images && product.images.map(image => (
            <Carousel.Item key = {image.public_id}>
                    <img src={image.url} alt={product.title} />
            </Carousel.Item>
        ))}

      </Carousel>
        </div>
        </Fragment>

    )}
    </Fragment>
  )
}

export default ProductDetails
