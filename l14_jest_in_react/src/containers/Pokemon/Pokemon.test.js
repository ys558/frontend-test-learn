import {act, renderHook} from '@testing-library/react-hooks'
import {usePokemon} from './Pokemon'

const getControlledPromise = () => {
  let deferred
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject }
  })
  return { deferred, promise }
}

it('fetch pokemon by the url from pokemonName', async ()=> {
  fetch = jest.fn()
  await act(async ()=> renderHook(()=> usePokemon('pikachu')))
  expect(fetch).toBeCalledWith(`https://pokeapi.co/api/v2/pokemon/pikachu`)
})

it('while fetching data, handle loading state correctly',async ()=> {
  const { deferred, promise } = getControlledPromise()
  fetch = jest.fn(()=> promise)
  const {result, waitForNextUpdate } = renderHook(usePokemon)

  expect(result.current.isLoading).toBe(true)
  deferred.resolve()

  await waitForNextUpdate()
  expect(result.current.isLoading).toBe(false)
})

it('handle success state correctly', async ()=>{
  const { deferred, promise } = getControlledPromise()
  fetch= jest.fn(()=> promise)

  const { result, waitForNextUpdate } = renderHook(usePokemon)
  deferred.resolve({json: ()=> ({ pokemon: 'pikachu' })})
  await waitForNextUpdate()
  expect(result.current.pokemon).toStrictEqual({ pokemon: 'pikachu' })
})

it('handle error state correctly', async ()=>{
  fetch= jest.fn(()=> new Promise(()=> { throw "Fetch error" } ))
  const {result, waitForNextUpdate} = renderHook(usePokemon)
  await waitForNextUpdate()

  expect(result.current.error).toStrictEqual("Fetch error")
})


