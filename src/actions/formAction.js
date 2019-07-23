import { Actions } from './types';

//fetch data from remote url
export const fetchList = () => dispatch => {
    dispatch({
        type: Actions.FETCH_LIST,
        payload: [
            { "id": 1, "fullName": "Aethina tumdia", "isChecked": false },
            { "id": 2, "fullName": "Bombus terrestis", "isChecked": false },
            { "id": 3, "fullName": "Hyalella azteca", "isChecked": false }
        ]
    })
}
export const setList = (res) => dispatch => {
    dispatch({
        type: Actions.SET_LIST,
        payload: res
    })
}