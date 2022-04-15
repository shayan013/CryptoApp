import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  searchItem: {
    width: "60%",
    backgroundColor: "#fff",
  },
  heading: {
    position: "absolute",
    left: "20px",
    top: "20px",
    color: "#FFFFFF",
  },
  box: {
    borderRadius: "5px",
    overflow: "hidden",
    textAlign: "center",
  },
  outerContainer: {
    backgroundColor: "#2E2F31",
    height: "120px",
  },
  container: {
    padding: "30px 0",
    position: "relative",
  },
  grid: {
    marginTop: "80px",
    width: "50%",
    margin: "0 auto",
  },
  cryptoItem: {
    width: "250px",

    backgroundColor: "#3D3E40",
    borderRadius: "5px",
    padding: "5px 20px",
  },
  name: {
    color: "#FFF",
  },
  price: {
    color: "#fff",
    fontWeight: "bold",
  },
  symbol: {
    color: "#fff",
    fontWeight: "bold",
  },
}));

export default useStyles;
