export const loginStart = () => ({
    type : "LOGIN_START",
});
export const loginSuccess = (user) => ({
    type : "LOGIN_SUCESS",
    payload : user
});
export const loginFailure = () => ({
    type : "LOGIN_FAILURE",
});
export const logout = () => ({
    type : "LOGOUT",
});