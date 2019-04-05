import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";

class Recipe extends Component {
  state = {
    recipe: []
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const { recipe } = this.props;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${API_KEY}&rId=${
          recipe.recipe_id
        }`
      )
      .then(res => {
        if (this._isMounted) {
          const recipe = res.data.recipe;
          this.setState({
            recipe
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { recipe } = this.state;
    if (this.props.search === "") {
      return <h1 style={{ marginTop: "80px" }}>Please Enter A New Search</h1>;
    } else if (recipe.length === 0) {
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
      <div>
        <Grid
          container
          spacing={24}
          style={{ width: "70%", margin: "100px auto" }}
        >
          <Grid item xs={12} lg={6}>
            <Card>
              <CardActionArea>
                <a href={recipe.source_url} target="_blank">
                  <CardMedia
                    className="recipeIMG"
                    image={recipe.image_url}
                    title={recipe.title}
                  />
                </a>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h1>{recipe.title}</h1>
            <p style={{ margin: "10px 0" }}>
              Publisher:{" "}
              <a
                href={recipe.publisher_url}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {recipe.publisher}
              </a>
            </p>

            <div
              style={{
                backgroundColor: "#e16120",
                display: "inline-block",
                width: "100px",
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "5px",
                color: "white",
                fontSize: "14px"
              }}
            >
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/recipes"
              >
                Go Back
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={10}>
            <h4 style={{ marginBottom: "20px" }}>Ingredients:</h4>
            {recipe.ingredients.map((ingredient, ind) => (
              <p
                style={{
                  marginBottom: "20px",
                  borderLeft: "solid 1px #e16120",
                  paddingLeft: "10px"
                }}
                key={ind}
              >
                {ingredient}
              </p>
            ))}
            <p>
              Want Directions? Visit{" "}
              <a
                href={recipe.source_url}
                target="_blank"
                style={{
                  textDecoration: "none",
                  margin: "20px 0",
                  textOverflow: "ellipsis"
                }}
              >
                {recipe.source_url}
              </a>
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const API_KEY = "d4a421e37d43a4499cd67d0c578249cd";
export default Recipe;
