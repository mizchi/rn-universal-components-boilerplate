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
      <Row>
        <TitleText>Hello2</TitleText>
      </Row>
    </Grid>
  </SceneView>
)
