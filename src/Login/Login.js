import { useState } from 'react';
import axios from 'axios';
import { validateEmail, validatePassword, validateUser } from '../util';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      if (validateEmail(e.target.value)) setIsValidEmail(true);
      else setIsValidEmail(false);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
      if (validatePassword(e.target.value)) setIsValidPassword(true);
      else setIsValidPassword(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const { data } = await axios.post(
      //     'http://dev.rapptrlabs.com/Tests/scripts/user-login.php',
      //     {
      //       user_email: email,
      //       user_password: password,
      //     }
      //   );
      // I get an error 'Some of the Required Params were not passed to this script' so I built validateUder function to act like the server
      const data = validateUser(email, password);
      if (data.user_id) props.setLoggedIn(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="login">
      <h1>Rapptr Labs</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <div className="input-container">
          <i className="fas fa-user"></i>
          <input
            className={isValidEmail || !email ? '' : 'validation-error'}
            required
            type="email"
            name="email"
            placeholder="​user@rapptrlabs.com"
            value={email}
            onChange={handleChange}
          />
          <small>
            {isValidEmail || !email ? <span>&nbsp;</span> : 'Not a valid email'}
          </small>
        </div>

        <label>Password</label>
        <div className="input-container">
          <i className="fas fa-lock"></i>
          <input
            className={isValidPassword || !password ? '' : 'validation-error'}
            required
            type="password"
            name="password"
            placeholder="​Must be at least 4 characters"
            value={password}
            onChange={handleChange}
          />
          <small>
            {isValidPassword || !password ? (
              <span>&nbsp;</span>
            ) : (
              'Not a valid password'
            )}
          </small>
        </div>

        <button
          type="submit"
          disabled={!(isValidEmail && email && isValidPassword && password)}
        >
          Log In
        </button>
        {error ? (
          <small className="submission-error">
            The server could not be reached. Please try again later.
          </small>
        ) : null}
      </form>
    </div>
  );
};

export default Login;
