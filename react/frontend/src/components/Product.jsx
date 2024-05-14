import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Product() { 

    const [products, setProducts] = useState({})
    let  { id }  = useParams()
  
    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/products/'+id)
    .then(res => setProducts(res.data.data))
    .catch(error => console.log(error) )
  })
  
      return(
          <div className="App">
          <Link to={"/backend"}><button>Retourner à la page d'accueil</button></Link>
          <h1>Détails du produit : </h1>
            <div key={products.id} className="carDetail">
                <div className="carImg">
                <img src={`http://127.0.0.1:8000${products.image}`} alt="" />
                </div>
                <div className="infoCar">
                    <div><span className="gras">Nom :</span> {products.nom}</div>
                    <div><span className="gras">Catégorie :</span> {products.categorie}</div>
                    <div><span className="gras">Stock :</span> {products.stock}</div>
                    <div><span className="gras">Prix :</span> {products.prix} $</div>
                    <div><span className="gras">Note :</span> {products.star}</div>
                </div>
            </div>
          </div>
      )
  }