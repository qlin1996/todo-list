import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted');
    // const { data } = await axios.post(
    //   'http://dev.rapptrlabs.com/Tests/scripts/user-login.php',
    //   {
    //     user_email: email,
    //     user_password: password,
    //   }
    // );
  };

  return (
    <div className="Login">
      <h1>Rapptr Labs</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <div className="input-container">
          <i class="fas fa-user"></i>
          <input
            required
            type="email"
            placeholder="​user@rapptrlabs.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <label>Password</label>
        <div className="input-container">
          <i class="fas fa-lock"></i>
          <input
            required
            type="password"
            placeholder="​Must be at least 4 characters"
            pattern=".{4,16}"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit" disabled={!(email && password)}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
