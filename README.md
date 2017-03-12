# Redux Actions Builder 🛠
This is a library to help you create actions creators with little effort.

## Installation
`yarn add redux-actions-builder`


## Usage
When you start a Redux app you usually need to create multiple actions to keep track of your async operations:

``` js
export const fetchStart = 'FETCH_START'
export const fetchSuccess = 'FETCH_SUCCESS'
export const fetchFailure = 'FETCH_FAILURE'
```

And these actions usually have a status associated to them that we can use to handle changes in the UI. For example: a `fetchStart` action could have a `pending` status that would change to `success` when the action is completed successfully.

In order to help the average js developer avoid the usual /fatigue/  we all came to know I built this small library that does this two things for you like and that can be used like this:

``` js
// actions.js
import { buildActions } from 'redux-actions-builder'

export const fetch = buildActions('fetch')
```

Which you can then use like this:

``` js
// reducer.js
import { fetch } from './actions'

export default state = (state = {}, action) => {
	switch (action) {
		case fetch.start: 
			return {
				...state,
				status: fetch.start.status
			}
		case fetch.failure: 
			return {
				...state,
				status: fetch.failure.status
			}
		case fetch.success: 
			return {
				...state,
				status: fetch.success.status
			}
	}
}
```

And as an extra feature if you wanted to create many actions in a bundle you could do it like this: 

``` js
// actions.js
import { buildActionsBundle } from 'redux-actions-builder'

export default buildActionsBundle([
	'fetch',
	'fetchAll',
	'remove',
	'update'
])
```

A beauty, I know ✨ Feel free to send a PR if you think something else could be added to this small package :)
