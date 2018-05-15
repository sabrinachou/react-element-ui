import React, { Component } from 'react';
import { Button } from 'element-react';
import 'element-theme-default';

class ButtonAndIcon extends Component {
    render() {
        return (
            <div>
                <i className="el-icon-edit"></i>
                <i className="el-icon-share"></i>
                <i className="el-icon-delete"></i>
                <Button type="primary" icon="search">搜索</Button>

                <br/>
                <br/>

                <Button>默认按钮</Button>
                <Button type="primary">主要按钮</Button>
                <Button type="text">文字按钮</Button>

                <br/>
                <br/>

                <Button plain={true} disabled={true}>默认按钮</Button>
                <Button type="primary" disabled={true}>主要按钮</Button>
                <Button type="text" disabled={true}>文字按钮</Button>

                <br/>
                <br/>

                <div className="intro-block">
                    <div className="block">
                        <span className="demonstration">默认显示颜色</span>
                        <span className="wrapper">
                          <Button type="success">成功按钮</Button>
                          <Button type="warning">警告按钮</Button>
                          <Button type="danger">危险按钮</Button>
                          <Button type="info">信息按钮</Button>
                        </span>
                    </div>
                    <div className="block">
                        <span className="demonstration">hover 显示颜色</span>
                        <span className="wrapper">
                          <Button plain={true} type="success">成功按钮</Button>
                          <Button plain={true} type="warning">警告按钮</Button>
                          <Button plain={true} type="danger">危险按钮</Button>
                          <Button plain={true} type="info">信息按钮</Button>
                        </span>
                    </div>
                </div>

                <br/>
                <br/>

                <Button.Group>
                    <Button type="primary" icon="arrow-left">上一页</Button>
                    <Button type="primary">下一页<i className="el-icon-arrow-right el-icon-right"></i></Button>
                </Button.Group>
                <br/>
                <br/>
                <Button.Group>
                    <Button type="primary" icon="edit"></Button>
                    <Button type="primary" icon="share"></Button>
                    <Button type="primary" icon="delete"></Button>
                </Button.Group>
                <br/>
                <br/>
                <Button type="primary" loading={true}>加载中</Button>

            </div>
        );
    }
}

export default ButtonAndIcon;