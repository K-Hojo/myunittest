import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { deliveryAddresses } from "./fixtures";
import { Form } from "./Form";

const user = userEvent.setup();

describe("過去のお届け先なし", () => {
  test("入力欄がある", () => {
    render(<Form />);
    expect(screen.getByRole("group", { name: "連絡先" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "お届け先" })).toBeInTheDocument();
  });
  test("送信ボタンを押すと入力内容が送信される", async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form onSubmit={onSubmit} />);
    const contactNumber = await inputContactNumber();
    const deliveryAddress = await inputDelveryAddress();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({ ...contactNumber, ...deliveryAddress })
    );
  });
});

describe("過去のお届け先あり", () => {
  test("新しいお届け先を登録するか答えるまでお届け先を選べない", async () => {
    render(<Form deliveryAddresses={deliveryAddresses} />);
    expect(
      screen.getByRole("group", { name: "新しいお届け先を登録しますか？" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: "過去のお届け先" })
    ).toBeDisabled();
  });
  test("いいえを選択、送信すると入力内容が送信される", async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form deliveryAddresses={deliveryAddresses} onSubmit={onSubmit} />);
    await user.click(screen.getByLabelText("いいえ"));
    expect(
      screen.getByRole("group", { name: "過去のお届け先" })
    ).toBeInTheDocument();
    const contactNumber = await inputContactNumber();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({ ...contactNumber })
    );
  });
  test("はいを選択、入力、送信すると入力内容が送信される", async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form deliveryAddresses={deliveryAddresses} onSubmit={onSubmit} />);
    await user.click(screen.getByLabelText("はい"));
    expect(
      screen.getByRole("group", { name: "新しいお届け先" })
    ).toBeInTheDocument();
    const contactNumber = await inputContactNumber();
    const deliveryAddress = await inputDelveryAddress();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({ ...contactNumber, ...deliveryAddress })
    );
  });
});

async function inputContactNumber(
  inputValues = { name: "田中太郎", phoneNumber: "000-0000-0000" }
) {
  await user.type(
    screen.getByRole("textbox", { name: "電話番号" }),
    inputValues.phoneNumber
  );
  await user.type(
    screen.getByRole("textbox", { name: "お名前" }),
    inputValues.name
  );
  return inputValues;
}

async function inputDelveryAddress(
  inputValues = {
    postalCode: "222-2222",
    prefecture: "東京都",
    municipalities: "またたび区肉球町",
    streetNumber: "222-22",
  }
) {
  await user.type(
    screen.getByRole("textbox", { name: "郵便番号" }),
    inputValues.postalCode
  );
  await user.type(
    screen.getByRole("textbox", { name: "都道府県" }),
    inputValues.prefecture
  );
  await user.type(
    screen.getByRole("textbox", { name: "市区町村" }),
    inputValues.municipalities
  );
  await user.type(
    screen.getByRole("textbox", { name: "番地番号" }),
    inputValues.streetNumber
  );
  return inputValues;
}

function mockHandleSubmit() {
  const mockFn = jest.fn();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: { [k: string]: unknown } = {};
    formData.forEach((value, key) => (data[key] = value));
    mockFn(data);
  };
  return [mockFn, onSubmit] as const;
}

async function clickSubmit() {
  await user.click(
    screen.getByRole("button", { name: "注文内容の確認へ進む" })
  );
}

function getGroupByName(name: string) {}
