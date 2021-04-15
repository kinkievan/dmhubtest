import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  componentDidMount() {

  }
  getline = () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', '1655855408');
    params.append('client_secret', 'ed35133bdd960031caef215680dc75fb');
    params.append('code', 'ttR7PmJssrCk7NjfOTXZ');
    params.append('redirect_uri', 'https://14045206873d.ngrok.io');
    axios.post('https://api.line.me/oauth2/v2.1/token', params, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },

    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  getUser = () => {
    const params = new URLSearchParams();
    params.append('id_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FjY2Vzcy5saW5lLm1lIiwic3ViIjoiVWNhZDdhZTk3OWQ2MjA3MGYzYTA0YWMxYmIxYjZmOTQ5IiwiYXVkIjoiMTY1NTg1NTQwOCIsImV4cCI6MTYxODQ1ODc1OCwiaWF0IjoxNjE4NDU1MTU4LCJub25jZSI6IjA5ODc2eHl6IiwiYW1yIjpbImxpbmVzc28iXSwibmFtZSI6Imtpa2nvvIjnv4zntq3lqr0pIiwicGljdHVyZSI6Imh0dHBzOi8vcHJvZmlsZS5saW5lLXNjZG4ubmV0LzBoQUpqQ0NOXzRIbVZYT2doaGZRMWhNbXRfRUFnZ0ZCZ3RMMWdEQXlFeUVGSjhXZ2xnT1Y4R0JDVm9TRllvV1Z0aGJsUUVBbkE0RXdKeSIsImVtYWlsIjoia2lua2lldmFuQGhvdG1haWwuY29tIn0.W294II__T3MUnd_BCDm0lZM0-VDkBrlYvgpYiXM9VGI');
    params.append('client_id', '1655855408');
    axios.post('https://api.line.me/oauth2/v2.1/verify', params, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },

    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {

    return (
      <div><button onClick={this.getUser}>0000000000000000</button></div>
    )
  }
}
export default App;
