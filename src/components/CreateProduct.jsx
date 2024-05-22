import {useState, useCallback} from 'react'
import { useDropzone } from 'react-dropzone'

const CreateProduct = ({popOpen, setPopOpen, action}) => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImage, setProductImage] = useState(null)

    const closeModal = (e) => {
        if(e.target === e.currentTarget) setPopOpen(false)
    }

    const onDrop = useCallback(acceptedFiles => {
        setProductImage(URL.createObjectURL(acceptedFiles))
        console.log(acceptedFiles)
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div onClick={closeModal} className={`${popOpen ? 'flex' : 'hidden'} fixed top-0 left-0 bg-black bg-opacity-60 w-full h-full justify-center items-center`}>
      <div className='py-10 px-20 rounded-md bg-white flex gap-3 flex-col w-full md:w-[500px]'>
        <p className='text-center font-semibold text-xl capitalize'>{action} product</p>
        <div className="flex">
          <div className="flex-1">
            <div><img src={productImage} alt="" /></div>
            {!productImage && <div {...getRootProps()}>
            <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>}

          </div>
          <div className="flex-1 flex flex-col gap-4">
            <input className='w-full h-12 border-2 border-blue-600 outline-none rounded-md px-3' value={productName} onChange={e=>setProductName(e.target.value)} type="text"  />
            <input className='w-full h-12 border-2 border-blue-600 outline-none rounded-md px-3' value={productPrice} onChange={e=>setProductPrice(e.target.value)} type="number"  />
          </div>
        </div>
        <button className='py-3 w-full rounded-md bg-blue-600 text-white font-semibold'>Submit</button>
      </div>
    </div>
  )
}

export default CreateProduct
