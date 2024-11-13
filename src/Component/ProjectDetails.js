import React from "react";
import "./MainContent.css";
import "./ProjectDetails.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

import NoResults from "./images/no-result.png";

export default function ProjectDetails() {
  return (
    <div className="details_container">
      <div className="details_header">
        <div className="details_header_left">
          <IoArrowBackOutline size={24} className="icon" />
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
            <input type="text" id="id" name="id" placeholder="MNIST" />
            <br></br>
          </div>
          <div className="details_input_block">
            <label for="owner">Owner</label>
            <br />
            <input
              type="email"
              id="owner"
              name="owner"
              placeholder="nicolar.schifano@gmail.com"
            />
            <br></br>
          </div>
          <div className="details_input_block">
            <label for="created">Created</label>
            <br />
            <input
              type="text"
              id="created"
              name="created"
              placeholder="04/12/2002"
            />
            <br></br>
          </div>
          <div className="details_input_block">
            <label for="updated">Last Updated</label>
            <br />
            <input
              type="id"
              id="updated"
              name="updated"
              placeholder="04/12/2002"
            />
            <br></br>
          </div>
        </div>
      </div>
      <div>
        <div className="members_content d-flex justify-content-between">
          <div className="members_heading">
            <h2>Members</h2>
          </div>
          <div>
            {" "}
            <button className="new_members">Add Members</button>
          </div>
        </div>
        <div className="overflows margin">
          <table className="table table-bordered table-hover">
            <thead className="table_color">
              <tr className="table_row table_row_selected">
                <th className="members_name members_name_selected">
                  Member Name
                </th>
                <th className="members_email members_email_selected">
                  Member Email
                </th>
                <th className="actions  actions_selected">Action</th>
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
        <div className="assets_content d-flex justify-content-between">
          <div className="assets_heading">
            <h2>Assets</h2>
          </div>
          <div>
            {" "}
            <button className="new_assets">Add Dataset or Model</button>
          </div>
        </div>
        <div className="overflows margin">
          <table className="table table-bordered table-hover">
            <thead className="table_color">
              <tr className="table_row table_row_selected">
                <th className="asset_name asset_name_selected">Asset Name</th>
                <th className="modality  modality_selected">Modality</th>
                <th className="type type_selected">Type</th>
                <th className="data_provider data_provider_selected">
                  Provider
                </th>
                <th className="homepage homepage_selected">Homepage</th>
                <th className="actions actions_selected">Action</th>
              </tr>
            </thead>
          </table>
          <div className="no-result">
            <img src={NoResults} alt="no-result" />
            <h1>No results..</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
