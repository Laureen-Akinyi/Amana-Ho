import React from 'react'
import Example from './Nav'
import { Container, Row } from 'reactstrap'
import { Button } from 'reactstrap';
import LeadsModal from './Modals/LeadsModal';
import { Link } from 'react-router-dom';

class DoctorLeads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamleads: []
    }
  }
  getItems() {
    fetch("http://localhost:9292/doctor_leads")
      .then(res => res.json())
      .then(
        (doctorleads) => {
          this.setState({ doctorleads: doctorleads });
        },
        (error) => {
          alert(error);
        }
      )
  }

  addItemToState = (doctorlead) => {
    this.setState(prevState => ({
        doctorleads: [...prevState.doctorleads, doctorlead]
    }))
  }

  updateState = (doctorlead) => {
    const doctorleadIndex = this.state.doctorleads.findIndex(data => data.id === doctorlead.id)
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.doctorleads.slice(0, doctorleadIndex),
      // add the updated item to the array
      doctorlead,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.doctorleads.slice(doctorleadIndex + 1)
    ]
    this.setState({ doctorleads: newArray })
  }
  componentDidMount() {
    this.getItems()
  }
  render() {
    return (
      <div>
        <Example />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>


            {this.state.doctorleads.map(doctorlead =>
              <tr >
                <th scope="row">{teamlead.id}</th>
                <td>{teamlead.firstname}</td>
                <td>{teamlead.lastname}</td>
                <td>{teamlead.phone}</td>
                <td>{teamlead.department}</td>
                <td>
                  <div style={{ width: "110px" }}>
                    <LeadsModal buttonLabel="Edit" item={doctorlead} updateState={this.props.updateState} />
                    <Button color="danger" >Del</Button>
                  </div>
                </td>
              </tr>
            )}

          </tbody>

        </table>
        <Container className="App">
          <Row>
            <LeadsModal buttonLabel="Add Item" />
            <Link to="/home">
              <Button variant="outlined">
                Doctors
              </Button>
            </Link>
          </Row>
        </Container>
      </div>
    )

  }
}
export default DoctorLeads