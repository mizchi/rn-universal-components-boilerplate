/* @flow */
import React from 'react'
import styled from 'styled-components/primitives'
import { Grid, Row } from 'react-native-easy-grid'

const SceneView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const TitleText = styled.Text`
  font-size: 32;
  color: palevioletred;
`

export default () => (
  <SceneView>
    <Grid>
      <Row height={32} />
      <Row size={1}>
        <TitleText>Hello2</TitleText>
      </Row>
    </Grid>
  </SceneView>
)
