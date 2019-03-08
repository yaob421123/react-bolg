import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

class TagItem extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      tagsList: [{
        id: 1,
        name: '前端222',
        number: 265
      }, {
        id: 2,
        name: 'CSS',
        number: 265
      }, {
        id: 3,
        name: 'JavaScript',
        number: 265
      }, {
        id: 4,
        name: 'HTML',
        number: 265
      }, {
        id: 5,
        name: 'React.js',
        number: 265
      }, {
        id: 6,
        name: 'Vue.js',
        number: 265
      }, {
        id: 7,
        name: 'Webpack',
        number: 265
      }]
    }
  }
  render() {
    const listItem = this.state.tagsList.map((item, idx) =>
      <Link to={'/tags/' + item.id} className="tag" key={idx.toString()}>{item.name}</Link>
    )
    return (
      <div className="fiexd-tag-box">
        <div className="tag-box shadow">
          <div className="title">标签</div>
          <div className="tag-list">
            {listItem}
          </div>
        </div>
      </div>
    );
  }
}

export default TagItem;
