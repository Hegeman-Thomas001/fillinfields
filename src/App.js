import { Component } from 'react';
import Input from './components/Input/Input';
import Output from './components/Output/Output';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      country: "",
    }
  }

  onInputChange = (evt) => {
    const { id, value } = evt.target;
    this.setState({ [id]: value });
  }

  render() {
    const { firstName, lastName, country } = this.state;
    return (
      <>
        <section className='nice'>
          <Input id="firstName" phText="first name" inputChange={this.onInputChange} />
          <Output output={firstName || "first name"} />
        </section>
        <section className='nice'>
          <Input id="lastName" phText="last name" inputChange={this.onInputChange} />
          <Output output={lastName  || "last name"} />
        </section>
        <section className='nice'>
          <Input id="country" phText="country" inputChange={this.onInputChange} />
          <Output output={country || "country"} />
        </section>
      </>
    );
  }
}

export default App;
