import axiosLib from "axios";

export default function axios() {
    axiosLib.defaults.headers.common = {
        Accept: "application/json",
    };

    axiosLib.defaults.withCredentials = true;

    return axiosLib;
}
