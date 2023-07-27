import React from 'react'
import prismadb from '@/lib/prismadb'
import { ColorColumn } from './components/columns'
import { format } from 'date-fns'
import ColorsClient from './components/client'

const ColorsPage = async ({
  params
}:{
  params: {storeId:string}
}) => {
    const colors = await prismadb.color.findMany({
      where:{
        storeId: params.storeId
      },
      orderBy:{
        createAt: 'desc'
      }
    })

    const formattedColors: ColorColumn[] = colors.map((item)=>({
      id: item.id,
      name: item.name,
      value: item.value,
      createAt: format(item.createAt, "MMMM do, yyyy")
    }))
    return (
      <div className='flex-col'>
          <div className='flex-1 space-y-4 p-8 pt-6'>
              <ColorsClient data={formattedColors}/>
          </div>
      </div>
    )
}

export default ColorsPage