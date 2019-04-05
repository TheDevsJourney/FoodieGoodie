import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
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

export default withRouter(Recipes);

// render() {
//   const { recipes } = this.state;
//   return (
//     <div>
//       <h1>This is the Recipes page</h1>
//       {recipes.map(recipe => (
//         <h4
//           onClick={() => {
//             this.props.handleClick(recipe);
//             this.onClick();
//           }}
//           style={{ margin: "10px 0", cursor: "pointer" }}
//         >
//           {recipe.title}
//         </h4>
//       ))}
//     </div>
//   );
// }
