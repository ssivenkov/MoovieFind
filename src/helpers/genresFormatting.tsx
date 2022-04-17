type genreType = {
  id: number;
  name: string;
};

export const genresFormatting = (array: any[]): string => {
  const genresArr = array.map((genre: genreType) => genre.name);
  return genresArr.join(', ');
};
