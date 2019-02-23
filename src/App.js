import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columnns, Menu, Hero, Heading, Container, Section } from 'react-bulma-components';
import { CalculatorContainer, CalculatorMenu } from './CalculatorContainer';

class App extends Component {
  render() {
     return <CalculatorContainer>
            <Hero color="primary">
              <Hero.Body>
                <Container>
                  <Heading>GDP Calculator</Heading>
                  <Button>
                     Learn More
                  </Button>
                </Container>
              </Hero.Body>
            </Hero>
          <Section>
                      
          </Section>
      </CalculatorContainer>
  }
}

export default App;
