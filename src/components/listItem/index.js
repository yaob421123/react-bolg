import React, { PureComponent } from 'react';
import './index.less';

import { dateDiff } from '@/common/utils.js';

import html from '@/assets/html.svg';
import css from '@/assets/css-3.svg';
import javascript from '@/assets/javascript.svg';
import jquery from '@/assets/jquery.svg';
import react from '@/assets/react-logo.svg';
import vue from '@/assets/vue.svg';
import webpack from '@/assets/webpack-logo.svg';

class ListItem extends PureComponent {
  constructor (props) {
    super(props);
    console.log()
  }
  renderThumbs () {
    const item = this.props.content;
    const thumb = parseInt(item.thumb);
    if (thumb === 1) {
      return (
        <div className="thumb"><img className="icon" src={html} alt="html" /></div>
      )
    } else if (thumb === 2) {
      return (
        <div className="thumb"><img className="icon" src={css} alt="css" /></div>
      )
    } else if (thumb === 3) {
      return (
        <div className="thumb"><img className="icon" src={javascript} alt="javascript" /></div>
      )
    } else if (thumb === 4) {
      return (
        <div className="thumb"><img className="icon" src={jquery} alt="jquery" /></div>
      )
    } else if (thumb === 5) {
      return (
        <div className="thumb"><img className="icon" src={react} alt="react" /></div>
      )
    } else if (thumb === 6) {
      return (
        <div className="thumb"><img className="icon" src={vue} alt="vue" /></div>
      )
    } else if (thumb === 7) {
      return (
        <div className="thumb"><img className="icon" src={webpack} alt="webpack" /></div>
      )
    }
  }
  render() {
    const item = this.props.content;
    const date = dateDiff(item.date);
    const url = '/details/' + item.id;
    return (
      <div className="context-box">
        <div className="info">
          <div className="title">
            <a href={url} target="_blank" rel="noopener noreferrer" className="sp">
            <span dangerouslySetInnerHTML={{ __html: item.title}}></span></a>
          </div>
          <div className="meta">
            <span className="tag">{date} ·</span>
            <span className="x">/</span>
            <span className="tag">{item.tags}</span>
          </div>
        </div>
        {this.props.isicon ? this.renderThumbs() : ''}
      </div>
    );
  }
}

export default ListItem;
