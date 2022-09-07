import { FC, ReactNode } from 'react'

interface ConditionProps {
  match: boolean
  children: ReactNode
}

const Condition: FC<ConditionProps> = ({ match, children }) => {
  if (match) return <>{children}</>
  return null
}

export default Condition
