import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

return (
    <div>

      <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="title-container">
          <div className="name">money-app</div>
        </div>
      </Link>

      <button
      type="button"
      onClick={()=> handleClick()}>
      </button>

      <div className={this.classNameChange()[0]}>
        Welcome, {user.username}
      </div>

      <div className={this.classNameChange()[1]}>

        <Link to="/home" className="nav-link-text">
          <div>
            Home
          </div>
        </Link>

        <Link to="/myBudget" className="nav-link-text">
          <div>
            <span>myBudget</span>
          </div>
        </Link>

        <Link to="/profile" className="nav-link-text">
          <div>
            <span>Profile</span>
          </div>
        </Link>

        <a to="/login" className="nav-link-text">
          <div
            onClick={() => {
              this.props.onUserLogout();
              localStorage.removeItem("token")
              this.props.history.push("/login");
            }}
          >
            <span style={{cursor: 'pointer'}}>Logout</span>
          </div>
        </a>

      </div>
    </div>
  );
}

render() {
  return (
    <div id="navbar">{this.props.isLogged.loggedIn ? this.renderLoggedInNavbar() : null}</div>
  );
}
}

const mapStateToProps = (state, props) => {
return {
  isLogged: state.isLogged,
}
}

const mapDispatchToProps = (dispatch, props) => {
return bindActionCreators({
  onUserLogin: login,
  onUserLogout: logout,
}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));