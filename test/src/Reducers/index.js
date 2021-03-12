const initialState = {
  roomCount: 0,
  adultCount: 0,
  childCount: 0,
};
const Reducer = (state = initialState, action) => {
  console.log(action.selectionType);
  switch (action.type) {
    case "INC":
      return action.selectionType === "ROOMS"
        ? {
            roomCount: state.roomCount + 1,
            adultCount:
              state.adultCount <= state.roomCount
                ? state.roomCount + 1
                : state.adultCount,
            childCount: state.childCount,
          }
        : action.selectionType === "ADULTS"
        ? {
            roomCount: state.roomCount,
            adultCount: state.adultCount > state.roomCount*4 
            ? state.roomCount*4
            : state.adultCount + 1,
            childCount: state.childCount,
          }
        : action.selectionType === "CHILDREN"
        ? {
            roomCount: state.roomCount,
            adultCount: state.adultCount,
            childCount: state.childCount + 1,
          }
        : '';

    case "DEC":
      return action.selectionType === "ROOMS"
        ? {
            roomCount:
              state.roomCount === 0 ? state.roomCount : state.roomCount - 1,
            adultCount: state.adultCount,
            childCount: state.childCount,
          }
        : action.selectionType === "ADULTS"
        ? {
            roomCount: state.roomCount,
            adultCount:
              state.adultCount === 0 ? state.adultCount : state.adultCount - 1,
            childCount: state.childCount,
          }
        : action.selectionType === "CHILDREN"
        ? {
            roomCount: state.roomCount,
            adultCount: state.adultCount,
            childCount:
              state.childCount === 0 ? state.childCount : state.childCount - 1,
          }
        : '';
    default:
      return state;
  }
};

export default Reducer;
