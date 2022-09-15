import React from 'react'

function ListingComponent(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <p>{props.id}</p>
    </>
  )
}

export default ListingComponent