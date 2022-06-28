import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user,dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.get("auth/login", user);
        dispatch(loginSuccess(res.data));

    } catch (err) {
        dispatch(loginFailure());
    }
}