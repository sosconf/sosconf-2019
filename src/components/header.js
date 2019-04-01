import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { changeToEnglish, changeToChinese } from '../actions/action';
import { connect } from 'react-redux';
import '../themes/header.css';

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }


  constructor() {
    super();
    this.state = {
      displayMobileBar: false,
      displayAboutBar: false,
      displayContactBar: false,
      displayLanguageBar: false
    };
    this.handleChangeToChinese.bind(this);
    this.handleChangeToEnglish.bind(this);
    this.closeAllBar.bind(this);
  }

  // 切换英文
  handleChangeToEnglish() {
    this.props.changeToEnglish();
  }

  // 切换中文
  handleChangeToChinese() {
    this.props.changeToChinese();
  }

  // 悬浮
  pop() {

  }

  // 关闭所有bar
  closeAllBar() {
    this.setState({
      displayMobileBar: false,
      displayAboutBar: false,
      displayContactBar: false,
      displayLanguageBar: false,
      popState: true
    })
  }

  render() {
    return (
      <div className="sosconf-header__wrap">
        <div className="sosconf-header-pc">
          <div className="sosconf-header__logo">
            <div className="sosconf-header__logo--svg"></div>
            <div className="sosconf-header__logo--name">sosconf</div>
            <div className="sosconf-header__logo--name-number">2019</div>
          </div>
          <div className="sosconf-header__buttons">

            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/"); }}>
              <FormattedMessage
                id="home"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/news"); }}>
              <FormattedMessage
                id="news"
              />
            </button>
            <button className="sosconf-header__button"onClick={() => { this.props.history.push("/sponsor"); }}>
              <FormattedMessage
                id="sponsor"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/speaker"); }}>
              <FormattedMessage
                id="talkerContact"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/volunteer"); }}>
                  <FormattedMessage
                    id="volunteerContact"
                  />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/venue"); }}>
              <FormattedMessage
                id="navigation"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="contact"
              />
            </button>
            <button className="sosconf-header__button" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="about"
              />
            </button>
            <div className="sosconf-header__button-group sosconf-header__button-group--login">
              <button className="sosconf-header__group-button-title sosconf-header__button-group-title--login">
                <FormattedMessage id="signup"/>
              </button>
            </div>

            <div className="sosconf-header__button-group sosconf-header__button-group--signin">
              <button className="sosconf-header__group-button-title sosconf-header__button-group-title--signin">
                <FormattedMessage id="signin"/>
              </button>
            </div>

            <div className="sosconf-header__button-group sosconf-header__button-group--language">
              <button className="sosconf-header__group-button-title sosconf-header__group-button-title--language" id="sosconf-header__button--language" >
                <FormattedMessage
                  id="language"
                />
                <span style={
                  {
                    transform: this.state.displayLanguageBar ? 'rotateZ(0deg)' : 'rotateZ(180deg)',
                  }
                }></span>
              </button>
              <div className="sosconf-header__gourp-drop-down">
                <button className="sosconf-header__group-button" onClick={() => { this.handleChangeToEnglish() }}>
                  <FormattedMessage
                    id="english"
                  />
                </button>
                <button className="sosconf-header__group-button" onClick={() => { this.handleChangeToChinese() }}>
                  <FormattedMessage
                    id="chinese"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="sosconf-header__choose">

          </div>
        </div>

        <div className="sosconf-header-mobile">
          <span className={!this.state.displayMobileBar ? "sosconf-header__menu-icon" : "sosconf-header__menu-icon--vertical"} onClick={() => {
            if (this.state.displayMobileBar) {
              this.setState({
                displayMobileBar: false
              });
              this.closeAllBar();
            } else {
              this.setState({
                displayMobileBar: true
              });
            }
          }}></span>
          <div className="sosconf-header-mobile__logo">
          </div>
          <div className="sosconf-header__logo--name">sosconf</div>
          <div className="sosconf-header__logo--name-number">2019</div>
        </div>

        <div className="sosconf-header-mobile__active" style={
          {
            maxHeight: this.state.displayMobileBar ? '1000px' : '0px',
          }
        }>
          <div className="sosconf-header-mobile__wrap">
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/"); }}>
              <FormattedMessage
                id="home"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/news"); }}>
              <FormattedMessage
                id="news"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/venue"); }}>
              <FormattedMessage
                id="navigation"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/speaker"); }}>
              <FormattedMessage
                id="talkerContact"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/sponsor"); }}>
              <FormattedMessage
                id="sponsor"
              />
            </button>
            <button className="sosconf-header-mobile__button"  onClick={() => { this.props.history.push("/volunteer"); }}>
                  <FormattedMessage
                    id="volunteerContact"
                  />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="about"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="signin"
              />
            </button>
            <button className="sosconf-header-mobile__button" onClick={() => { this.props.history.push("/coming"); }}>
              <FormattedMessage
                id="signup"
              />
            </button>
            <div className="sosconf-header-mobile__button-group">
              <button className="sosconf-header-mobile__button" onClick={() => {
                this.setState({
                  displayLanguageBar: !this.state.displayLanguageBar
                })
              }}>
                <FormattedMessage
                  id="language"
                />
                <span style={
                  {
                    transform: this.state.displayLanguageBar ? 'rotateZ(0deg)' : 'rotateZ(180deg)',
                  }
                }></span>
              </button>
              <div className="sosconf-header-mobile__button-group-buttons" style={{
                maxHeight: this.state.displayLanguageBar ? '1000px' : '0px',
              }}>
                <button onClick={() => { this.handleChangeToEnglish() }}>
                  <FormattedMessage
                    id="english"
                  />
                </button>
                <button onClick={() => { this.handleChangeToChinese() }}>
                  <FormattedMessage
                    id="chinese"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      language: state.language
    }
  },
  { changeToChinese, changeToEnglish })(withRouter(Header));
