import React from 'react';
import { Link, hashHistory } from 'react-router';
import { logout } from '../../actions/session_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props.state.session.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    store.dispatch(logout());
    hashHistory.push('/login');
  }

  render() {
    return (
      <header>
        <div className="nav-bar">
          <Link to={'/'}className="home-link">
            <img src="https://image.freepik.com/free-icon/instagram-photo-camera-logo-outline_318-56004.jpg"></img>
            <h1>Pixtagram</h1>
          </Link>
           <div className="nav-menu">
             <Link className="upload-link"
                   to={'/post'}>
                   <img src="https://image.freepik.com/free-icon/upload-arrow-in-a-circle_318-30292.jpg"/>
             </Link>
             <Link className="profile-link"
                   to={`/users/${this.props.state.session.currentUser.id}`}>
               <img src="https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"></img>
             </Link>
             <form onSubmit={this.handleSubmit}>
                <input type="image"
                       alt="submit"
                       className="logout"
                       src="http://image.flaticon.com/icons/png/128/56/56805.png"/>
                </form>
            </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
