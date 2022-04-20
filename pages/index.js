import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  CircularProgress,
  Pagination,
} from "@mui/material";

import styled from "../styles/main.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {setRepos} from "./_app";
import {getRepos} from "../store/actions";


export default function Home() {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector(state => state.items)
  console.log("data:", data)

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getRepos = () => {
    return async (dispatch)=>{
      const response = await axios.get("https://run.mocky.io/v3/62fb6739-d3df-48c7-a91d-7950c8aaee6c")
      console.log("response: ",response.data)
      dispatch((repos)=>({type:"SET_REPOS", payload:[response.data]}))
    }
  };


  useEffect(() => {
    dispatch(getRepos())
  }, [dispatch]);


  return (
    <>
      <Head>
        <title>Test app</title>
      </Head>
      <header></header>
      <main className={styled.main}>
        {/*//----------------------loader----------------------*/}
        {loading && (
          <div className={styled.loading}>
            <CircularProgress color="success" />
          </div>
        )}
        {/*//----------------------loader----------------------*/}
        {/*//----------------------Cards----------------------*/}
        <div className={styled.wrapper}>
          {data.length &&
            data.slice(page * 10 - 10, page * 10).map((e) => {
              return (
                <>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={e.avatar_url}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {e.login}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </>
              );
            })}
        </div>
        {/*//----------------------Cards----------------------*/}
        <div className={styled.pagination}>
          <Pagination
            count={10}
            color={"secondary"}
            page={page}
            onChange={handleChange}
          />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

//----------------------SSR + Fetch ------------------------------
// export async function getStaticProps() {
//   const res = await fetch(
//     "https://run.mocky.io/v3/62fb6739-d3df-48c7-a91d-7950c8aaee6c"
//   );
//   const data = await res.json();
//
//   return {
//     props: {
//       data,
//     },
//   };
// }
//----------------------SSR + Fetch ------------------------------

//----------------------Just Fetch ------------------------------
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://run.mocky.io/v3/62fb6739-d3df-48c7-a91d-7950c8aaee6c"
//       );
//       const json = await response.json();
//
//       // -------------------------------------------------------------------
//       setTimeout(() => {
//         setData(json);
//       }, 0);
//       setTimeout(() => {
//         setLoading(false);
//       }, 0);
//       // -----------------------------------------------------------------
//     } catch (error) {}
//   };
//   fetchData();
// }, []);
//----------------------Just Fetch ------------------------------
