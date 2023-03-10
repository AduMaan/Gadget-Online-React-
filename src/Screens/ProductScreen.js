import React from 'react'
import Rating from '../Components/Rating';
import data from '../data';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

export default function ProductScreen(props) {
  const { id } = useParams();
  const product = data.products.find((x) => x._id === id);
  /*  const product = data.products.find((x) => x._id === props.match.params.id);*/
    if(!product){
        return <div> No Product Found! </div>
    }
    return (
        <div>
            <Link to="/"> Back To HomeScreen</Link>
            <div className="row">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Pirce : ${product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                 <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                        </div>
                      </li>
                      <li>
                        <button
                        
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            </div>
        </div>
    );

}
