// src/utils/fonts.js
import localFont from 'next/font/local'

export const plusJakartaSans = localFont({
  src: [
    {
      path: '../assets/fonts/static/PlusJakartaSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/static/PlusJakartaSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      weight: '500',
      style: 'italic',
    }
  ],
  variable: '--font-jakarta'
})