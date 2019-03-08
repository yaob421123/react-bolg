import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import './index.less';
import logo from '@/assets/logo.jpg';
import searchimg from '@/assets/search.svg';

class Search extends PureComponent {
  constructor (props) {
    super(props);
    let title = props.match.params.title;
    this.state = {
      searchVal: title ? title : ''
    }
  }

  trim = (s) => {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  }

  inputHandleChange = (e) => {
    this.setState({
      searchVal: e.target.value
    });
  }

  btnHandleClick = (e) => {
    e.preventDefault();
    let val = this.trim(this.state.searchVal)
    let title = this.props.match.params.title;
    if (val && val !== title) {
      this.props.history.push(`/search/${val}`);
    }
  }
  render() {
    return (
      <div className="search-containar">
        <input className="input" type="text" value={this.state.searchVal} onChange={this.inputHandleChange} placeholder="搜索内容" />
        <span className="btn" onClick={this.btnHandleClick}><img className="icon" src={searchimg} alt="logo" /></span>
      </div>
    );
  }
}


class PageHeader extends PureComponent {
  render() {
    // const searchText2 = this.props.match.params.search;
    // console.log(searchText2)
    return (
      <div className="ht">
        <div className="header-container">
          <div className="header">
            <Link className="logo" to="/">
              <img src={logo} alt="logo"/>
            </Link>
            <div className="menu-box">
              <div className="menu">
                <Link to="/">首页</Link>
              </div>
              <div className="menu">
                <a href="https://yaob421123.github.io/binui/index.html" target="_blank" rel="noopener noreferrer">bin-ui</a>
              </div>
              <div className="menu">
                <Link to="/about">关于本站</Link>
              </div>
            </div>
            <Search {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
