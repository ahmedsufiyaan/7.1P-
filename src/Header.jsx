/* Header.js */
import './Header.css';
import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="deakin">
        <div className="left">
          <p>DEV@DEAKIN</p>
        </div>
        <div className="right">
          <div className="s">
            <Input icon="search plus" placeholder="Search" />
          </div>
          <div className="button">
            <Button className="post">Post</Button> {/* Update the class name to "post" */}
            <Link to="/login">
              <Button className="login">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

