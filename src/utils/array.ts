export const assignId = (arr: Array<any>) =>
  arr.reduce(
    (
      prev: Array<{
        id: number;
        type?: string;
        location?: string;
        count?: number;
      }>,
      curr,
      index
    ) => prev.concat([{ ...curr, id: index + 1 }]),
    [] as Array<{
      id: number;
      type?: string;
      location?: string;
      count?: number;
    }>
  );