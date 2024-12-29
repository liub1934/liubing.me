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

export type OutputType = 'webp' | 'avif' | 'jpeg'

export const CompressListKey = Symbol() as InjectionKey<Ref<UploadImage[]>>
export const SuccessListKey = Symbol() as InjectionKey<ComputedRef<UploadImage[]>>
export const FailedListKey = Symbol() as InjectionKey<ComputedRef<UploadImage[]>>
export const CompressEndKey = Symbol() as InjectionKey<Ref<boolean>>
