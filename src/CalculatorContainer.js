import React, { Component } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columns, Menu, Box, Section, Navbar } from 'react-bulma-components';

export const CalculatorMenu = () => {
    return <Menu>
        <Menu.List title = "General">
            <Menu.List.Item>Dashboard</Menu.List.Item>
            <Menu.List.Item>News</Menu.List.Item>
        </Menu.List>
        <Menu.List title = "Country">
            <Menu.List.Item>Country GDP</Menu.List.Item>
            <Menu.List.Item>Country GNI</Menu.List.Item>
        </Menu.List>
        <Menu.List title = "Timeline">
            <Menu.List.Item>Overview</Menu.List.Item>
            <Menu.List.Item>Comparsion</Menu.List.Item>
        </Menu.List>
    </Menu>
}

export const CalculatorContainer = (props) => {
    return <React.Fragment>
    <Section>
        <Columns>
            <Columns.Column size={"one-quarter"}>
                <CalculatorMenu/>
            </Columns.Column>
            <Columns.Column size={"three-quarters"}>
                {props.children}
            </Columns.Column>
        </Columns>
    </Section>
    </React.Fragment> 
}
