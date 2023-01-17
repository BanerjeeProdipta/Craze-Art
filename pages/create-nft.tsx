import React from 'react'
import { useForm } from 'react-hook-form'
import ImageDragAndDropField from '../components/formFields/ImageDragAndDropField'
import PrimaryButton from '../components/ui/PrimaryButton'
import SectionHeader from '../components/ui/SectionHeader'

const createNft = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      price: 0,
      file: '',
    },
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    // upload to IPFS
    const formData = new FormData()

    // upload file to IPFS with pinyata API
    // todo create pinataApiKey, pinataSecret, pinataApiEndpoint
    // const config = {
    //   method: 'POST',
    //   maxContentLength: Infinity,
    //   headers: {
    //     pinata_api_key: pinataApiKey,
    //     pinata_secret_api_key: pinataSecret,
    //   },
    //   body: formData,
    // }

    // try {
    //   const response = await fetch(pinataApiEndpoint, config)

    //   const data = await response.json()

    //   return data.IpfsHash as string
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <div>
      {' '}
      <SectionHeader
        title="Create a NFT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <form className="max-w-xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* create a nft  */}

        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full px-2 py-4 mb-1 bg-transparent border border-gray-400 rounded-xl focus:outline-none"
          placeholder="Your Name"
        />
        {errors.name && (
          <p className="mt-1 text-[6px] font-semibold text-red-500">{errors.name.message}</p>
        )}
        <input
          {...register('price', { required: 'Price is required' })}
          className="w-full px-2 py-4 mb-1 bg-transparent border border-gray-400 rounded-xl focus:outline-none"
          placeholder="Price"
          type={'number'}
        />
        {errors.price && (
          <p className="mt-1 text-[6px] font-semibold text-red-500">{errors.price.message}</p>
        )}

        <ImageDragAndDropField
          {...register('file', { required: 'File is required' })}
          registerName="file"
          setValue={setValue}
          setError={setError}
          errorMessage={errors.file?.message}
        />

        <div>
          <PrimaryButton text="Create NFT" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default createNft
