"use client";
import { convertFen, getChar, getTileColor } from "@/libs/helpers";
import FilesLabel from "./FilesLabel";
import RanksLabel from "./RanksLabel";
import Pieces from "./Pieces";
import { useState } from "react";

const Board = () => {

  const _start_position = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

  const [postion, setPosition] = useState(convertFen(_start_position));

  const ranks = Array(8).fill(undefined).map((x, index) => 8-index);
  const files = Array(8).fill(undefined).map((x, index) => getChar(index));

  return (
    <div className="w-[40rem]">
      
      <div className="flex w-[40rem] ">

        <RanksLabel ranks={ranks} />

        <div className="grid grid-cols-8 grid-rows-8 w-full max-w-[40rem] aspect-square flex-shrink-0">
          {
            postion.map((rank: string, indexRank) => {
              return (
                rank.split("").map((file, indexFile) => {
                    return (
                      <div key={ "" + indexRank + indexFile} className={`${getTileColor(indexRank, indexFile) ? "bg-[#f8e7bb]" : "bg-[#956c6c]"} w-full h-full flex justify-center items-center`} >
                        {Pieces({key : file})}
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