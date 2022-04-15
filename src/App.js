import React from "react";
import { useEffect, useState, useRef } from "react";
import { TextField, Container, CssBaseline, Grid } from "@material-ui/core";
import useStyles from "./styles/styles";
import axios from "axios";
const baseUrl = "https://api.coinstats.app/public/v1/coins?skip=0";
function App() {
  const inputValue = useRef(null);
  const [searchItem, setSearchItem] = useState("");
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((response) => setData(response.data.coins));
  }, []);

  const getvalue = (e) => {
    setSearchItem(e.target.value);
    console.log(e.target.value);
  };

  const newFilteredarray = data.filter((item) => {
    return item.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div className={classes.outerContainer}>
      <CssBaseline />
      <h1 className={classes.heading}>Crypto App</h1>

      <Container className={classes.container} maxWidth="md">
        <div className={classes.box}>
          <TextField
            className={classes.searchItem}
            variant="filled"
            color="primary"
            label="Search crypto"
            ref={inputValue}
            onChange={getvalue}
          />
        </div>
        <div className={classes.grid}>
          <Grid container spacing={2} align="center">
            {newFilteredarray.map((item) => {
              return (
                <Grid key={item.id} item sm={12}>
                  <div className={classes.cryptoItem}>
                    <h2 className={classes.name}>{item.name}</h2>
                    <img className={classes.icon} src={item.icon} alt="" />
                    <p className={classes.price}>Price: {item.price}</p>
                    <p className={classes.symbol}>Symbol: {item.symbol}</p>
                  </div>
                </Grid>
              );
            })}
            ;
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
