import React, { useState} from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useRouter } from "next/router";

const flow = () => {
  const router = useRouter();
  // const onSubmit = () => {
  //   router.push("/invoice");

  // };

  return (
    <>
      <div className="container my-5 mx-10">
        <div className="shadow-4 rounded-5 mx-60 overflow-hidden">
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>Time</th>
                <th>Status</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <span className="fw-bold mb-1">
                        <div>8am - 9am</div>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success rounded-pill">Active</span>
                </td>
                <td>#1000</td>
                <td>
                  <button type="button" className="btn btn-link btn-sm btn-rounded">
                    Add
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <span className="fw-bold mb-1">9am - 10am</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-danger rounded-pill">
                    Non-active
                  </span>
                </td>
                <td>#1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Add
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <span className="fw-bold mb-1">10am - 11am</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-danger rounded-pill">
                    Non-active
                  </span>
                </td>
                <td>#1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Add
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <span className="fw-bold mb-1">11am - 12pm</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success rounded-pill">Active</span>
                </td>
                <td>#1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Add
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">12pm - 1pm</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success rounded-pill">Active</span>
                </td>
                <td>#1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Add
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">1pm - 2pm</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-danger rounded-pill">
                    Non-active
                  </span>
                </td>
                <td>#1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Add
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">2pm - 3pm</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-danger rounded-pill">
                    Non-active
                  </span>
                </td>
                <td>#1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Add
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">3pm - 4pm</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success rounded-pill">Active</span>
                </td>
                <td>#1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Add
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">3pm - 4pm</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-success rounded-pill">Active</span>
                </td>
                <td>#1000</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
          <button className="bg-blue rounded-sm mt-100 ">Submit</button>
      </div>
    </>
  );
};

export default flow;
