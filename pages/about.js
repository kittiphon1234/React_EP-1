import React, { Component } from 'react'
import Theme from '../components/theme';

class About extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h2>เกี่ยวกับฉัน</h2>
            </div>
        )
    }
}

export default Theme(About)