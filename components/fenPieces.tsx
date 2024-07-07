import { BB, BK, BN, BP, BQ, BR, WB, WK, WN, WP, WQ, WR,  } from "@/components/Icon";


export const getFenPieces = (key: string) => {
  switch(key) {
    case 'r':
      return <BR />;
    case 'n':
      return <BN />;
    case 'b':
      return <BB />;
    case 'q':
      return <BQ />;
    case 'k':
      return <BK />;
    case 'p':
      return <BP />;
    case 'R':
      return <WR />;
    case 'N':
      return <WN />;
    case 'B':
      return <WB />;
    case 'Q':
      return <WQ />;
    case 'K':
      return <WK />;
    case 'P':
      return <WP />;
    default:
      return null;  
  }
}