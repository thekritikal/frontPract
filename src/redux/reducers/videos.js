import axiosInstance from "../../axios.js"



const initialState = {
  items: [],
  favoriteItems: [],
  isLoaded: false,
  searchItems: [],
  detailVideo: [],
};


const videos = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_VIDEOS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_FAVORITE':
      return {
        ...state,
        favoriteItems: action.payload,
        isLoaded: true,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    case 'SET_DETAIL':
      return {
        ...state,
        detailVideo: action.payload,
        isLoaded: true,
      };

    case 'SET_LIKED':
      if (state.items.length > 0) {
        for (var i = 0; i < state.items.length; i++) {
          if (state.items[i].id === action.payload) {
            axiosInstance.put('liked/' + action.payload + "/", { isFavorite: true }).then((res) => {
            });
            state.items[i].isFavorite = true;
          }
        }
      }
      else {
        if (state.searchItems.length > 0) {
          for (var i = 0; i < state.searchItems.length; i++) {
            if (state.searchItems[i].id === action.payload) {
              axiosInstance.put('liked/' + action.payload + "/", { isFavorite: true }).then((res) => {
              });
              state.searchItems[i].isFavorite = true;
            }
          }
        }
        else {
          axiosInstance.put('liked/' + action.payload + "/", { isFavorite: true }).then((res) => {
          });
          state.detailVideo.isFavorite = true;
        }
      }
      return {
        ...state,
        isLoaded: action.payload + 1,
      };

    case "SET_DISLIKED":
      if (state.items.length > 0) {
        for (var i = 0; i < state.items.length; i++) {
          if (state.items[i].id === action.payload) {
            axiosInstance.put('liked/' + action.payload + "/", { isFavorite: false }).then((res) => {
            });
            state.items[i].isFavorite = false;
          }
        }
      } else {
        if (state.favoriteItems.length > 0) {
          for (var i = 0; i < state.favoriteItems.length; i++) {
            if (state.favoriteItems[i].id === action.payload) {
              axiosInstance.put('liked/' + action.payload + "/", { isFavorite: false }).then((res) => {
              });
              state.favoriteItems[i].isFavorite = false;
            }
          }
        }
        else {
          axiosInstance.put('liked/' + action.payload + "/", { isFavorite: false }).then((res) => {
          });
          state.detailVideo.isFavorite = true;
        }
      }
      return {
        ...state,
        isLoaded: action.payload - 1,
      };

    case 'SET_RESULT':
      return {
        ...state,
        searchItems: action.payload,
      };

    default:
      return state;
  }
};


export default videos;
