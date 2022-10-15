// Build Mode
export const IS_DEVELOPMENT = process.env.NEXT_PUBLIC_BUILD_MODE === 'development';
export const IS_STAGING = process.env.NEXT_PUBLIC_BUILD_MODE === 'staging';
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_BUILD_MODE === 'production';

// Debug views must be visible ??
export const IS_DEBUG = false;

// Presenve API request limit while developping
export const AVOID_REFETCHING_FROM_REAL_STORAGE = false;