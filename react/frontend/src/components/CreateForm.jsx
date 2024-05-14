import axios from "axios"
import '../App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function CreateForm() { 

  let navigate = useNavigate();

    const [formProductslist, setFormProductslist] = useState({
      nom: "",
      categorie: "",
      stock: 0,
      prix: 0,
      star: 0,
      image: ""
    })
    console.log(formProductslist);
  
    const createProductlist = async(e)=>{
      e.preventDefault()
      console.log(formProductslist);
      try {
        await axios.post("http://127.0.0.1:8000/api/products/create/", formProductslist, {
          'headers' : {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => console.log(res))
        return navigate("/backend");
      } catch (error) {
        console.log(error)
      }
    }

    
    
    const handleChange = (e) => {
      const {name, value, type, files} = e.target
        setFormProductslist({...formProductslist, [name]: type == 'file' ? files[0] : value })
    }
  
      return(
          <div className="App">
          <Link to={"/backend"}><button>Retourner à la page d'accueil</button></Link>
          <h2>Ajouter un produit : </h2>
          <div className="form">
            <form onSubmit={createProductlist} className="vraiForm">
                <div className="divInput">
                <label htmlFor="nom">Nom :</label>
                <input type="text" name="nom" value={formProductslist.nom} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="categorie">Catégorie :</label>
                <input type="text" name="categorie" value={formProductslist.categorie} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="stock">Stock :</label>
                <input type="number" name="stock" value={formProductslist.stock} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="prix">Prix :</label>
                <input type="number" name="prix" value={formProductslist.prix} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInput">
                <label htmlFor="star">Note :</label>
                <input type="number" name="star" value={formProductslist.star} onChange={(e)=>handleChange(e)} required/>
                </div>
                <div className="divInputImg">
                <label htmlFor="image">Image :</label>
                <input type="file" name="image" className="urlInput" onChange={(e)=>handleChange(e)} required/>
                </div>
                <button type='submit' className='btnSave'>Ajouter</button>
            </form>
          </div>
          </div>
      )
  }