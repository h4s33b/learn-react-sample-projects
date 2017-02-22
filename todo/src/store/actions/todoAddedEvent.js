export function watchToDoAddedEvent(dispatch) {
    database.ref('/todos').on('child_added', (snap) => {
        dispatch(getGuestAddedAction(snap.val()));
    });
}

function getGuestAddedAction(todos) {
    return {
        type: ActionTypes.GuestAdded,
        todos
    };
}