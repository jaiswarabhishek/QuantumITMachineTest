import React from 'react'
import Table from 'react-bootstrap/Table';

function UsersTable() {
  return (
 <Table hover size="sm" className='w-50 mx-auto mt-5'  >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>4/10/2023</td>
          <td>Active</td>
          <td>Edit</td>
        </tr> 
       <tr>
          <td>2</td>
          <td>Alex</td>
          <td>4/10/2023</td>
          <td>Active</td>
          <td>Edit</td>
        </tr>
         <tr>
          <td>3</td>
          <td>John</td>
          <td>4/10/2023</td>
          <td>Active</td>
          <td>Edit</td>
        </tr> 
        <tr>
          <td>4</td>
          <td>John</td>
          <td>4/10/2023</td>
          <td>Active</td>
          <td>Edit</td>
        </tr> 
        <tr>
          <td>5</td>
          <td>John</td>
          <td>4/10/2023</td>
          <td>Active</td>
          <td>Edit</td>
        </tr> 
        <tr>
          <td>6</td>
          <td>John</td>
          <td>4/10/2023</td>
          <td>Active</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default UsersTable
