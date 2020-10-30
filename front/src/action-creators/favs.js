import axios from 'axios';
import { SET_FAVS} from '../constants';

const setFavs = (favs)=>({
  type: SET_FAVS,
  favs,
});

export const addFavs = (Title, Poster, user) => {
  return axios
    .post("/api/favs/addfav", {
      Title: Title, 
      Poster: Poster,
      user: user,
    })
}

export const allFavs = (id) => (dispatch) =>{
      axios.get(`/api/favs/allfavs/${id}`)
      .then((res) => dispatch(setFavs(res.data)))
}


export const deleteFavs = (id) => {
      return axios.delete(`/api/favs/delete/${id}`)
}
