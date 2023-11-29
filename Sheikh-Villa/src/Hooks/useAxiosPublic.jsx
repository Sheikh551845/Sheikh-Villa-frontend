import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://back-end-psi-six.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;