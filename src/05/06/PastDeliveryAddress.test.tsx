import { render, screen, within } from "@testing-library/react";
import { PastDeliveryAddress } from "./PastDeliveryAddress";
import { deliveryAddresses } from "./fixtures";

test("過去のお届け先の選択肢には住所が表示されている", () => {
  render(<PastDeliveryAddress options={deliveryAddresses} />);
  const list = screen.getByRole("combobox");
  expect(list).toBeInTheDocument();
  expect(within(list).getAllByRole("option")).toHaveLength(1);
  expect(within(list).getByRole("option")).toHaveTextContent(
    "東京都またたび区肉球町222-22"
  );
});
