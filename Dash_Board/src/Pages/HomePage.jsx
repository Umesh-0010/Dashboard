import React from 'react'
import NumberOfProduct from '../Components/HomeComponents/NumberOfProduct'
import InwardProducts from '../Components/HomeComponents/InwardProducts'
import SaleProduct from '../Components/HomeComponents/SaleProduct'
import LineGraph from '../Components/HomeComponents/LineGraph'

function HomePage() {
  return (
    <div className=' w-248 p-10 bg-blue-100'>
        <div className='h-1/4 mt-2 w-full flex justify-between mb-10'>
            <NumberOfProduct/>
            <InwardProducts/>
            <SaleProduct/>        
        </div>
        <div className=' h-90.25'>
            <LineGraph/>
        </div>

    
      
    </div>
  )
}

export default HomePage
