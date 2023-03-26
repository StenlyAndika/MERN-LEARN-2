import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Productlist = () => {

    const [products, setProduct] = useState([]);
    const navigate = useNavigate();

    //init
    useEffect(() => {
        getProducts();
    }, []);

    //fetch data
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    const deleteProducts = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/products/${id}`);
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-4 mb-4">
            <button type='submit' className='btn btn-success' onClick={(e) => navigate('add')}>Tambah</button>
            <div className="row">
                {products.map((product)=>(
                <div className="col-sm-3" key={product.id}>
                    <div className="card mt-4">
                    <img className="card-img-top" style={{height: 200+"px", objectFit: 'cover'}} src={product.url} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{product.name}</strong></h5>
                        </div>
                        <div class="card-footer">
                            <button className='btn btn-primary' onClick={(e) => navigate(`edit/${product.id}`)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => deleteProducts(product.id)}>Delete</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Productlist