import React from 'react';

// Hook组件, 利用yarn add @testing-library/react
// https://testing-library.com/docs/react-testing-library/api
import {render, fireEvent, cleanup} from '@testing-library/react'
import ChangeState, {ChangeStateChild} from '../../../ChangeState/ChangeState'

test('点击第一个按钮, 由原来的initial State改变为initial State Changed', ()=>{
  const { getByText } = render(<ChangeStateChild/>)
  expect(getByText(/initial/i).textContent).toBe('initial State')
  fireEvent.click(getByText('State Change btn'))
  expect(getByText(/initial/i).textContent).toBe('initial State Changed')
})

// test也可以用it代替:
it('点击第二个按钮, 由原来的Moe改变为Steve,', ()=>{
  const { getByText } = render(<ChangeState><ChangeStateChild/></ChangeState>)
  expect(getByText(/Moe/i).textContent).toBe('Moe')
  fireEvent.click(getByText('Change name'))
  expect(getByText(/Steve/i).textContent).toBe('Steve')
})

test('打印一些常用函数:', ()=>{
  // console.log(render(<ChangeStateChild/>))
  // {
  //   container: HTMLDivElement {
  //    ....
  //     },
  //     _reactRootContainer: ReactDOMBlockingRoot { _internalRoot: [FiberRootNode] }
  //   },
  //   baseElement: HTMLBodyElement {
  //     [Symbol(SameObject caches)]: [Object: null prototype] { childNodes: NodeList {} }
  //   },
  //   debug: [Function: debug],
  //   unmount: [Function: unmount],
  //   rerender: [Function: rerender],
  //   asFragment: [Function: asFragment],
  //   queryAllByLabelText: [Function: bound ],
  //   queryByLabelText: [Function: bound ],
  //   getAllByLabelText: [Function: bound ],
  //   getByLabelText: [Function: bound ],
  //   findAllByLabelText: [Function: bound ],
  //   findByLabelText: [Function: bound ],
  //   queryByPlaceholderText: [Function: bound ],
  //   queryAllByPlaceholderText: [Function: bound ],
  //   getByPlaceholderText: [Function: bound ],
  //   getAllByPlaceholderText: [Function: bound ],
  //   findAllByPlaceholderText: [Function: bound ],
  //   findByPlaceholderText: [Function: bound ],
  //   queryByText: [Function: bound ],
  //   queryAllByText: [Function: bound ],
  //   getByText: [Function: bound ],
  //   getAllByText: [Function: bound ],
  //   findAllByText: [Function: bound ],
  //   findByText: [Function: bound ],
  //   queryByDisplayValue: [Function: bound ],
  //   queryAllByDisplayValue: [Function: bound ],
  //   getByDisplayValue: [Function: bound ],
  //   getAllByDisplayValue: [Function: bound ],
  //   findAllByDisplayValue: [Function: bound ],
  //   findByDisplayValue: [Function: bound ],
  //   queryByAltText: [Function: bound ],
  //   queryAllByAltText: [Function: bound ],
  //   getByAltText: [Function: bound ],
  //   getAllByAltText: [Function: bound ],
  //   findAllByAltText: [Function: bound ],
  //   findByAltText: [Function: bound ],
  //   queryByTitle: [Function: bound ],
  //   queryAllByTitle: [Function: bound ],
  //   getByTitle: [Function: bound ],
  //   getAllByTitle: [Function: bound ],
  //   findAllByTitle: [Function: bound ],
  //   findByTitle: [Function: bound ],
  //   queryByRole: [Function: bound ],
  //   queryAllByRole: [Function: bound ],
  //   getAllByRole: [Function: bound ],
  //   getByRole: [Function: bound ],
  //   findAllByRole: [Function: bound ],
  //   findByRole: [Function: bound ],
  //   queryByTestId: [Function: bound ],
  //   queryAllByTestId: [Function: bound ],
  //   getByTestId: [Function: bound ],
  //   getAllByTestId: [Function: bound ],
  //   findAllByTestId: [Function: bound ],
  //   findByTestId: [Function: bound ]
  // }

  // render方法:
  // console.log(render.toString())
  // function render(ui, {
  //   container,
  //   baseElement = container,
  //   queries,
  //   hydrate = false,
  //   wrapper: WrapperComponent
  // } = {}) {
  //   if (!baseElement) {
  //     // default to document.body instead of documentElement to avoid output of potentially-large
  //     // head elements (such as JSS style blocks) in debug output
  //     baseElement = document.body;
  //   }

  //   if (!container) {
  //     container = baseElement.appendChild(document.createElement('div'));
  //   } // we'll add it to the mounted containers regardless of whether it's actually
  //   // added to document.body so the cleanup method works regardless of whether
  //   // they're passing us a custom container or not.


  //   mountedContainers.add(container);

  //   const wrapUiIfNeeded = innerElement => WrapperComponent ? /*#__PURE__*/_react.default.createElement(WrapperComponent, null, innerElement) : innerElement;

  //   (0, _actCompat.default)(() => {
  //     if (hydrate) {
  //       _reactDom.default.hydrate(wrapUiIfNeeded(ui), container);
  //     } else {
  //       _reactDom.default.render(wrapUiIfNeeded(ui), container);
  //     }
  //   });
  //   return {
  //     container,
  //     baseElement,
  //     debug: (el = baseElement, maxLength, options) => Array.isArray(el) ? // eslint-disable-next-line no-console
  //     el.forEach(e => console.log((0, _dom.prettyDOM)(e, maxLength, options))) : // eslint-disable-next-line no-console,
  //     console.log((0, _dom.prettyDOM)(el, maxLength, options)),
  //     unmount: () => {
  //       (0, _actCompat.default)(() => {
  //         _reactDom.default.unmountComponentAtNode(container);
  //       });
  //     },
  //     rerender: rerenderUi => {
  //       render(wrapUiIfNeeded(rerenderUi), {
  //         container,
  //         baseElement
  //       }); // Intentionally do not return anything to avoid unnecessarily complicating the API.
  //       // folks can use all the same utilities we return in the first place that are bound to the container
  //     },
  //     asFragment: () => {
  //       /* istanbul ignore else (old jsdom limitation) */
  //       if (typeof document.createRange === 'function') {
  //         return document.createRange().createContextualFragment(container.innerHTML);
  //       } else {
  //         const template = document.createElement('template');
  //         template.innerHTML = container.innerHTML;
  //         return template.content;
  //       }
  //     },
  //     ...(0, _dom.getQueriesForElement)(baseElement, queries)
  //   };
  // }
})

afterEach(cleanup)