import type { ComputedRef, InjectionKey, Ref } from 'vue'

export interface UploadImage {
  id: string
  name: string
  fileName: string
  type: string
  file: File
  src: string
  status?: 'processing' | 'success' | 'failed'
  failedInfo?: unknown
  compressedFile?: File
  compressedFileName?: string
  compressedSrc?: string
}

export type OutputType = 'webp' | 'avif' | 'jpeg' | 'png'

export const CompressListKey = Symbol() as InjectionKey<Ref<UploadImage[]>>
export const SuccessListKey = Symbol() as InjectionKey<ComputedRef<UploadImage[]>>
export const FailedListKey = Symbol() as InjectionKey<ComputedRef<UploadImage[]>>
export const CompressEndKey = Symbol() as InjectionKey<Ref<boolean>>

export function imageDataToFile(
  imageData: ImageData,
  fileName: string,
): Promise<File> {
  const canvas = document.createElement('canvas')
  canvas.width = imageData.width
  canvas.height = imageData.height
  const ctx = canvas.getContext('2d')!
  ctx.putImageData(imageData, 0, 0)
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], fileName, { type: 'image/webp' })
        resolve(file)
      }
      else {
        reject(new Error('Failed to create Blob from canvas.'))
      }
    }, 'image/webp')
  })
}
