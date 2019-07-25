import { Actions } from '../actions/types';

const initialState = {
    allList: [
        { "id": 11, "fullName": "PleaseFetchDataFromRemote", "isChecked": false },
        { "id": 22, "fullName": "Error", "isChecked": false },
        { "id": 33, "fullName": "Chun-Hung", "isChecked": false }
    ],
    whichProgram: 'blastn'
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_LIST:
            return {
                ...state,
                allList: action.payload
            };
        case Actions.SET_LIST:
            return {
                ...state,
                allList: action.payload
            };
        case Actions.SET_PROGRAM:
            return {
                ...state,
                whichProgram: action.payload
            };
        default:
            return state;
    }
}
export default formReducer;