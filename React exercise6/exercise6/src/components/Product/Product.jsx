import "../Product/Product.css"

const Product = ({title, author, description}) => {
    return <div className="Card">
        <h2>{title}</h2>
        <h3>Av{author}</h3>
        <p>{description}</p>
        <div className="btn-wrapper">
        <button className="Product-btn">Add to Cart</button>
    </div>
 
    </div>
   
}

export default Product