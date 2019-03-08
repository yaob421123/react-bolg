import React, { PureComponent } from 'react';
import InfiniteLoader from 'react-infinite-loader';
import './index.less';
import ListItem from '@/components/listItem';
import { sreachIndexOF } from '@/common/utils.js';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      typeid: this.props.typeid ? this.props.typeid : '', // 类型id 例如  html
      isloader: true,
      dataList: [] // 数据列表
    }
  }
  componentDidMount () {
    this.loadItems()
  }

  componentWillReceiveProps () {
    this.setState({
      isloader: true,
      dataList: []
    }, () => {
       this.loadItems()
    });
  }

  componentWillUnmount () {
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
      return
    }
  }

  loadItems () {
    let arr = [{
      id: 1,
      title: '《JavaScript 模式》知识点小抄本（上）',
      date: '2019-03-04 12:00',
      tags: 'javascript',
      thumb: 10
    }, {
      id: 2,
      title: '《JavaScript 模式》知识点小抄本（上）',
      date: '2019-03-04 12:00',
      tags: 'javascript',
      thumb: 1
    }, {
      id: 3,
      title: '前端最新8大知识体系，你与架构师只差这一步',
      date: '2019-03-03 12:00',
      tags: 'javascript',
      thumb: 2
    }, {
      id: 4,
      title: '重学 JS 系列：聊聊 new 操作符',
      date: '2019-03-02 12:00',
      tags: 'javascript',
      thumb: 3
    }, {
      id: 5,
      title: '【半月刊 2】前端高频面试题及答案汇总',
      date: '2019-03-01 12:00',
      tags: 'javascript',
      thumb: 4
    }, {
      id: 6,
      title: '【前端词典】进阶必备的网络基础（上）',
      date: '2019-02-04 12:00',
      tags: 'javascript',
      thumb: 5
    }, {
      id: 7,
      title: '【西瓜创客】招聘季邀您在这个夏天和非同寻常的人一起做点非同寻常的事~',
      date: '2019-01-04 12:00',
      tags: 'javascript',
      thumb: 6
    }, {
      id: 8,
      title: '与DvaJS风云对话，是DvaJS挑战者？还是又一轮子？',
      date: '2018-09-04 12:00',
      tags: 'javascript',
      thumb: 7
    }, {
      id: 9,
      title: '重学 JS 系列：聊聊 new 操作符',
      date: '2018-07-04 12:00',
      tags: 'javascript',
      thumb: 7
    }, {
      id: 10,
      title: '【半月刊 2】前端高频面试题及答案汇总',
      date: '2018-06-04 12:00',
      tags: 'javascript',
      thumb: 6
    }, {
      id: 11,
      title: '【前端词典】进阶必备的网络基础（上）',
      date: '2017-06-04 12:00',
      tags: 'javascript',
      thumb: 5
    }, {
      id: 12,
      title: '【西瓜创客】招聘季邀您在这个夏天和非同寻常的人一起做点非同寻常的事~',
      date: '2016-06-04 12:00',
      tags: 'javascript',
      thumb: 6
    }, {
      id: 13,
      title: '与DvaJS风云对话，是DvaJS挑战者？还是又一轮子？',
      date: '2015-02-04 12:00',
      tags: 'webpack',
      thumb: 7
    }]
    if (this.props.match && this.props.match.params.title) {
      arr.map((item, idx) => item.title = sreachIndexOF(this.props.match.params.title, item.title))
    }
    let items = this.state.dataList.concat(arr);
    setTimeout(() => {
      this.setState({ 
        dataList: items
      }, () => {
        if (this.state.dataList.length > 30) {
          this.setState({ 
            isloader: false
          })
        }
      })
    }, 500);
  }

  handleVisit () {
    this.loadItems();
  }

  renderLoader () {
    if (this.state.isloader) {
      return (
        <InfiniteLoader onVisited={ () => this.handleVisit() } />
      )
    } else {
      return (
        <div className="no-loader">- 没有更多了 -</div>
      )
    }
  }

  render() {
    const listItem = this.state.dataList.map((item, idx) =>
      <ListItem key={idx.toString()} content={item} isicon={true} />
    )
    return (
      <div>
        <div className="home-conatainar shadow">
          {listItem}
        </div>
        { this.renderLoader() }
      </div>
    );
  }
}

export default Home;
