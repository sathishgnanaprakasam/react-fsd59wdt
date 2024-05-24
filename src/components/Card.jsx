import './Card.css';

const Card = (props) => {

  // console.log(props.data);

  return (
    <div className="card">
      <h1 className='header'>$0/month</h1>
      <hr />
      {
        props.data.features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))
      }
      <button className='btn btn-primary'>Button</button>
    </div>
  )
}

export default Card;