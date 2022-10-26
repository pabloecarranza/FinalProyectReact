import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom'

const Item = () => {
    const params = useParams()

    return (
        <div>
            <ItemDetailContainer params={params}/>
        </div>
    )
}

export default Item
