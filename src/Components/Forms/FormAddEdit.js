import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    first_name: '',
    last_name: '',
    age: '',
    weight: '',
    phone: '',
    kin: '',
    drug_admin: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    fetch('http://localhost:9292/patients', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        age: this.state.age,
        weight: this.state.weight,
        phone: this.state.phone,
        kin: this.state.kin,
        drug_admin: this.state.drug_admin

      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    fetch('http://localhost:9292/patients', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        age: this.state.age,
        weight: this.state.weight,
        phone: this.state.phone,
        kin: this.state.kin,
        drug_admin: this.state.drug_admin
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, first_name, last_name, age, weight, phone, kin, drug_admin } = this.props.item
      this.setState({ id, first_name, last_name, age, weight, phone, kin, drug_admin })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input type="text" name="first_name" id="first_name" onChange={this.onChange} value={this.state.first_name === null ? '' : this.state.first_name} />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input type="text" name="last_name" id="last_name" onChange={this.onChange} value={this.state.last_name === null ? '' : this.state.last_name}  />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="text" name="age" id="age" onChange={this.onChange} value={this.state.age === null ? '' : this.state.age}  />
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight</Label>
          <Input type="text" name="weight" id="weight" onChange={this.onChange} value={this.state.weight === null ? '' : this.state.weight}  placeholder="ex. 82" />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" onChange={this.onChange} value={this.state.phone === null ? '' : this.state.phone}  placeholder="0711223344" />
        </FormGroup>
        <FormGroup>
          <Label for="kin">Kin</Label>
          <Input type="text" name="kin" id="kin" onChange={this.onChange} value={this.state.kin}  />
        </FormGroup>
        <FormGroup>
          <Label for="drug_admin">Medication</Label>
          <Input type="text" name="drug_admin" id="drug_admin" onChange={this.onChange} value={this.state.drug_admin}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm