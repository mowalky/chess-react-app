const Pawn = ({ color = "w" }: { color?: string }) => (
  <img alt="pawn" src={`/assets/images/pawn_${color}.png`} />
);

export default Pawn;
