import { render, screen } from "@testing-library/react"
import { ShowIf } from "./ShowIf"

describe("ShowIf", () => {
  test("renders", () => {
    render(
      <ShowIf condition={true}>
        <p>test</p>
      </ShowIf>
    )

    const element = screen.getByText("ShowIf")

    expect(element).toBeInTheDocument()
  })
})
