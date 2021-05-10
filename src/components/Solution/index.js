import Banner from '../Banner';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.blog,
  appName: state.common.appName,
});

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-page">

        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <h1>This is the solution page</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, ()=>({}) )(Home);
