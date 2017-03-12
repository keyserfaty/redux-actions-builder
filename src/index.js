export const STATES = ['start', 'failure', 'success']

export const buildActions = name => STATES
  .reduce((res, state) => {
    res[state] = {
      type: `${name.toUpperCase()}_${state.toUpperCase()}`,
      status: state === 'start' ? 'pending' : state
    }

    return res
  }, {})

export const buildActionsBundle = actions => actions
  .reduce((res, action) => {
    res[action] = buildActions(action)
    return res
  }, {})
