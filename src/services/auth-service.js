import axios from "axios";
const API_URL = "http://localhost:8080";
const API_URL1 = "http://localhost:4000/panel";
const login = async (username, password) => {

  const user = {
    username,
    password,
  };
  const response = await axios.post(API_URL + "/user/login", user);
  const data = response.data;
  console.log(data)
  localStorage.setItem("user", JSON.stringify(response.data));
  console.log("user",localStorage.getItem("user"))
  return data;
};

const register = async (
  firstname,
  lastname,
  username,
  password,
  email,
  phone, skills
) => {
  // return axios
  //   .post(API_URL + "/login", {
  //     username,
  //     password
  //   })
  //   .then(response => {
  //     if (response.data.accessToken) {
  //       localStorage.setItem("user", JSON.stringify(response.data));
  //     }
  //     console.log(response.data)
  const user = {
    firstname,
    lastname,
    username,
    password,
    email,
    phone,
    skills,
    active: true
  };
  const response = await axios.post(API_URL + "/user/register", user);
  return response.data;
};

const createSlot = async (
  slotId,
  panelName,
  startDate,
  endDate,
  starttime,
  endtime,
  skills,
  slotused,
  active
) => {
  const slot = {
    slotId,
    panelName,
    startDate,
    endDate,
    starttime,
    endtime,
    skills,
    slotused,
    active,
  };
  console.log("In slot api");
  const response = await axios.post(API_URL + "/slot/createSlot", slot);
  return response.data;
};

const deleteslot = async (id) => {
  console.log("In delete slot api");
  const response = await axios.delete(API_URL + "/slot/" + id);
  return response.data;
};
const deletePanel = async (panelName) => {
  console.log("In delete panel pi");
  const response = await axios.delete(API_URL1 + "/" + panelName);
  return response.data;
};

const createPanel = async (panelName, skills, Interviewer) => {
  const Active = true;
  const panel = {
    panelName,
    skills,
    Interviewer,
    Active,
  };
  console.log("In Create Panel Api");
  const response1 = await axios.post(API_URL1 + "/createPanel", panel);
  return response1.data;
};

const updateSlot = async (
  slotId,
  panelName,
  startDate,
  endDate,
  starttime,
  endtime,
  skills,
  slotused,
  active
) => {
  const slot = {
    slotId,
    panelName,
    startDate,
    endDate,
    starttime,
    endtime,
    skills,
    slotused,
    active,
  };
  console.log("in update slot api");
  const response1 = await axios.put(API_URL + "/slot/" + slotId, slot);
  console.log("api sent", response1.data)

  return response1.data;
};

const updatepanel = async (
  panelName,
  skills,
  Interviewer,
  Active

) => {
  const panel = {
    panelName,
    skills,
    Interviewer,
    Active

  };
  console.log("in update panel api");
  const response1 = await axios.put(API_URL1 + "/" + panelName, panel);
  console.log("api sent", response1.data)
  return response1.data;
};
const getSlot = async () => {
  console.log(" inside getSlot auth service");
  const response1 = await axios.get(API_URL + "/slot/getSlot");
  console.log("after api", response1.data.getSlot);
  return response1.data.getSlot;
};
const getPanel = async () => {
  const response1 = await axios.get(API_URL1 + '/getPanel');
  return response1.data;
}

const getUserinfo = async () => {
  const response1 = await axios.get(API_URL + '/user/userinfo');
  return response1.data;
}

const highestSlot = async () => {



  const response = await axios.get(API_URL + '/slot/highestslot')

  return response.data;

}



const unusedSlot = async () => {

  const response = await axios.get(API_URL + '/slot/unusedslots')
  return response.data;

}
const logout =async()=>{
  const response = await axios.delete(API_URL + '/user/logout')
  localStorage.clear("user")
  return response.data;


}
const Authservice = {
  login,
  register,
  createSlot,
  createPanel,
  deleteslot,
  deletePanel,
  updateSlot,
  updatepanel,
  getSlot,
  getPanel,
  getUserinfo,
  highestSlot,
  unusedSlot,logout
};
export default Authservice;
