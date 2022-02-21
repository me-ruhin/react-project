import Layout from "../components/Layout";
import {  doc, getDoc } from "firebase/firestore";
import fireDB from "../firebaseConfig";
import {useParams} from 'react-router'
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

 const style = {
     height:200,
     width:150
 }

export default function Product(){
    const navigate = useNavigate()
    const [product,setProduct] = useState({})
    const params = useParams() 
    useEffect(()=>{
        getData()
        console.log(product)
        
    },[])

   async function getData(){
    const productTemp = await getDoc(doc(fireDB,'products',params.productId))
    setProduct(productTemp.data()) 
   }
    return (
        <Layout> 
              <div className="col-md-4">
                      <div className="m-2 p-1" key={Math.random()} >
                            <h4>{product.name}</h4>
                            <img src={product.image} style={style}/>
                        </div>
                        <div className="product-actions">
                            <p>{product.price} Tk</p> 
                            <button>Add to cart</button>
                            <button onClick={()=>{
                                navigate(`/product/${product.id}`)
                            }}>View</button>
                        </div>
                        </div>
           
                      

        </Layout>
    )
}