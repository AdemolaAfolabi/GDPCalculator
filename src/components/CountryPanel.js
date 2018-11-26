import React, {Component} from 'react';


export class CountryPanel extends React.Component {

    constructor(props){
       super(props)
    }

    componentDidUpdate() {

    }

    render() {
        return <div>
            <div>
                <input title="From"/>
                <input title="To"/>
            </div>
            <b>Convert</b>
        </div>
    }
}