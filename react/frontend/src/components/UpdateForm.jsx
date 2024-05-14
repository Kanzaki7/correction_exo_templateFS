import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";

export default function UpdateForm() { 
  
  
  const [products, setProducts] = useState([])
  
  // useEffect(()=>{
  //   axios.get('http://127.0.0.1:8000/api/products/'+id)
  //   .then(res => setProducts(res.data.data))
  //   .catch(error => console.log(error) )
  // }, [])

    let  { id }  = useParams()
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/'+id)
        .then(res => setProducts(res.data.data))
        .catch(error => console.log(error) )

      }, [])
      const [formData, setFormData] = useState({
        nom: '',
        categorie: '',
        stock: products.stock,
        prix: products.prix,
        star: 2,
        image: null,
      });
      
console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type == 'file' ? files[0] : value });
};


const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('nom', formData.nom);
    formDataToSend.append('categorie', formData.categorie);
    formDataToSend.append('stock', formData.stock);
    formDataToSend.append('prix', formData.prix);
    formDataToSend.append('star', formData.star);
    formDataToSend.append('image', formData.image);

    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/products/update/${id}`, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setFormData(response.data)
        console.log('Product updated successfully');
        return navigate("/backend");
    } catch (error) {
        console.error('Error updating product:', error);
    }
};



return (
    <div className="App">
        <Link to={"/backend"}><button>Retourner Ã la page d'accueil</button></Link>
        <h2>Modifier le produit :</h2>
        <div className="form">
            <form onSubmit={handleSubmit} className="vraiForm">
              <div className="divInput">
                <label htmlFor="nom">Nom :</label>
                <input type="text" name="nom" placeholder={products.nom} value={formData.nom} onChange={handleChange} required />
              </div>
              <div className="divInput">
                <label htmlFor="categorie">Catégorie :</label>
                <input type="text" name="categorie"  placeholder={products.categorie} value={formData.categorie} onChange={handleChange} required />
              </div>
              <div className="divInput">
                <label htmlFor="stock">Stock :</label>
                <input type="number" name="stock" value={formData.stock}  onChange={handleChange} required />
              </div>
              <div className="divInput">
                <label htmlFor="prix">Prix :</label>
                <input type="number" name="prix" value={formData.prix}  onChange={handleChange} required />
              </div>
              <div className="divInput">
                <label htmlFor="star">Note :</label>
                <input type="number" name="star" value={formData.star} onChange={handleChange} required />
              </div>
              <div className="divInputImg">
                <label htmlFor="image">Image :</label>
                <input type="file" name="image" onChange={handleChange} required />
              </div>
              <button type='submit' className='btnSave'>Modifier</button>
            </form>
        </div>
    </div>
);
}