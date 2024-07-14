const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: "http://192.168.56.1:1337/api",
});

const getCategories = () => axiosClient?.get("/categories?populate=*");

const getSliderList = () =>
    axiosClient
        ?.get("/sliders?populate=*")
        .then((response) => response.data.data);

const getCategoryList = () =>
    axiosClient
        .get("/categories?populate=*")
        .then((response) => response.data.data);

export default {
    getCategories,
    getSliderList,
    getCategoryList
};
