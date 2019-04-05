import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
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
// const API_KEY = "9425526c145456e3301a68362ceec30e";
// const API_KEY = "969d7013d2c6acde5ad40d84b8311ec6";
// const API_KEY = "2ad474075136ca1917df14d0c0480ae6";
// const API_KEY = "fb7d0d78ef760b4e683e3f9652cf2919";
// const API_KEY = "8742ef7e08cac64ebc328a0f2ad9de66";
// const API_KEY = "562742e872b646fe78e1624017cfbc5e";
// const API_KEY = "5fe88af8dcfd239cf724ffdb514094e5";

// const API_KEY = "d4a421e37d43a4499cd67d0c578249cd";
const API_KEY = "0b9a49c25567210ee25fb0f348558e31";
// const API_KEY = "8d154f8f0850a1bc59c3876eb7a77d24";
// const API_KEY = "84410c50ff3b6e41f6d16212279e2126";
// const API_KEY = "c796f7b7cc7142d045728f32684a3153";
// const API_KEY = "de7dd6c2dec95fc64699d7781e6e7bac";
// const API_KEY = "6c19ba0e3860fba3a047a6d4e5625203";

export default Recipe;
