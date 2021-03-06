import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import Meta from '../components/Meta'
// import {
//   listProductDetails,
//   createProductReview,
// } from '../actions/productActions'
// import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

//import products from '../products_and_images/products'
import axios from 'axios'

const ProductScreen = ({ history, match }) => {
  // const [qty, setQty] = useState(1)
  // const [rating, setRating] = useState(0)
  // const [comment, setComment] = useState('')

  // const dispatch = useDispatch()

  // const productDetails = useSelector((state) => state.productDetails)
  // const { loading, error, product } = productDetails

  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  // const productReviewCreate = useSelector((state) => state.productReviewCreate)
  // const {
  //   success: successProductReview,
  //   loading: loadingProductReview,
  //   error: errorProductReview,
  // } = productReviewCreate

  // useEffect(() => {
  //   if (successProductReview) {
  //     setRating(0)
  //     setComment('')
  //   }
  //   if (!product._id || product._id !== match.params.id) {
  //     dispatch(listProductDetails(match.params.id))
  //     dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
  //   }
  // }, [dispatch, match, successProductReview])

  // const addToCartHandler = () => {
  //   history.push(`/cart/${match.params.id}?qty=${qty}`)
  // }

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(
  //     createProductReview(match.params.id, {
  //       rating,
  //       comment,
  //     })
  //   )
  // }

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async() => {
      const { data } = await axios.get(`/api/product/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [match])


  return (
    <>
      <h1>{product.name}</h1>
      <p>{product._id}</p>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      
    </>
  )
}

export default ProductScreen
