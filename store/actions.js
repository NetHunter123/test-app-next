// import {addUsers} from "./reducers";
//
// export const axiosUsers = ()=>{
//   return dispatch =>{
//     axios
//       .get("https://run.mocky.io/v3/62fb6739-d3df-48c7-a91d-7950c8aaee6c")
//       .then((response) => dispatch(addUsers(response.data)))
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }

// import axios from "axios";
// import {setRepos} from "../pages/_app";
//
// export const getRepos = () => {
//   return async (dispatch)=>{
//     const response = await axios.get("https://run.mocky.io/v3/62fb6739-d3df-48c7-a91d-7950c8aaee6c")
//     console.log("response: ",response.data)
//     dispatch(setRepos(response.data))
//   }
// };
