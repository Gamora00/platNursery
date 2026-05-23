import React from 'react'
import plants from '../item'
import Cards from '../components/cards'
function Listing() {
  return (
    <div className='container py-4'>
        {plants.map((element)=>(
            <section key={element.category} className='mb-5 text-center'>
                <h2 className='mb-4'>{element.category}</h2>

                <div className='row g-4'>
                    {element.items.map((item)=>(
                        <div key={item.title} className='col-12 col-sm-6 col-lg-4'>
                            <Cards plant={item}/>
                        </div>
                    ))}
                </div>
            </section>
        ))}
    </div>
  )
}

export default Listing
