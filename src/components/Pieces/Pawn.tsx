const Pawn = ({ p = "pawn", c = "w" }) => (
  <img alt="pawn" src={`/assets/images/${p}_${c}.png`} />
);

export default Pawn;
