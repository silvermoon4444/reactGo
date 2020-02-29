import React, { Component } from "react";
import List from "../list/index";
import Footer from '../footer/index'
import "./index.scss";

export default class Index extends Component {
  state = {
    list: [
      { con: "我是数据1", sta: false },
      { con: "我是数据2", sta: false },
      { con: "我是数据3", sta: false }
    ]
  };

  // 渲染列表
  renderList() {
   return this.state.list.map((v, i) => (
      <List className={'line'+(i+1)} id={i} onChange={this.staChange} key={i}>
        {v.con}
      </List>
    ))
  }
  //   改变复选框状态
  staChange = (id, statu) => {
    const { list } = this.state;
    list[id].sta = statu;
    this.setState({
      list
    });
  };
  // 统计已经选择的数量
  selCount = () => {
    const { list } = this.state;
    return list.filter(v=>v.sta).length
  };
  // 渲染页面
  render() {
    return (
      <>
        {this.renderList()}
        <br />
        <Footer className="selCount" count={this.selCount()}/>
      </>
    );
  }
}
