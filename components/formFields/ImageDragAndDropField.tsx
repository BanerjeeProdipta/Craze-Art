import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiFillCamera, AiOutlineCamera } from 'react-icons/ai'

const ImageDragAndDropField = React.forwardRef<
  HTMLInputElement,
  {
    registerName: string
    setValue: any
    setError: any
    errorMessage: string | undefined
  }
>(({ registerName, setValue, setError, errorMessage }, ref) => {
  const [isFileHoverOnDrop, setFileHoverOnDrop] = useState(false)
  const [file, setFile] = useState<File>()

  useEffect(() => {
    if (file) {
      setValue(registerName, file)
    }
  }, [file, registerName, setValue])

  return (
    <>
      <div>
        <input
          ref={ref}
          accept="image/*"
          hidden
          id={registerName}
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0])
              setValue(registerName, e.target.files[0])
              setError(registerName, undefined)
            }
          }}
          data-cy="photo"
        />
        <label htmlFor={registerName}>
          <div
            className="flex flex-col items-center justify-center w-full h-full p-4 text-center rounded-lg cursor-pointer bg-gray-900/10"
            onDragEnter={() => {
              setFileHoverOnDrop(true)
            }}
            onDragLeave={() => {
              setFileHoverOnDrop(false)
            }}
            onDragOver={(e) => {
              e.preventDefault()
              setFileHoverOnDrop(true)
            }}
            onDrop={(e) => {
              e.preventDefault()
              setFileHoverOnDrop(false)
              if (e.dataTransfer.files) {
                setFile(e.dataTransfer.files[0])
                setValue(registerName, e.dataTransfer.files[0])
                setError(registerName, undefined)
              }
            }}
          >
            <div className="flex flex-col items-center justify-center overflow-auto h-96">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="object-scale-down"
                />
              ) : (
                <p>
                  <AiOutlineCamera className="text-7xl" />
                </p>
              )}
            </div>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </label>
      </div>

      <p className="">{file?.name}</p>
    </>
  )
})

ImageDragAndDropField.displayName = 'ImageDragAndDropField'
export default ImageDragAndDropField
