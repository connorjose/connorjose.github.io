// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'
import Icons from 'unplugin-icons/vite'

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            Icons({ 
                compiler: 'astro',
            })
        ]
    },
    integrations: [
        UnoCSS({
            injectReset: true
        }), 
        mdx()
    ]
});