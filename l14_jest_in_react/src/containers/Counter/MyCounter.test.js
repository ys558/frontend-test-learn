import React from 'react'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter()})

import Counter from './MyCounter'
import useCutomHook from './useCustomHook'

import {act} from 'react-dom/test-utils'

describe('Counter', ()=> {
  const onCountChange = jest.fn()
  let wrapper 
  beforeEach(()=> wrapper=mount(<Counter onCountChange={onCountChange}/>))

  test('works', ()=> {
    expect(wrapper).not.toBeNull()
  })

  test('show my default text', ()=> {
    expect(wrapper.find('p').text()).toEqual('Count: 0')
  })

  test('correctly increments the count by 1', ()=>{
    wrapper.find('button').simulate('click')
    expect(wrapper.find('p').text()).toEqual('Count: 1')
  })

  test('onCountChange test', ()=>{
    expect(onCountChange).toBeCalledTimes(1)
    wrapper.find('button').simulate('click')
    expect(onCountChange).toBeCalledTimes(2)
  })

})

// test a custom hook:
describe.only('useCustomHook', ()=> {
  let results;
  const renderHook = hook => {
    const  HookWrapper = () => {
      results = hook()
      return null
    }
    mount(<HookWrapper/>)
    return results
  }

  test('works', ()=> {
    renderHook(useCutomHook)
    expect(results.count).toEqual(0)

    act(()=> results.increment())
    expect(results.count).toEqual(1)
  })
})