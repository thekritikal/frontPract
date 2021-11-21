import axiosInstance from '../../axios';



export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});


export const setLiked = (payload) => ({
  type: 'SET_LIKED',
  payload,
});


export const setDisliked = (payload) => ({
  type: 'SET_DISLIKED',
  payload,
});


export const fetchFavorite = () => (dispatch) => {

  axiosInstance.get('favorite/').then(({ data }) => {
    dispatch(setFavorite(data));
  });
};


export const setFavorite = (items) => ({
  type: 'SET_FAVORITE',
  payload: items,
});


export const setDetail = (items) => ({
  type: 'SET_DETAIL',
  payload: items,
});


export const fetchDetail = (videoId) => (dispatch) => {

  axiosInstance.get('video/' + videoId).then(({ data }) => {
    dispatch(setDetail(data));
  });
};


export const fetchVideos = () => (dispatch) => {

  axiosInstance
    .get()
    .then(({ data }) => {
      dispatch(setVideos(data));
    });
};


export const setVideos = (items) => ({
  type: 'SET_VIDEOS',
  payload: items,
});


export const setResult = (items) => ({
  type: 'SET_RESULT',
  payload: items,
});


export const searchVideo = (query) => (dispatch) => {
  const search = 'search';
  axiosInstance.get(search + '/' + query).then(({ data }) => {
    dispatch(setResult(data));
  });
};