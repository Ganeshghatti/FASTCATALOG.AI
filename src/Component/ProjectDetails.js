import React from "react";
import "./MainContent.css";
import "./ProjectDetails.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

export default function ProjectDetails() {
  return (
    <div className="details_container">
      <div className="details_header">
        <div className="details_header_left">
          <IoArrowBackOutline size={40} className="icon" />
          <h3 className="details_title">Edit - A New Project</h3>
        </div>
        <div className="details_header_right">
          <h4>Actions</h4>
          <FaChevronDown size={20} />
        </div>
      </div>
      <div className="details_inputs_container">
        <div>
          <h4>Project Description</h4>
        </div>
        <div className="details_input_collection">
          <div className="details_input_block">
            <label for="id">User Custom Id</label>
            <br />
            <input type="text" id="html" name="id" placeholder="MNIST" />
            <br></br>
          </div>
          <div className="details_input_block">
            <label for="id">Owner</label>
            <br />
            <input
              type="email"
              id="html"
              name="id"
              placeholder="nicolar.schifano@gmail.com"
            />
            <br></br>
          </div>
          <div className="details_input_block">
            <label for="id">Created</label>
            <br />
            <input type="id" id="html" name="id" placeholder="04/12/2002" />
            <br></br>
          </div>
          <div className="details_input_block">
            <label for="id">Last Updated</label>
            <br />
            <input type="id" id="html" name="id" placeholder="04/12/2002" />
            <br></br>
          </div>
        </div>
      </div>
      <div>
        <div className="myproject-content d-flex justify-content-between">
          <div className="myproject-heading">
            <h2>Members</h2>
          </div>
          <div>
            {" "}
            <button className="new_project">Add Members</button>
          </div>
        </div>
        <div className="overflows margin">
          <table className="table table-bordered table-hover">
            <thead className="table_color">
              <tr className="table_row table_row_selected">
                <th className="full_name full_name_selected">Member Name</th>
                <th className="modality  modality_selected">Member Email</th>
                <th className="Data_provider Data_provider_Selected">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`table_data_row table_data_row_selected `}>
                <td>A New Project 5</td>
                <td>newproject@gmail.com</td>

                {/* <td>{data.dataAvailability}</td>
                <td>{data.personalData}</td> */}

                <td>
                  <button className="edit_link">Remove Member</button>
                </td>
              </tr>
              <tr className={`table_data_row table_data_row_selected `}>
                <td>A New Project 4</td>
                <td>newproject@gmail.com</td>

                {/* <td>{data.dataAvailability}</td>
                <td>{data.personalData}</td> */}

                <td>
                  <button className="edit_link">Remove Member</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="">
        <div className="myproject-content d-flex justify-content-between">
          <div className="myproject-heading">
            <h2>Assets</h2>
          </div>
          <div>
            {" "}
            <button className="new_project">Add Dataset or Model</button>
          </div>
        </div>
        <div className="overflows margin">
          <table className="table table-bordered table-hover">
            <thead className="table_color">
              <tr className="table_row table_row_selected">
                <th className="full_name full_name_selected">Asset Name</th>
                <th className="modality  modality_selected">Modality</th>
                <th className="Data_provider Data_provider_Selected">Type</th>
                <th className="Data_provider Data_provider_Selected">
                  Provider
                </th>
                <th className="Data_provider Data_provider_Selected">
                  Homepage
                </th>
                <th className="Data_provider Data_provider_Selected">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`table_data_row table_data_row_selected `}></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
