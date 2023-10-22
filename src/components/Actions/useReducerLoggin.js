export const FIELD = 'FIELD';
export const LOGIN = 'LOGIN';
export const SUCCESS = 'SUCCES';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';

export const initialState = {
    userName: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false,
}

export const logginReducer = (state, action) => {
    switch (action.type) {
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case LOGIN:
            return {
                ...state,
                error: '',
                isLoading: true,
            }
        case SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: true,
                isLoggedIn: true
            }
        case ERROR:
            return {
                ...state,
                error: 'Invalid Username or PassWord',
                isLoading: false,
                isLoggedIn: false,
                userName: '',
                password: '',
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false
            }
        default:
            break;
    }
}