import "./App.css";
import { useEffect, useState } from "react";
import Mycard from "./components/Mycard";
import Navbar from "./components/Navbar";
import { getApiKey } from "./api/ApiKey";
import { Grid } from "@material-ui/core";
import { Fragment } from "react";
function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getApiKey()
      .then((data) => setMatches(data.matches))
      .catch();
  }, []);

  return (
    <>
      <Navbar />
      <h1>welcome to live cricket scores</h1>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {matches.map((match) => (
            <Fragment>
              {match.type === "Twenty20" ? (
                <Mycard key={match.unique_id} match={match} />
              ) : (
                ""
              )}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
