import History from '../components/History';

const Counter = ({ count, history }) => {
  return (
      <div>
        <h1>Counter: {count}</h1>
          <History 
            history={history}
        />
      </div>
  )
}

export default Counter;