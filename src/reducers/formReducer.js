import { Actions } from '../actions/types';

const initialState = {
    searchbarText: '',
    allList: [
        { "id": 11, "fullName": "PleaseFetchDataFromRemote", "isChecked": false },
        { "id": 22, "fullName": "reducer/formReducer.js", "isChecked": false },
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
        case Actions.SET_SEARCHBAR:
            return {
                ...state,
                searchbarText: action.payload
            };
        default:
            return state;
    }
}
export default formReducer;