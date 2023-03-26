import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Editproduct = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        const getProductById = async () => {
            const response = await axios.get(`http://localhost:5000/products/${id}`);
            setTitle(response.data.name);
            setFile(response.data.image);
            setPreview(response.data.url);
        }
        getProductById();
    }, [])

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview((URL.createObjectURL(image)));
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-4 col-sm-3">
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <label for="name">Nama Produk</label>
                    <input type="text" className="form-control" id="name" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group mt-2">
                    <input className="form-control" type="file" id="img" onChange={loadImage}/>
                </div>
                {preview ? (
                    <img className="card-img-top mt-2" style={{height: 200+"px", objectFit: 'cover'}} src={preview} alt="..."/>
                ) : (
                    ""
                )}
                <button type="submit" className="btn btn-success mt-2">Update</button>
            </form>
        </div>
    )
}

export default Editproduct