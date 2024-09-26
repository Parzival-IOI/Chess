import { getFenPieces } from "@/components/fenPieces"

const Piece = (props: {move : string, rank: number, file: number}) => {

  const piece = getFenPieces(props.move);
  
  if(piece === null) return <></> ;

  const ondrag = (e: React.DragEvent<HTMLInputElement>) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', `${props.move}-${props.rank}-${props.file}`)
  }

  return (
    <div draggable={true}
      onDragStart={ondrag}
    >
      {piece}
    </div>
  )
}

export default Piece