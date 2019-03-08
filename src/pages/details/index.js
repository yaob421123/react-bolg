import React, { PureComponent } from 'react';
import './index.less';
import RelevantList from '@/pages/home';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      typeid: 99
    }
  }
  render() {
    return (
      <div>
        <div className="article-containar shadow">
          <div className="title">
            <h3 className="h3">腾讯大厦与我有个约定（面试精华帖）</h3> 
            <p className="tags">
              <span className="tag">2018年03月07日</span>
              <span className="x">/</span>
              <span className="tag">javascript</span>
            </p>
          </div>
          this is details
        </div>
        <div className="article-relevant">
          <div className="relevant-title">相关内容</div>
          <RelevantList typeid={this.state.typeid} />
        </div>
      </div>
    );
  }
}

export default Home;
