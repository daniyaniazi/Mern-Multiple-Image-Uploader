import axios from "axios";

const baseUrl = "http://localhost:8080/api/";

export const singleFileUpload = async (data) => {
  try {
    await axios.post(baseUrl + "/singleFile", data);
  } catch (error) {
    throw error;
  }
};

export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get(baseUrl + "/allSingleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};

export const MultipleFileUpload = async (data) => {
  try {
    await axios.post(baseUrl + "/multipleFile", data);
  } catch (error) {
    throw error;
  }
};
export const getMultipleFiles = async () => {
  try {
    const { data } = await axios.get(baseUrl + "/allMultipleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};
