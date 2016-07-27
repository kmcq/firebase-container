import firebaseDb from './database'

// ------------------------------------
// Constants
// ------------------------------------

const SUBSCRIBED = 'Firebase.SUBSCRIBED'
const IS_LOADING = 'Firebase.IS_LOADING'
const LOADED = 'Firebase.LOADED'

// ------------------------------------
// Actions
// ------------------------------------

export function listenToFirebaseFor (dataType) {
  return (dispatch, getState) => {
    dispatch(isLoading(true))
    firebaseDb.ref(dataType).on('value', snapshot => {
      dispatch(receivedData(dataType, snapshot.val()))
    })
  }
}

function isLoading (bool) {
  return {
    type: IS_LOADING,
    payload: bool
  }
}

function receivedData(dataType, data) {
  return {
    data,
    dataType,
    type: SUBSCRIBED
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
function subscribedActionHandler(state, action) {
  return {
    ...state,
    loading: false,
    [action.dataType]: {
      data: action.data,
      hasReceivedData: true
    }
  }
}

function loadingActionHandler(state, action) {
  return {
    ...state,
    loading: action.payload
  }
}

const ACTION_HANDLERS = {
  [SUBSCRIBED]: subscribedActionHandler,
  [IS_LOADING]: loadingActionHandler
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function firebaseReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
