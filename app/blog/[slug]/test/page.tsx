'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const about = ({ params }: { params: { slug: string } }) => {
    console.log(params);
    const router = useRouter()

    return (
        <>
            <button onClick={() => router.push(`/blog/${params.slug}`) } className='text-black p-4 bg-gray-800'>Push</button>
            <div className='h-screen w-full'>slug - {params.slug}</div>
        </>
    )
}

export default about