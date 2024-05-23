const Hello = (props) => {

  console.log(props);

  return (
    <div>
      <p>Hello {props.name}!</p>
    </div>
  )
}

export default Hello;