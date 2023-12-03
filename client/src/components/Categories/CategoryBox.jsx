import React from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import qs from "query-string"

const CategoryBox = ({label, icon: Icon}) => {
    const [params, setParams] = useSearchParams();
    const value = params.get('category');
    const navigate = useNavigate();
    const handleClick = () =>{
        let currentQuery = {};
        if(params){
          currentQuery = qs.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery,
            category: label,
        }
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        },{skipNull: true}
        )
        navigate(url)
    }
    // console.log(value);
    return (
        <div
        onClick={handleClick}
         className='flex flex-col cursor-pointer p-3 justify-center items-center gap-2 border-b-2 hover:text-neutral-800 text-neutral-500 border-transparent '>
          <Icon size={26}/>
          <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default CategoryBox;