"use client"

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Billboard } from '@prisma/client'
import { Plus } from 'lucide-react'
import { useParams,useRouter } from 'next/navigation'
import React from 'react'
import { ColorColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'

interface ColorsClientProps {
    data: ColorColumn[]
}
const ColorsClient: React.FC<ColorsClientProps> = ({
    data
}) => {

    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className='flex items-center justify-between'>
                <Heading
                    title={`Colors (${data.length})`}
                    description='Manage colors for your store'
                />
                <Button onClick={()=>router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className='mr-2 h-4 w-4'/>
                    Add New
                </Button>
            </div>
            <Separator/>
            <DataTable columns={columns} data={data} searchKey='name'/>
        </>

    )
}

export default ColorsClient