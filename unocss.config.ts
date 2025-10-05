import { defineConfig, presetWind3, presetAttributify, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
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