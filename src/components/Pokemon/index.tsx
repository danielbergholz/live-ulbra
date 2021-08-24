interface IProps {
  name: string
}

const Pokemon = (props: IProps) => {
  return <p>{props.name}</p>
}

export default Pokemon
