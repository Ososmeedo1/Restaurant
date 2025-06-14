import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuBtn() {
  return <>
    <Link to={"menu"}>
      <button className='btn btn-success btn-lg' type='button'>Our Full Menu</button>
    </Link>
  </>
}
