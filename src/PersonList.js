import React from 'react'
import axios from 'axios';
import './PersonList.css';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });

        console.log(persons);
      })
  }

  render() {
    return (
      <div>
        {this.state.persons.map(person => (
          <div className="profile" key={person.login.uuid}>
            <div className="name__container">
              <span className="name">{person.name.first} {person.name.last} - {person.login["uuid"]}</span>
            </div>

            <div className="profile__container">
              <img src={person.picture.thumbnail} alt="Logo"/>
              <div className="profile__details">
                <span>User Name: {person.login.username}</span>
                <span>Gender: {person.gender}</span>
                <span>Time Zone Description: {person.location.timezone.description}</span>
                <span>Address: {person.location.street.number} {person.location.street.name} {person.location.city} {person.location.street.state} {person.location.street.country}</span>
                <span>Email: {person.email}</span>
                <span>Birth Date and Age: {person.dob.date} {person.dob.age}</span>
                <span>Register Date: {person.registered.date}</span>
                <span>Phone #: {person.phone}</span>
                <span>Cell#: {person.cell}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    )
  }
}