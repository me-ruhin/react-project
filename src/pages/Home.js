import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../firebaseConfig";
import { products } from "../products";
import { useEffect, useState } from "react";
import "../stylesheet/layout.css"
import { useNavigate } from "react-router-dom";

 const style = {
     height:200,
     width:150
 }
export default function Home() {
    const navigate = useNavigate()
    const [products,setProducts] = useState([])

    useEffect(()=>{
        getData()
        console.log(products)
    },[])

  const addData = async () => {

    products.map(async (product) => {
      try {
        const docRef = await addDoc(collection(fireDB, "products"), product);
        console.log("User has been created", docRef.id);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const getData = async () => { 
    const userArray = [];
    const querySnapshot = await getDocs(collection(fireDB, "products"));
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      userArray.push(obj);
    });
    setProducts(userArray)
    console.log(userArray);
  };
  return (
    <Layout>
        <div className="container">
            <div className="row">
                    {products.map((product)=>{
                      return  <div className="col-md-4">
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
                    })}
            </div>
        </div>
    </Layout>
  );
}
