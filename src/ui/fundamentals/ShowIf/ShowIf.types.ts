import { ReactNode } from "react"

export type ShowIfProps = {
  condition: boolean
  children: ReactNode
  fallback?: ReactNode
}
