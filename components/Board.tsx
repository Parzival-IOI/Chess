"use client";
import { convertFen, getChar, getTileColor } from "@/libs/helpers";
import FilesLabel from "./FilesLabel";
import RanksLabel from "./RanksLabel";
import Piece from "./Piece";
import React, { useState } from "react";
import Pieces from "./Pieces";

const Board = () => {

  const _start_position = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

  const [position, setPosition] = useState(convertFen(_start_position));

  const ranks = Array(8).fill(undefined).map((x, index) => 8-index);
  const files = Array(8).fill(undefined).map((x, index) => getChar(index));


  return (
    <div className="w-[40rem]">
      
      <div className="flex w-[40rem] ">

        <RanksLabel ranks={ranks} />

        <Pieces position={position} setPosition={setPosition} />

      </div>
      
      <FilesLabel files={files} />

    </div>
  )
}

export default Board