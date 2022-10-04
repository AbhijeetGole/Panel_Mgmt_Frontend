import { React } from "react";
import "./Assets/getallslots.module.css";
import { useNavigate } from "react-router";
import Authservice from '../services/auth-service.js'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SlotInfo = ({
  id,
  name,
  startdate,
  enddate,
  starttime,
  endtime,
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
                progress: undefined,})
                setTimeout(()=>
          setFlag(true),2500)
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
          className="actionicon" style={{cursor: "pointer"}}
          onClick={() => {
            updateslot();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
        </td>
        <td
          className="actionicon" style={{cursor: "pointer"}}
          onClick={() => {
            deleteslot();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
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

export default SlotInfo;
