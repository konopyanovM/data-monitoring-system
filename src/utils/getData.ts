interface getDataProps {
  name: string
  bar: string
}

const getData = ({ name, bar }: getDataProps) => {
  return { name, bar }
}

export default getData
