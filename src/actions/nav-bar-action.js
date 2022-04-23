export const UPDATE_PAGE = 'UPDATE_PAGE';

export const changeHighlight = (dispatch ,highlight) => {
    dispatch({
        type: UPDATE_PAGE,
        activePage: highlight
    })
}