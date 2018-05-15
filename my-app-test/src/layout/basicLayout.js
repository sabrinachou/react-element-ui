import React, { Component } from 'react';
import { Layout } from 'element-react';

class BasicLayout extends Component {
    render() {
        return (
                <div>
{/*                    <Layout.Row>
                        <Layout.Col span="24"><div className="grid-content bg-purple-dark"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row>
                        <Layout.Col span="12"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="12"><div className="grid-content bg-purple-light"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row>
                        <Layout.Col span="8"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="8"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="8"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row>
                        <Layout.Col span="4"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="4"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="4"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="4"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="4"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="4"><div className="grid-content bg-purple-light"></div></Layout.Col>
                    </Layout.Row>

                    <br/>
                    <br/>

                    <Layout.Row gutter="20">
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>

                    <br/>
                    <br/>

                    <Layout.Row gutter="20">
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6" offset="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row gutter="20">
                        <Layout.Col span="6" offset="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6" offset="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row gutter="20">
                        <Layout.Col span="12" offset="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>*/}

                    <br/>
                    <br/>

                    <Layout.Row type="flex" className="row-bg">
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row type="flex" className="row-bg" justify="center">
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row type="flex" className="row-bg" justify="end">
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row type="flex" className="row-bg" justify="space-between">
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>
                    <br/>
                    <Layout.Row type="flex" className="row-bg" justify="space-around">
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                    </Layout.Row>

                    <Layout.Row gutter="10">
                        <Layout.Col xs="8" sm="6" md="4" lg="3"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col xs="4" sm="6" md="8" lg="9"><div className="grid-content bg-purple-light"></div></Layout.Col>
                        <Layout.Col xs="4" sm="6" md="8" lg="9"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col xs="8" sm="6" md="4" lg="3"><div className="grid-content bg-purple-light"></div></Layout.Col>
                    </Layout.Row>
                </div>
        );
    }
}

export default BasicLayout;