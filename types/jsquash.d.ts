declare module 'https://unpkg.com/@jsquash/avif@1.3.0?module' {
  export * from '@jsquash/avif'
}
declare module 'https://unpkg.com/@jsquash/jpeg@1.5.0?module' {
  export * from '@jsquash/jpeg'
}
declare module 'https://unpkg.com/@jsquash/png@3.0.1?module' {
  export * from '@jsquash/png'
}
declare module 'https://unpkg.com/@jsquash/resize@2.1.0?module' {
  export default function resize(data: ImageData, overrideOptions: {
    width: number
    height: number
  }): Promise<ImageData>
}
declare module 'https://unpkg.com/@jsquash/webp@1.4.0?module' {
  export * from '@jsquash/webp'
}
