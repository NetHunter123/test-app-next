import axios from "axios";

export const getRepos = (dispatch) => {
  return async (dispatch)=>{
    const response = await axios.get("https://run.mocky.io/v3/62fb6739-d3df-48c7-a91d-7950c8aaee6c")
    dispatch({type:"SET_REPOS", payload:response.data})
    console.log("response:",response.data)
  }
};

