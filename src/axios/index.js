import axios from "axios";
export default axios.create({
	baseURL: './',
	headers:{
		"Content-Type": "multipart/form-data"
	}
});