import { React } from "react";
import "./Assets/getallslots.module.css";
import { useNavigate } from "react-router";
import Authservice from '../services/auth-service.js'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserInfo = ({
    username,
    firstname,
    lastname,
    email,
    phone,
    skills,
    active
}) => {

    return (
        <tbody className="list">
            <tr className="table-row">
                <td></td>
                <td>{username}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{skills}</td>
                {active ? (
                    <td id="success">
                        <span className="badge rounded-pill text-bg-success">Active</span>
                    </td>
                ) : (
                    <td id="fail">
                        <span className="badge rounded-pill text-bg-danger">Inactive</span>
                    </td>
                )}

                <td></td>
            </tr>


        </tbody>
    );
};

export default UserInfo;
