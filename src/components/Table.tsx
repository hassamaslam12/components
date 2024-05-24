import React from 'react'

const Table = (props:any) => {
   
    const { tableKeys,table} = props
  return (
    <div>
         <table className='table'>

<thead>
  <tr>
    {tableKeys.map((e: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined,i: React.Key | null | undefined)=><th scope='col' key={i}>{e}</th>)}
  </tr>
</thead>
<tbody>
  {table.map((e: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; fatherName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; age: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; gender: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined },i: any) => <tr>
      <td>{e.id}</td>
      <td>{e.name}</td>
      <td>{e.fatherName}</td>
      <td>{e.age}</td>
      <td>{e.gender}</td>
  </tr>)}
</tbody>
</table>
    </div>
  )
}

export default Table
