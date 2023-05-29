import { CameraIcon, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Params {
  params: string
}

export default function SpecificMemory({ params }: Params) {
  console.log(params)

  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar á timeline
      </Link>

      <form className="flex w-full flex-col space-y-4">
        <div className="flex gap-4">
          <label
            className="flex cursor-pointer items-center justify-center gap-3 text-gray-200 hover:text-gray-100"
            htmlFor="coverUrl"
          >
            <CameraIcon className="h-4 w-4" color="#FFF" />
            Adicionar foto ou Vídeo de capa
          </label>
          <input
            className="invisible h-0 w-0"
            type="file"
            name="coverUrl"
            id="coverUrl"
          />

          <label
            htmlFor="isPublic"
            className="flex cursor-pointer items-center gap-3  text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              id="isPublic"
              name="isPublic"
              className='"h-4 w-4 rounded border-gray-400 text-purple-500'
            />
            Tornar memória pública
          </label>
        </div>
      </form>

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGITl3Y3hHbf7_y7KckvEMmcZzq-VENt-4Gg&usqp=CAU"
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
        alt=""
      />

      <p className="font-sans text-lg leading-relaxed text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita
        maiores beatae quod iure nostrum saepe nobis consequatur fuga dolorem
        repellendus temporibus, quas aliquam quos. Atque minus ad officia ipsum.
      </p>
    </div>
  )
}
