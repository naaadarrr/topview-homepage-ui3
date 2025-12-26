export const prefixed = (src: string) => {
  const path = process.env.ASSET_HOST ?? process.env.NEXT_PUBLIC_ASSET_HOST;
  return src && src.startsWith("/") && !!path ? `${path}${src}` : src;
};
