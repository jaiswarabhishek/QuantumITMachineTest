import axios from 'axios';
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
});

// User Registration
export const register = async (user) => {
    try {
        const response = await api.post('/register', user);
        localStorage.setItem('user', JSON.stringify(response.data));
        toast.success('Registration successful');
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error);
        console.error(error);
    }
};

// User Login
export const login = async (user) => {
    try {
        const response = await api.post('/login', user);
        localStorage.setItem('user', JSON.stringify(response.data));
        toast.success('Login successful');
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error);
        console.error(error);
    }
};