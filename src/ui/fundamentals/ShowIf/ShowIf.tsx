import React, { Children, ReactElement } from "react"
import { ShowIfProps } from "./ShowIf.types"

export const ShowIf = ({ condition, children, fallback = null }: ShowIfProps) => {
  const childArray = Children.toArray(children)

  // Find Then and Else children
  const thenChild = childArray.find(isThen) || null
  const elseChild = childArray.find(isElse) || fallback

  // Determine which content to render based on the condition
  const contentToRender = condition ? thenChild : elseChild || fallback

  return <>{contentToRender}</>
}

const Then = ({ children }: Pick<ShowIfProps, "children">) => <>{children}</>
const Else = ({ children }: Pick<ShowIfProps, "children">) => <>{children}</>

// Helper functions to check if a child is a Then or Else component
const isThen = (child: any): child is ReactElement => child.type === Then
const isElse = (child: any): child is ReactElement => child.type === Else
