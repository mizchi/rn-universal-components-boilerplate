/* @flow */
import React from 'react'
import styled from 'styled-components/primitives'

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
    <TitleText>Hello</TitleText>
  </SceneView>
)
