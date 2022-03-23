import axiosInstance   from "../axiosInstance"
class ComponentAPI
{
    static getOffer(id)
    {
        return axiosInstance.get(`v2/${id}`)
    }
}
export default ComponentAPI
