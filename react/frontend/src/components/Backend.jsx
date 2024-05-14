import axios from "axios"
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Backend() { 

    const [products, setProducts] = useState([])

  
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/products')
        .then(res => setProducts(res.data.data))
        .catch(error => console.log(error))
      }, [])

      const destroy = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/products/delete/'+id)
        setProducts(products.filter(item => item.id !== id))
      }

  return(
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Catégorie</th>
                <th>Prix</th>
                <th>Stock</th>
                <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {products ? products.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nom}</td>
                        <td>{item.categorie}</td>
                        <td>${item.prix}</td>
                        <td>{item.stock}</td>
                        <td>{item.star}</td>
                        <td>
                            <Link to={"/products/"+item.id}>
                                <Button variant="primary">
                                    View details
                                </Button>
                            </Link>
                        </td>
                        <td>
                            <Link to={"/update/"+item.id}>
                                <Button variant="success">
                                    Editer
                                </Button>
                            </Link>
                        </td>
                        <td>
                        <Button variant="danger" onClick={() => destroy(item.id)}>
                            Supprimer
                        </Button>
                        </td>
                    </tr>
                )) : null}
            </tbody>
        </Table>
        <Link to={"/create/"}>
            <Button variant="warning">
                Créer produit
            </Button>
        </Link>
    </div>
  )

}