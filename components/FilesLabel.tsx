
const FilesLabel = (props : {files : string[]}) => {
  return (
    <div className="flex w-full justify-around">
      {
        props.files.map((file, index) => {
          return (
            <div key={index} className="py-1 pl-12">
              {file}
            </div>
          )
        })
      }
    </div>
  )
}

export default FilesLabel