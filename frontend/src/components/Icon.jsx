import { 
  Blueprint, Plant, Handshake, Leaf, Tree, Sparkle, Drop, Flower, Broom, Scissors,
  Medal, Tag, MapPin, PuzzlePiece, Clock, ShieldCheck 
} from "@phosphor-icons/react";

const MAP = {
  Blueprint, Plant, Handshake, Leaf, Tree, Sparkle, Drop, Flower, Broom, Scissors,
  Medal, Tag, MapPin, "Puzzle Piece": PuzzlePiece, Clock, ShieldCheck
};

export const Icon = ({ name, ...props }) => {
  const Cmp = MAP[name] || Leaf;
  return <Cmp {...props} />;
};
