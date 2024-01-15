import { render, screen } from "@testing-library/react";
import { Agreement } from "./Ageement";

test("fieldsetのアクセシブルネームはlegend", () => {
  render(<Agreement />);
  expect(
    screen.getByRole("group", { name: "利用規約の同意" })
  ).toBeInTheDocument();
});
test("チェックボックスにはチェックが入っていない", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});
