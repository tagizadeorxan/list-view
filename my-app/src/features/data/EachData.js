import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {fetchEachData} from './dataAPI'
import { TaggedContentCard } from "react-ui-cards"

const EachData = () => {

    const params = useParams();
     const [item,setItem] = useState()
    
useEffect(()=>{
const fetchItem = async() => {
    const data = await fetchEachData(params.index)
    console.log(data)
    if(data){
        setItem(data)
    }
    return data
}

fetchItem().catch(console.error)

},[])

if(!item) { return <h1>Loading...</h1>

} 

    return (
        <>
        <TaggedContentCard
    title={item.name}
    description={item.desc[0]}
    tags={item.components}

/>
</>
    )
}

export default EachData