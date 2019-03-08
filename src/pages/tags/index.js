import React, { PureComponent } from 'react';
import './index.less';
import RelevantList from '@/pages/home';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      typeid: props.match.params.id
    }
  }
  render() {
    return (
      <div>
        <div className="tags-containar">
          <div className="tag-info">
            <h3 className="tit">javascript</h3>
            <span className="meta">2000点击，4001 文章</span>
          </div>
          <RelevantList typeid={this.state.typeid} />
        </div>
      </div>
    );
  }
}

export default Home;
