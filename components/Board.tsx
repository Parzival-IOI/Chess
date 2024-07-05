import { getChar, getInt, getTileColor } from "@/libs/helpers";
import FilesLabel from "./FilesLabel";
import RanksLabel from "./RanksLabel";

const Board = () => {

  const ranks = Array(8).fill(undefined).map((x, index) => 8-index);
  const files = Array(8).fill(undefined).map((x, index) => getChar(index));

  return (
    <div className="w-[40rem]">
      
      <div className="flex w-[40rem] ">

        <RanksLabel ranks={ranks} />

        <div className="grid grid-cols-8 grid-rows-8 w-full max-w-[40rem] aspect-square flex-shrink-0">
          {
            ranks.map((rank, indexRank) => {
              return (
                files.map((file, indexFile) => {
                    return (
                      <div key={ "" + indexRank + indexFile} className={`${getTileColor(indexRank, indexFile)} w-full h-full`} >
                        {/* {rank}{file} */}
                      </div>
                    )
                  }
                )
              )
            }
            )
          }
        </div>

      </div>
      
      <FilesLabel files={files} />

    </div>
  )
}

export default Board