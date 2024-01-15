import { render, screen } from "@testing-library/react";
import { ArticleListItem } from "./ArticleListItem";
import { item } from "./fixture";

test("IDがリンクになっていること", () => {
  render(ArticleListItem(item));
  const link = screen.getByRole("link", { name: "see more" });
  expect(link).toHaveAttribute(
    "href",
    "/articles/howto-testing-with-typescript"
  );
});
