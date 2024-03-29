export const solventIdx = (solvent: string) => {
  return solvent?.split("").map(char => {
    if (char === " ") {
      return <small>&nbsp;</small>;
    } else if (isNaN(parseInt(char))) {
      return char;
    } else {
      return (
        <small key={crypto.randomUUID()} className="solventIdx">
          {char}
        </small>
      );
    }
  });
};
