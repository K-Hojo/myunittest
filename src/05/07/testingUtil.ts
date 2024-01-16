import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

const user = userEvent.setup();

export function getGroupByName(name: string) {
  return screen.getByRole("group", { name });
}
export function getTextBoxByName(name: string) {
  return screen.getByRole("textbox", { name });
}

export async function inputContactNumber(
  inputValues = {
    name: "田中太郎",
    phoneNumber: "000-0000-0000",
  }
) {
  await user.type(getTextBoxByName("お名前"), inputValues.name);
  await user.type(getTextBoxByName("電話番号"), inputValues.phoneNumber);
  return inputValues;
}
export async function inputDeliveryAddress(
  inputValues = {
    postalCode: "222-2222",
    prefecture: "東京都",
    municipalities: "またたび区肉球町",
    streetNumber: "222-22",
  }
) {
  await user.type(getTextBoxByName("郵便番号"), inputValues.postalCode);
  await user.type(getTextBoxByName("都道府県"), inputValues.prefecture);
  await user.type(getTextBoxByName("市区町村"), inputValues.municipalities);
  await user.type(getTextBoxByName("番地番号"), inputValues.streetNumber);
  return inputValues;
}

export async function clickSubmit() {
  await user.click(screen.getByRole("button", { name: "注文内容の確認へ進む" }));
}
