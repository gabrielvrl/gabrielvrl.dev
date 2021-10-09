/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/gabrielvrl.dev/' : '',
}