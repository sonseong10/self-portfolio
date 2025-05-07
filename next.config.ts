import type {NextConfig} from 'next';
import {createVanillaExtractPlugin} from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = withVanillaExtract({
  reactStrictMode: true,
});

export default nextConfig;
