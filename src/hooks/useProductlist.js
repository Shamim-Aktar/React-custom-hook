import {useEffect, useState} from 'react'

export const useProductlist=()=>{

  const [products, setProducts]=useState([])


  const getProduct= async()=>{
    const productList=await fetch('https://fakestoreapi.com/products');
    const response= await productList.json()
    setProducts(response)
  }

  useEffect(()=>{
    getProduct()
  })
return {products}
}