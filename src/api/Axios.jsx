import axios from "axios";

const instance = axios.create({
  baseURL: "https://aveosoft-react-assignment.herokuapp.com",
});

export default instance;
