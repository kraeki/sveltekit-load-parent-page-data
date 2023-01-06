import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ parent }) => {
  const parentData = await parent();
  return {
    parentText: parentData.parentText,
    childText: "WORKS!",
  };
};
