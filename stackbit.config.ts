import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }]
        }
      ],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
      }
    }),
  ],
  siteMap: ({ documents }) => {
    return documents
      .filter((d) => d.modelName === 'Page')
      .map((d) => {
        const page = d as any;
        return {
          stableId: d.id,
          urlPath: page.slug === 'index' ? '/' : `/${page.slug}`,
          document: d,
          isHomePage: page.slug === 'index',
        };
      });
  },
});
