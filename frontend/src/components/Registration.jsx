export const Registration = () => {
  return (
    <div>
      <h2>Registration</h2>
      <form>
        <label>
          Email: <input type="email" required />
        </label>
        <label>
          Username: <input type="text" required />
        </label>
        <label>
          Password: <input type="password" required />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
