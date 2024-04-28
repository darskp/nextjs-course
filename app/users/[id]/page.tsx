"use client"

import React from 'react';
import useSWR from 'swr';

const UserByID = ({ params }: { params: { id: number } }) => {
    const url = `${process.env.NEXT_PUBLIC_URL}/${params.id}`
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(url, fetcher);
    console.log(data, error);

    return (
        <div>{params.id}</div>
    );
};

export default UserByID;
