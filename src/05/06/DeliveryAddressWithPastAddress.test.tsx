import { render, screen, within } from "@testing-library/react";
import { DeliveryAddressWithPastAddress } from "./DeliveryAddressWithPastAddress";
import { deliveryAddresses } from "./fixtures";
import { userEvent } from "@testing-library/user-event";

const user = userEvent.setup();
test("新しいお届け先を登録するかどうかのラジオボタンがある", () => {
  render(<DeliveryAddressWithPastAddress options={deliveryAddresses} />);
  const fields = screen.getByRole("group", {
    name: "新しいお届け先を登録しますか？",
  });
  expect(within(fields).getAllByRole("radio")).toHaveLength(2);
});
test("初期値ではお届け先を選択できない", () => {
  render(<DeliveryAddressWithPastAddress options={deliveryAddresses} />);
  const newAdress = screen.queryByRole("group", { name: "新しいお届け先" });
  expect(newAdress).not.toBeInTheDocument();
  const pastAdresses = screen.getByRole("group", { name: "過去のお届け先" });
  expect(pastAdresses).toBeInTheDocument();
  expect(pastAdresses).toBeDisabled();
});
describe("新しいお届け先を登録", () => {
  test("はいを選択すると新しいお届け先を登録のフィールドが出る", async () => {
    render(<DeliveryAddressWithPastAddress options={deliveryAddresses} />);
    await clickRadio("はい");
    expect(
      screen.getByRole("group", { name: "新しいお届け先" })
    ).toBeInTheDocument();
  });
});
describe("過去のお届け先を使用", () => {
  test("いいえを選択すると過去のお届け先が活性化", async () => {
    render(<DeliveryAddressWithPastAddress options={deliveryAddresses} />);
    await clickRadio("いいえ");
    const pastAdresses = screen.getByRole("group", { name: "過去のお届け先" });
    expect(pastAdresses).toBeInTheDocument();
    expect(pastAdresses).toBeEnabled();
  });
});

async function clickRadio(name: string) {
  await user.click(screen.getByRole("radio", { name }));
}
