'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const User = () => {
    const [user, setuser] = useState<any[]>([])

    const fetchData = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/users`);
            const data = await res.json();
            console.log(data.users);
            setuser(data.users)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div>user data</div>
            {user.length && user?.map((item: any, index: number) =>
                <Link href={`users/${item.id}`} key={item.id}>
                    <div>{item.firstName}</div>
                </Link>
            )}
        </>
    )
}

export default User