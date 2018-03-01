/* @flow */
import React from 'react'
import styled from 'styled-components/primitives'
import { Grid, Row } from 'react-native-easy-grid'
import Header from './organisms/Header'

const Text = styled.Text`
  font-size: 32;
  color: palevioletred;
`

export default () => (
  <Grid>
    <Row style={{ height: 30 }} />
    <Row style={{ height: 64, backgroundColor: '#ddd' }}>
      <Header />
    </Row>
    <Row size={1}>
      <Text>Hello</Text>
    </Row>
    <Row style={{ height: 32, backgroundColor: 'black' }}>
      <Text>...............</Text>
    </Row>
  </Grid>
)
