import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { Form } from "./Form"

const user = userEvent.setup()
test('formのアクセシブルネームは見出し', () => {
    render(<Form/>)
    expect(screen.getByRole('form', {name: 'アカウント登録'})).toBeInTheDocument()
})
test('サインアップは非活性', () => {
    render(<Form/>)
    expect(screen.getByRole('button', {name:'サインアップ'})).toBeDisabled()
})
test('利用規約の同意にチェックするとサインアップが活性化', async () => {
    render(<Form/>)
    await user.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('button', {name:'サインアップ'})).toBeEnabled()
})