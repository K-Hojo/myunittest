import { getAllByRole, render, screen, within } from "@testing-library/react"
import { ArticleList } from "./ArticleList"
import { items } from "./fixture"


test('一覧が表示される',() => {
    render(<ArticleList items={items}/>)
    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()
    expect(within(list).getAllByRole('listitem')).toHaveLength(3)
})
test('一覧アイテムががない場合「記事がありません」が表示される',() => {
    render(<ArticleList items={[]}/>)
    const list = screen.queryByRole("list")
    expect(screen.getByText('記事がありません')).toBeInTheDocument()
    expect(list).not.toBeInTheDocument()
    expect(list).toBeNull()
})

