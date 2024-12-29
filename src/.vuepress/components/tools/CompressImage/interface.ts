import type { ComputedRef, InjectionKey, Ref } from 'vue'

export interface UploadImage {
  id: string
  /** 无后缀的文件名 */
  fileName: string
  /** File对象 */
  file: File
  /** 临时图片地址 */
  src: string
  /** 压缩状态：处理中 | 成功 | 失败 */
  status?: 'processing' | 'success' | 'failed'
  /** 处理失败原因 */
  failedInfo?: unknown
  /** 压缩后File对象 */
  compressedFile?: File
  /** 压缩后临时图片地址 */
  compressedSrc?: string
}

export type OutputType = 'webp' | 'avif' | 'jpeg' | 'png'
export interface CompressSize {
  width?: number
  height?: number
}

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
