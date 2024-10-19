import { CardHeader } from '@mui/material'
import React from 'react'
import CardContent from './CardContent';
import CardFooter from './CardFooter';

function Card(props) {
  return (
    <div style={{ maxWidth: "150px", padding: "5px", border: "1px solid black"}} >
      <CardHeader item={props.item}/>
      <CardContent item={props.item}/>
      <CardFooter item={props.item}/>
    </div>
  )
}

export default React.memo(Card);