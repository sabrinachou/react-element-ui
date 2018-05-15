import React, { Component } from 'react';
import { Checkbox } from 'element-react';

class CheckboxApp extends Component {

/*    constructor(props) {
        super(props);

        this.state = {
            checkList: ['复选框 A', '选中且禁用']
        }
    }*/

    constructor(props) {
        super(props);

        this.state = {
            checkAll: false,
            cities: ['上海', '北京', '广州', '深圳'],
            checkedCities: ['上海', '北京'],
            isIndeterminate: true,
        }
    }

    handleCheckAllChange(checked) {
        const checkedCities = checked ? ['上海', '北京', '广州', '深圳'] : [];

        this.setState({
            isIndeterminate: false,
            checkAll: checked,
            checkedCities: checkedCities,
        });
    }

    handleCheckedCitiesChange(value) {
        const checkedCount = value.length;
        const citiesLength = this.state.cities.length;

        this.setState({
            checkedCities: value,
            checkAll: checkedCount === citiesLength,
            isIndeterminate: checkedCount > 0 && checkedCount < citiesLength,
        });
    }

    render() {
        return (
            <div>

                <Checkbox
                    checked={this.state.checkAll}
                    indeterminate={this.state.isIndeterminate}
                    onChange={this.handleCheckAllChange.bind(this)}>全选</Checkbox>
                <div style={{margin: '15px 0'}}></div>

                <Checkbox.Group
                    min="1"
                    max="2"
                    value={this.state.checkedCities}
                    onChange={this.handleCheckedCitiesChange.bind(this)}>
                    {
                        this.state.cities.map((city, index) =>
                            <Checkbox.Button key={index} label={city}></Checkbox.Button>
                        )
                    }
                </Checkbox.Group>
            </div>
        );
    }
}

export default CheckboxApp;