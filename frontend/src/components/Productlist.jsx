import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Productlist = () => {

    const [products, setProduct] = useState([]);

    //init
    useEffect(() => {
        getProducts();
    }, []);

    //fetch data
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((product)=>(
                <div className="col-sm-3" key={product.id}>
                    <div className="card">
                    <img className="card-img-top" src={product.url} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.url}</p>
                        </div>
                        <div class="card-footer">
                            <button className='btn btn-primary'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Productlist