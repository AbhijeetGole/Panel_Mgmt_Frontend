import { React } from "react";
import "./Assets/getallslots.module.css";
import { useNavigate } from "react-router";
import Authservice from '../services/auth-service.js'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const YourSlotInfo= ({
  id,
  name,
  startdate,
  enddate,
  starttime,
  endtime,
  Interviewer,
  skills,
  active,
  usage,
  setFlag
}) => {
  const navigate = useNavigate();
  const updateslot = () => {
    navigate("/Updateslot_2", {
      state: {
        id: id,
        name: name,
        startdate: startdate,
        enddate: enddate,
        starttime: starttime,
        endtime: endtime,
        Interviewer:Interviewer,
        skills: skills,
        active: active,
        usage: usage,
      },
    });
  };

  const deleteslot = async () => {
    console.log("in submit");
    try {
      await Authservice.deleteslot(id).then(
        () => {
          toast.success('Slot deleted successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          })
          setTimeout(() =>
            setFlag(true), 2500)
        },
        (error) => {
          toast.warn('Something went wrong!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    } catch (err) {
      toast.warn('Something went wrong!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <tbody className="list">
      <tr className="table-row">
        <td></td>
        <td>{id}</td>
        <td>{name}</td>
        <td>{startdate}</td>
        <td>{enddate}</td>
        <td>{starttime}</td>
        <td>{endtime}</td>
        <td>{skills}</td>
        {active ? <td>Active</td> : <td>Inactive</td>}
        {usage ? (
          <td id="success">
            <span className="badge rounded-pill text-bg-success">Booked</span>
          </td>
        ) : (
          <td id="fail">
            <span className="badge rounded-pill text-bg-danger">Unbooked</span>
          </td>
        )}

        <td
          className="actionicon" style={{ cursor: "pointer" }}
          onClick={() => {
            updateslot();
          }}
        >
          
        </td>
        <td
          className="actionicon" style={{ cursor: "pointer" }}
          onClick={() => {
            deleteslot();
          }}
        >
          
        </td>
        <td></td>
      </tr>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </tbody>
  );
};

export default YourSlotInfo;
