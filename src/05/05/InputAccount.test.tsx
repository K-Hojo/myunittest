import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { InputAccount } from "./InputAccount"

const user = userEvent.setup()
test('メールアドレス入力欄', async () => {
    render(<InputAccount/>)
    const email = screen.getByRole('textbox', {name: 'メールアドレス'})
    const value = 'taro@example.com'
    await user.type(email, value)
    expect(screen.getByDisplayValue(value)).toBeInTheDocument()
    expect(email).toHaveDisplayValue(value)
})
test('パスワード入力欄', async () => {
    render(<InputAccount/>)
    const password = screen.getByPlaceholderText('9文字以上で入力')
    const value = 'hogehoge'
    await user.type(password, value)
    expect(password).toHaveDisplayValue(value)
})