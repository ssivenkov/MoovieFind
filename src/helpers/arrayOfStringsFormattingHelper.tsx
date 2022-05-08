type genreType = {
  id: number;
  name: string;
};

export const arrayOfStringsFormattingHelper = (array: any[]): string => {
  const genresArr = array.map((genre: genreType) => genre.name);
  return genresArr.join(', ');
};
