var dist = require('../../dist/index')

it('Should generate a list of async actions for the action', () => {
  const fetch = dist.buildActions('fetch')

  const expected = {
    start: {
      type: 'FETCH_START',
      status: 'pending'
    },
    success: {
      type: 'FETCH_SUCCESS',
      status: 'success'
    },
    failure: {
      type: 'FETCH_FAILURE',
      status: 'failure'
    }
  }

  expect(fetch).toEqual(expected)
})

it('Should generate a list of actions with their async actions associated to them', () => {
  const actions = dist.buildActionsBundle([
    'fetch',
    'update'
  ])

  const expected = {
    fetch: {
      start: {
        type: 'FETCH_START',
        status: 'pending'
      },
      success: {
        type: 'FETCH_SUCCESS',
        status: 'success'
      },
      failure: {
        type: 'FETCH_FAILURE',
        status: 'failure'
      }
    },
    update: {
      start: {
        type: 'UPDATE_START',
        status: 'pending'
      },
      success: {
        type: 'UPDATE_SUCCESS',
        status: 'success'
      },
      failure: {
        type: 'UPDATE_FAILURE',
        status: 'failure'
      }
    }
  }

  expect(actions).toEqual(expected)
})
