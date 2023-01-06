import type { Load } from "@sveltejs/kit";

export const load: Load = async () => {
  return {
    parentPageText: "WORKS!", // will not be fetched from child load parent()
  };
};
