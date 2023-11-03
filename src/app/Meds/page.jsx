"use client"
import { useEffect, useState } from 'react';
import { client } from '../../../lib/sanityClient';
import Header from '../components/navbar';
import { useAuthContract } from '../Context/ContractContext';
import { ethers } from 'ethers';
import {useRouter} from 'next/navigation';


export default function Products() {
 const [products, setProducts] = useState([]);
 const contract = useAuthContract?.factoryContractInstance;
 const authContract = useAuthContract?.contractInstance;
 const Router = useRouter();
 useEffect(() => {
  if(!authContract){
   // Router.push('/');
  }

}, []);
  useEffect(() => {
    const fetchProductData = async (sanityClient = client) => {
      const query = `*[_type == "products"]{
        "productName": productName,
        "productDescription": productDescription,
        "price": price,
        "productImage": productImage.asset->url
      }`
  
      const productData = await sanityClient.fetch(query);
      setProducts(productData);
      console.log(productData)
  }
   fetchProductData();
  
  }, []);

  const handleBuy = async()=>{
   console.log(contract);
    try{
      //const weiValue = ethers.utils.parseEther(products.price);
    const tx = await contract?.Pay();
     //await tx.wait();
      alert("Purchase Successfull")
    }catch(err){
      alert(err.message);
    }
  }
  
  
                                                                           
  return (
    <><Header/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
      <div>
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg">
          <img src={product?.productImage} alt={product.productName} className="w-full h-64 object-cover object-center mb-4 rounded" />
          <h2 className="text-lg font-bold mb-2">{product.productName}</h2>
          <p className="mb-2">{product.productDescription}</p>
          <p className="font-bold">{`${product.price} ETH`}</p>

          <button onClick={handleBuy}>BUY</button>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}
