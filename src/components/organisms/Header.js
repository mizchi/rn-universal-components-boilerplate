/* @flow */
import React from 'react'
import styled from 'styled-components/primitives'
import { Grid, Col } from 'react-native-easy-grid'

const Text = styled.Text`
  font-size: 32;
  color: palevioletred;
`

export default () => (
  <Grid>
    <Col>
      <Text>A</Text>
    </Col>
    <Col>
      <Text>B</Text>
    </Col>
    <Col>
      <Text>C</Text>
    </Col>
  </Grid>
)
