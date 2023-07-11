export const Contact = () => {
  return (
    <div className="container-fluid">
      <h2 className="display-4 m-3">Contact</h2>
      <div className="lead">
        <p>
          Please fill out the contact form and hit the{' '}
          <span className="btn btn-primary">Send</span> button to contact me.
        </p>
      </div>
      <div className="m-5">
        <form>
          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="Name"
                />
                <label htmlFor="floatingName">Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingSurname"
                  placeholder="Surname"
                />
                <label htmlFor="floatingSurname">Surname</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingUserName"
                  placeholder="UserName"
                />
                <label htmlFor="floatingUserName">User Name</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                >
                  <option selected>...</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>
                <label htmlFor="floatingSelectGrid">Sex</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelectAge"
                >
                  <option selected>...</option>
                  <option value="1">not less than 16 and less than 25</option>
                  <option value="2">more than 25 but less than 65</option>
                  <option value="3">more than 65</option>
                </select>
                <label htmlFor="floatingSelectAge">Age</label>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input is-invalid"
                  type="checkbox"
                  value="agree"
                  id="invalidCheck"
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="invalidCheck"
                >
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(e.target);
                }}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
