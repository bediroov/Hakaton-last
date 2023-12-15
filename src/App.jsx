
import React from 'react'
import Top from './components/Top'
import { useState } from 'react'
import items from "../src/data/product.json"
import { Container } from 'react-bootstrap'
import Menu from './pages/Menu'
import Category from './pages/Category'



const allcategories = ["menu",...new Set(items.map((item)=>item.category))]

const App = () => {


const [menuItem,setMenuItem]=useState(items);
const [categories,setCategories]=useState(allcategories);



const filterItems=(category)=>{
  if (category==="menu") {
    return setMenuItem(items)
  }else{
    const newItems= items.filter((item)=>item.category===category)
    return setMenuItem(newItems)
  }
}


  return (
  <>
  
  <Top/>
  <Container>
<Category categories={categories} filterItems={filterItems}/>
<Menu items={menuItem}  />

  </Container>


  
  </>
  )
}

export default App