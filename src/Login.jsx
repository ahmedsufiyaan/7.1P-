import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './Login.css';
import { Link } from 'react-router-dom';
import { signinAuthUserWithEmailAndPassword } from './Auth/Firebase';

function Login() {
  const [contact, setcontact] = useState({
    email: '',
    password: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const { email, password } = contact;

  async function handleClick() {
    try {
      const response = await signinAuthUserWithEmailAndPassword(email, password);
      setLoggedIn(true);
      setUserEmail(response.user.email);
    } catch (error) {
      console.log('error in login', error.message);
      alert('Account does not exist');
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="container">
        <Form>
          <Link to="/signup">
            <div className="signUP">
              <Button circular color="black" icon="signup" />
            </div>
          </Link>
          <Form.Group>
            <div className="email">
              <div className="email_label">
                <label>Email</label>
              </div>
              <div className="email_input">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handlepass}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group>
            <div className="email">
              <div className="email_label">
                <label> Password </label>
              </div>
              <div className="password_input">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handlepass}
                />
              </div>
            </div>
          </Form.Group>
          <div className="checkbox">
            <Form.Checkbox label="I have read and agreed to the Terms and Conditions." />
          </div>
          <div className="l">
            <Button onClick={handleClick} type="submit">
              Login
            </Button>
          </div>
          {loggedIn && (
            <div>
              <h3>Logged in as: {userEmail}</h3>
            </div>
          )}
        </Form>
      </div>
      <footer className="f">
         DEV@Deakin Welcome Email
      </footer>
    </div>
  );
}

export default Login;
