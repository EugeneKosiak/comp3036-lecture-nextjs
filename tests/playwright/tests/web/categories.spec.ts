// import { seed } from "@repo/db/seed";
import { expect, test } from "./fixtures";

// test.beforeAll(async () => {
//   await seed();
// });

test.describe("SPEC NAME", () => {
  test(
    "Renders the list of post categories",
    {
      tag: "@pages",
    },
    async ({ page }) => {
      await page.goto("/categories");

      await expect(await page.getByText("Node")).toBeVisible();
      await expect(await page.getByText("React")).toBeVisible();
    },
  );
});
