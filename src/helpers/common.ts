export const alt = "review phim"

export const handleObjectQuery = async (router: any, key: string, value: any, path: string) => {
  const as: any = undefined;
  router.replace(
    {
      pathname: path,
      query: {
        ...router.query,
        [key]: value,
      },
    },
    as,
    { shallow: true },
  );
};