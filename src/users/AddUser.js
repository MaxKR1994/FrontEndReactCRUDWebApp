import React from "react";

export default function AddUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rouned p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <div className="mb-3">
            <input
              type={"text"}
              className="form=control"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <input
              type={"text"}
              className="form=control"
              placeholder="Enter your username"
              name="username"
            />
          </div>
          <div className="mb-3">
            <input
              type={"text"}
              className="form=control"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <button type="submit" className="btn btn-outline-primary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
