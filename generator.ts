type State<T> = {
  done: boolean,
  currentYieldValue: T | undefined,
  status: 'suspended' | 'closed',
}
/**
 * Function that reproduces how JS generator work. 
 * @param yieldArray 
 * @returns 
 */
function customGenerator<T>(yieldArray: T[]) {
      const state: State<T>  = {
        done: false,
        currentYieldValue: undefined,
        status: 'suspended',
      }

      const returnFunc = () => {
        state.done = true;
        state.status = 'closed';

        return { value: yieldArray[yieldArray.length - 1], done: true }
      }

      let yieldTracker = 0;
      return {
        next: () => {
          if (state.done) {
            return { value: undefined, done: true };
          } else {
            state.currentYieldValue = yieldArray[yieldTracker];
            const isDone = yieldTracker >=(yieldArray.length - 1);
            yieldTracker++;
            state.status = isDone ? 'closed' : 'suspended';
            return { value: state.currentYieldValue, done: isDone ? true : false };
          }
        },
        throw: () => {
          state.status = 'closed';
          returnFunc();
          throw Error('Error');
        },
        return: returnFunc,
      }     
}

//pass the yield array to the generator
const generator = customGenerator([1,5,7,9]);
