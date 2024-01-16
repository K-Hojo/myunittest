import { render, screen } from "@testing-library/react";
import { DeliveryAddressInput } from "./DeliveryAddressInput";

test("デフォルトのアクセシブルネームはお届け先", () => {
  render(<DeliveryAddressInput />);
  expect(screen.getByRole("group", { name: "お届け先" })).toBeInTheDocument();
});
test("アクセシブルネームを指定できる", () => {
  render(<DeliveryAddressInput title="新しいお届け先" />);
  expect(
    screen.getByRole("group", { name: "新しいお届け先" })
  ).toBeInTheDocument();
});
test("郵便番号入力欄がある", () => {
  render(<DeliveryAddressInput />);
  expect(screen.getByRole("textbox", { name: "郵便番号" })).toBeInTheDocument();
});
test("都道府県入力欄がある", () => {
  render(<DeliveryAddressInput />);
  expect(screen.getByRole("textbox", { name: "都道府県" })).toBeInTheDocument();
});
test("市区町村入力欄がある", () => {
  render(<DeliveryAddressInput />);
  expect(screen.getByRole("textbox", { name: "市区町村" })).toBeInTheDocument();
});
test("番地番号入力欄がある", () => {
  render(<DeliveryAddressInput />);
  expect(screen.getByRole("textbox", { name: "番地番号" })).toBeInTheDocument();
});
