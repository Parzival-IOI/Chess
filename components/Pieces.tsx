import { getFenPieces } from "@/components/fenPieces"

const Pieces = (props: {key : string}) => {

  const piece = getFenPieces(props.key);
  
  if(piece === null) return <></>;

  return (
    <div draggable={true}>
      {piece}
    </div>
  )
}

export default Pieces