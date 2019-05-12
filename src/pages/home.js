import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import '../themes/home.css';

class Home extends Component { 
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      followStringEn: 'Follow us',
      followStringZh: '关注我们',
      follow: '',
      followTimer: '',
      splitTimer: '',
      splitFlag: false
    }
  }

  componentDidMount() {
    let followString = '';
    if (this.props.language == 'en') {
      followString = this.state.followStringEn;
    } else {
      followString = this.state.followStringZh;
    }
    let followArray = followString.split('');
    let that = this;
    this.state.followTimer = setInterval(() => {
      if (followArray.length)
        that.setState({
          follow:that.state.follow += followArray.shift()
        })
      else {
        followArray = followString.split('');
        that.setState({
          follow:""
        })
      }
    }, 500);

    this.state.splitTimer = setInterval(() => {
      that.setState({
        splitFlag:!that.state.splitFlag
      })
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.state.splitTimer);
    clearInterval(this.state.followTimer);
  }

  render() {
    return (
      <div className="sosconf-home__wrap">
        <Card customerStyle={{
          width: "700px",
          height: '840px',
          margin: '0 auto',
          marginTop: '140px',
          marginBottom: '140px',
          textAlign: 'center',
          paddingTop: '30px',
          paddingBottom: '30px',
          paddingLeft: '20px',
          paddingRight: '20px'
        }} customerHeaderStyle = {{
          height:0,
          display:'none'
        }} body={(<div className="sosconf-home__announcement">
          <div className="sosconf-home__title">
            <h1 className="sosconf-home__title--up">sosconf 2019</h1>
            <div className="sosconf-home__title--span"></div>
            <h2 className="sosconf-home__title--down">Students Open Source Conference</h2>
            <div className="sosconf-home__position">
              <div className="sosconf-home__date-flag">
                DATE
              </div>
              <h2 className="sosconf-home__position--time">
              <FormattedMessage
                id="time"
              /></h2>
              <div className="sosconf-home__position-flag">
               SITE
              </div>
              <h2 className="sosconf-home__position--position">
                <FormattedMessage
                  id="meetingPosition"
                />
              </h2>
              <a className="sosconf-home__button--black sosconf-home__button--know-more" href="https://fb.com/sosconf">
                <FormattedMessage
                  id="learnMore"
                />
              </a>
              <div className="sosconf-home__follow-us">
                {this.state.follow} <span style={{
                  position: 'relative',
                  left: '-2px',
                  opacity: this.state.splitFlag?'0':'1',
                  transition: 'all .1s'
                }}>>_</span>
              </div>
            </div>
            <div className="sosconf-home__buttons">
              <a className="sosconf-home__button--black" href="https://fb.com/sosconf">
              <FormattedMessage
                id="Facebook"
              />
              </a>
              <a className="sosconf-home__button--black" href="https://twitter.com/sosconf">
              <FormattedMessage
                id="Twitter"
              />
              </a>
              <a className="sosconf-home__button--black" href="https://t.me/sosconf">
              <FormattedMessage
                id="Telegram"
              />
              </a>
            </div>
          </div>
        </div>)}></Card>
      </div>
    );
  }
}

export default connect(state => {
  return {
    language: state.language
  }
})(Home);
