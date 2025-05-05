import React, { useEffect } from 'react'
import { fetchProducts } from './redux/Products/productAction'
import { useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'
// { fetchProducts, productsData }
const ProductContainer = () => {
    const productsData= useSelector(state=>state.product);
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            {productsData.loading && <p>Loading....</p>}
            {productsData.error && <p>{productsData.error}</p>}
            {productsData.products && (
                <div>
                    {productsData.products.map((product, index) => (
                        <p key={index}>{product}</p>  // Assuming products have a `title` property
                    ))}
                </div>
            )}



        </div>
    )
}
// const mapStateToProps = state => {
//     return {
//         productsData: state.product
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchProducts: () => dispatch(fetchProducts())
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
export default ProductContainer