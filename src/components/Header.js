import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

class Header extends Component {
  state = {
    text: ""
  };

  submitForm = e => {
    e.preventDefault();
    this.props.history.push("/recipes");
    this.setState({
      text: ""
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "white",
            color: "black"
          }}
        >
          <Toolbar>
            <div
              style={{
                width: "70%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Typography
                className={this.props.classes.title}
                variant="h6"
                // color="inherit"
                noWrap
                style={{ color: "black" }}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "24px"
                  }}
                >
                  Foodie
                  <span
                    style={{
                      color: "#e16120",
                      fontSize: "27px",
                      fontWeight: "bold"
                    }}
                  >
                    Goodie
                  </span>
                </Link>
              </Typography>

              <div className={this.props.classes.grow} />
              <div className={this.props.classes.search}>
                {/* <div className={this.props.classes.searchIcon}>
                  <SearchIcon />
                </div> */}
                <form
                  onSubmit={e => {
                    this.submitForm(e);
                    this.props.onSubmit(this.state.text);
                  }}
                  style={{
                    backgroundColor: "rgba(215,215,215,0.4)",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <div className={this.props.classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    onChange={this.onChange}
                    placeholder="Search…"
                    name="text"
                    value={this.state.text}
                    classes={{
                      root: this.props.classes.inputRoot,
                      input: this.props.classes.inputInput
                    }}
                  />
                </form>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Header));

// export default withRouter(Header);

{
  /* <div
style={{
  padding: "20px 0",
  backgroundColor: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}
>
<h1>React Testing Routes</h1>
<form
  onSubmit={e => {
    this.submitForm(e);
    this.props.onSubmit(this.state.text);
  }}
>
  <input
    type="text"
    placeholder="Some text here"
    name="text"
    value={this.state.text}
    onChange={this.onChange}
  />
</form>

<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/recipes">Recipes</Link>
    </li>
  </ul>
</nav>
</div> */
}
