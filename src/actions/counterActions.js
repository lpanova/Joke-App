export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const incrementWithValue = (number) => ({
  type: 'INCREMENT_WITH_VALUE',
  payload: { number }
});

export const decrementWithValue = (number) => ({
  type: 'DECREMENT_WITH_VALUE',
  payload: { number }
});
