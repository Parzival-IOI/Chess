
const RanksLabel = (props : {ranks : number[]}) => {
  return (
    <div className="flex w-full flex-col justify-around px-2">
      {
        props.ranks.map((rank, index) => {
          return (
            <div key={index} className="">
              {rank}
            </div>
          )
        })
      }
    </div>
  )
}

export default RanksLabel