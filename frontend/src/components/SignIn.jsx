import "./SignIn.css";

export const SignIn = () => {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form">
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
