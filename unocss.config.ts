import { defineConfig, presetWind3, presetAttributify, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
    shortcuts: [
        {
            'bg-base': 'bg-white dark:bg-black',
            'color-base': 'text-black dark:text-white',
            'border-base': 'border-[#8884]',
        }
    ],
    presets: [
        presetWind3(),
        presetAttributify(),
        presetIcons({
            extraProperties: {
                'display': 'inline-block',
                'height': '1.2rem',
                'width': '1.2rem',
                'vertical-align': 'text-bottom'
            }
        }),
        presetTypography()
    ],
})