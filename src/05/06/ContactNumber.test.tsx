import { render, screen } from "@testing-library/react";
import { ContactNumber } from "./ContactNumber";

test("アクセシブルネームは連絡先", () => {
  render(<ContactNumber />);
  expect(screen.getByRole("group", { name: "連絡先" })).toBeInTheDocument();
});
test("電話番号入力欄がある", () => {
  render(<ContactNumber />);
  expect(screen.getByRole("textbox", { name: "電話番号" })).toBeInTheDocument();
});
test("名前入力欄がある", () => {
  render(<ContactNumber />);
  expect(screen.getByRole("textbox", { name: "お名前" })).toBeInTheDocument();
});
