import React from 'react'
import prismadb from '@/lib/prismadb'
import { SizeColumn } from './components/columns'
import { format } from 'date-fns'
import SizesClient from './components/client'

const SizesPage = async ({
  params
}:{
  params: {storeId:string}
}) => {
    const sizes = await prismadb.size.findMany({
      where:{
        storeId: params.storeId
      },
      orderBy:{
        createAt: 'desc'
      }
    })

    const formattedSizes: SizeColumn[] = sizes.map((item)=>({
      id: item.id,
      name: item.name,
      value: item.value,
      createAt: format(item.createAt, "MMMM do, yyyy")
    }))
    return (
      <div className='flex-col'>
          <div className='flex-1 space-y-4 p-8 pt-6'>
              <SizesClient data={formattedSizes}/>
          </div>
      </div>
    )
}

export default SizesPage