import React, { Component } from 'react';
import { Radio } from 'element-react';

class RadioApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 3,
            radio3: '上海',
            radio4: '上海',
            radio5: '上海'
        }
    }

    onChange(key, value) {
        //this.setState({ value });
        this.setState({
            [key]: value
        });
    }

    render() {
        return (
            <div>
{/*                <Radio value="1" checked={this.state.value === 1} onChange={this.onChange.bind(this)}>备选项1</Radio>
                <Radio value="2" checked={this.state.value === 2} onChange={this.onChange.bind(this)}>备选项2</Radio>*/}

{/*                <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>
                    <Radio value="3">备选项</Radio>
                    <Radio value="6">备选项</Radio>
                    <Radio value="9">备选项</Radio>
                </Radio.Group>*/}

                <Radio.Group value={this.state.radio3} onChange={this.onChange.bind(this, 'radio3')}>
                    <Radio.Button value="上海" />
                    <Radio.Button value="北京" />
                    <Radio.Button value="广州" />
                    <Radio.Button value="深圳" />
                </Radio.Group>
                <Radio.Group value={this.state.radio4} onChange={this.onChange.bind(this, 'radio4')}>
                    <Radio.Button value="上海" />
                    <Radio.Button value="北京" />
                    <Radio.Button value="广州" disabled={true} />
                    <Radio.Button value="深圳" />
                </Radio.Group>
                <Radio.Group value={this.state.radio5} disabled={true}>
                    <Radio.Button value="上海" />
                    <Radio.Button value="北京" />
                    <Radio.Button value="广州" />
                    <Radio.Button value="深圳" />
                </Radio.Group>
            </div>
        );
    }
}

export default RadioApp;