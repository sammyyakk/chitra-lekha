import nextra from 'nextra'
 
const withNextra = nextra({
  contentDirBasePath: '/content/docs',
  search: {
    codeblocks: true,
  },
})

const nextConfig = withNextra({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});