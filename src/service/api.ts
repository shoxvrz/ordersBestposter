import axios from 'axios';

export const fetchOrderById = async (id: string) =>{
    const response = await axios.get(`https://6654bb3e1c6af63f46791dbf.mockapi.io/bestposter7/ordersId/${id}`)
    return response.data;
}