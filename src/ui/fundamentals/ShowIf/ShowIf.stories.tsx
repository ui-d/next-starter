import React from "react"
import { ShowIf } from "./ShowIf"

export default {
  title: "YourCategory/ShowIf",
  component: ShowIf,
}

export const Default = () => (
  <ShowIf condition={true}>
    <p>test</p>
  </ShowIf>
)
