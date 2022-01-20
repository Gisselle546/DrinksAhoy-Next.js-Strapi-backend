import React from 'react'
import  Details  from '../Details'
import {ListWrapper } from './index.style';

interface Props{
    place:any
}


const List = ({place}:Props) => {
    return (
        <ListWrapper>
        {  place&&place.map((details:any)=>{
              return<Details details={details}/>
          })
        }
      </ListWrapper>
    )
}

export default List;
