export const count = {
    state: 0, // initial state
    reducers: {
      // handle state changes with pure functions
      increment(state, payload) {
        return state + payload;
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      async incrementAsync(payload, rootState) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch.count.increment(payload);
      },
    }),
  };

// dispatch({ type: "count/increment", payload: 1 });

//   export const count = {
// 	state: 0,
// 	reducers: {
// 		increment: (s) => s + 1,
// 	},
// 	effects: (dispatch) => ({
// 		async asyncIncrement() {
// 			await new Promise((resolve) => {
// 				setTimeout(resolve, 1000)
// 			})

// 			dispatch.count.increment()
// 		},
// 	}),
// }
