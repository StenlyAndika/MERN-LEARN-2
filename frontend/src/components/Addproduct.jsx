import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview((URL.createObjectURL(image)));
    }

    const saveProducts = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        try {
            await axios.post("http://localhost:5000/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-4 col-sm-3">
            <form onSubmit={saveProducts}>
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
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Addproduct