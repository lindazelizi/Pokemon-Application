import React from 'react'

function Pokemon({data}) {
    const {
      name,
      sprites,
      types,
      weight,
      height,
    } = data
  return (

    <div>
      <h1>{
        name
        }</h1>
        <img src={sprites.front_default} alt={name} />
        <p>
         <strong>Typ(er):</strong>{" "}
         {types.map((type) => type.type.name).join(", ")}
          </p>
        <p>
          weight = {weight} kg
        </p>
        <p>
          height = {height} meter
        </p>
    </div>
  )
}

export default Pokemon