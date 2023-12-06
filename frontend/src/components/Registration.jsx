import './Registration.css';

export const Registration = () => {
  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form className="registration-form">
        <label htmlFor="email">
          Email: <input type="email" id="email" required />
        </label>
        <label htmlFor="username">
          Username: <input type="text" id="username" required />
        </label>
        <label htmlFor="password">
          Password: <input type="password" id="password" required />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
