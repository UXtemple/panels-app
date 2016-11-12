import { Horizontal, Vertical } from 'panels/blocks'
import React from 'react'

export const panels = {
  '/': {
    type: 'Hey'
  },
  '/ho': {
    type: 'Ho'
  },
  '/ho/raw': {
    type: 'Raw',
    isCustom: true
  }
}

export const types = {
  Hey: ({ width }) => (
    <Vertical style={{ width }}>
      <Horizontal teleportTo='ho'>
        Heeeey!
      </Horizontal>
    </Vertical>
  ),

  Ho: ({ width }) => (
    <Vertical style={{ width }}>
      <Horizontal teleportTo='..'>
        Hooooo!
      </Horizontal>

      <Horizontal teleportTo={`${location.href}/..`}>
        Teleports! :)
      </Horizontal>

      <Horizontal teleportTo='raw'>
        raw?
      </Horizontal>
    </Vertical>
  ),

  Raw: ($el, props) => {
    $el.style.width = props.width
    $el.style.backgroundColor = 'blue'
    $el.style.color = 'white'
    $el.innerHTML = `Yeah I'm raw HTML...`
  }
}
