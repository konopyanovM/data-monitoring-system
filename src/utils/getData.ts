interface getDataProps {
  name: string
  bar: string
}

export const getData = ({ name, bar }: getDataProps) => {
  return { name, bar }
}
