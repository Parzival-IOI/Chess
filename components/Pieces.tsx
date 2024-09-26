`use client`
import React, { useState } from 'react'
import Piece from './Piece'
import { getTileColor } from '@/libs/helpers'

const Pieces = (props: {position: string[], setPosition: Function}) => {

  const [move, setMove] = useState<string>("");
  
  const drag = (e: React.DragEvent<HTMLInputElement>) => {
    // e.preventDefault()
    console.log(e.dataTransfer.getData('text'))
    setMove(e.dataTransfer.getData('text'));
  }

  const dragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log("test")
  }

  const onDrop = (r: number, f: number) => {


    const instant: string[] = props.position;
    const instant2: string[][] = instant.map((e) => e.split(""));
    const mp = move.split("-");
    const temp = instant2[r][f];
    instant2[r][f] = mp[0];
    instant2[parseInt(mp[1])][parseInt(mp[2])] = "0"


    console.log(r, f, temp, move, instant2.length);


    let str: string = "";
    const instant3: string[] = [];

    for(let i=0; i< instant2.length; i++) {
      for(let j=0; j< instant2[i].length; j++) {
        str += instant2[i][j];
      }
      instant3.push(str);
      str = "";
    }

    console.log(instant3)

    props.setPosition(instant3);

  }

  return (
    <div className="grid grid-cols-8 grid-rows-8 w-full max-w-[40rem] aspect-square flex-shrink-0">
          {
            props.position.map((rank: string, indexRank) => {
              return (
                rank.split("").map((file, indexFile) => {
                    return (
                      <div key={ "" + indexRank + indexFile} className={`${getTileColor(indexRank, indexFile) ? "bg-[#f8e7bb]" : "bg-[#956c6c]"} w-full h-full flex justify-center items-center`} 
                        onDrag={drag}
                        onDragOver={dragOver}
                        onDrop={() => {onDrop(indexRank, indexFile)}}
                      >
                        {<Piece move={file} rank={indexRank} file={indexFile} />}
                      </div>
                    ) 
                  }
                )
              )
            }
            )
          }
        </div>
  )
}

export default Pieces