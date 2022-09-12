import React from 'react';
// import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
// import AddEditForm from './Forms/FormAddEdit';

class Doctors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: []
        }
    }

        componentDidMount() {
            fetch("http://localhost:9292/doctors")
            .then(res => res.json())
            .then(
                (doctors) => {
                    this.setState({ doctors: doctors });
                },
                (error) => {
                    alert(error);
                }
            )
        }
    
   render() {

    
    return(
        <div>
            <table class="table" >
  
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone</th>
      <th scope="col">Department</th>
      {/* <th scope="col">Action</th> */}
      <th>
      </th>
    </tr>
    
  </thead>
  <tbody>
  {this.state.doctors.map(doctor =>
    <tr>
      <th scope="row">{doctor.id}</th>
      <td>{doctor.first_name}</td>
      <td>{doctor.last_name}</td>
      <td>{doctor.phone}</td>
      <td>{doctor.department}</td>
    </tr>
    
  )
   }
  </tbody>
</table>
        </div>
    )
}
}

export default Doctors