import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react-swc';
import {
    ManifestOptions,
    VitePWA,
} from 'vite-plugin-pwa';
import {
    UserConfigExport,
    defineConfig,
} from 'vite';

const assets: string[] = [
    'apple-touch-icon.png',
    'favicon.ico',
    'pwa-512x512.png',
];

const manifest: Partial<ManifestOptions> = {
    background_color: '#046bed',
    description: 'A simple mock directory PWA built using TypeScript, React, React Router and Zustand.',
    dir: 'ltr',
    display: 'standalone',
    lang: 'en',
    name: 'business',
    orientation: 'any',
    scope: '/',
    short_name: 'business',
    start_url: '/',
    theme_color: '#046bed',
    categories: ['business'],
    icons: [
        {
            purpose: 'any',
            sizes: '192x192',
            src: '/icons/pwa-192x192.png',
            type: 'image/png',
        }, {
            purpose: 'any',
            sizes: '512x512',
            src: '/icons/pwa-512x512.png',
            type: 'image/png',
        }, {
            purpose: 'any maskable',
            sizes: '512x512',
            src: '/icons/pwa-512x512.png',
            type: 'image/png',
        },
    ],
    screenshots: [],
};

const vite: UserConfigExport = defineConfig({
    appType: 'spa',
    base: '/',
    envDir: '.',
    envPrefix: 'VITE_',
    logLevel: 'info',
    publicDir: 'public',
    root: process.cwd(),
    plugins: [
        VitePWA({
            manifest,
            registerType: 'autoUpdate',
            includeAssets: assets,
        }),
        react(),
    ],
    build: {
        outDir: 'dist',
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer,
            ],
        },
    },
    preview: {
        port: 3001,
    },
    server: {
        port: 3000,
    },
});

export default vite;
