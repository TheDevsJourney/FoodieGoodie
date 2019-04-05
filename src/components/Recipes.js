import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

class Recipes extends Component {
  _isMounted = false;

  state = {
    recipes: []
  };

  componentDidMount() {
    this._isMounted = true;
    const { search } = this.props;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${search}&count=12`
      )
      .then(res => {
        if (this._isMounted) {
          const recipes = res.data.recipes;
          this.setState({
            recipes
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onClick = () => {
    this.props.history.push("/recipe");
  };

  render() {
    const { recipes } = this.state;
    if (recipes.length === 0) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh"
          }}
        >
          <CircularProgress style={{ color: "#e16120" }} />
        </div>
      );
    }
    return (
      <Grid
        container
        spacing={24}
        style={{ width: "70%", margin: "100px auto" }}
      >
        {recipes.map(recipe => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={recipe.recipe_id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  onClick={() => {
                    this.props.handleClick(recipe);
                    this.onClick();
                  }}
                  className="imgDiv"
                  image={recipe.image_url}
                  title={recipe.title}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {recipe.title.length > 18
                    ? `${recipe.title.substring(0, 18)}...`
                    : recipe.title}
                </Typography>

                <Typography component="p">
                  Publisher: {recipe.publisher}
                </Typography>
                <div
                  style={{
                    backgroundColor: "#e16120",
                    display: "inline-block",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginTop: "15px",
                    color: "white",
                    fontSize: "14px"
                  }}
                  onClick={() => {
                    this.props.handleClick(recipe);
                    this.onClick();
                  }}
                >
                  <p>View Recipe</p>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const API_KEY = "d4a421e37d43a4499cd67d0c578249cd";
export default withRouter(Recipes);
