import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'


class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch(`http://localhost:9292/patients/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(item => {
        this.props.deleteItemFromState(id)
      })
      .catch(err => console.log(err))
    }

  }

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.age}</td>
          <td>{item.weight}</td>
          <td>{item.phone}</td>
          <td>{item.kin}</td>
          <td>{item.drug_admin}</td>
          
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Phone</th>
            <th>Kin</th>
            <th>Drug Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable