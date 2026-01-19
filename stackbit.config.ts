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
          fields: [
            { name: "title", type: "string", required: true },
            { name: "heroHeading", type: "string", default: "AI Agent for Data Science" },
            { name: "heroSubheading", type: "string", default: "Automate your data workflow, generate insights, and build predictive models in minutes." },
            { name: "heroPrimaryCta", type: "string", default: "Start Building" },
            { name: "heroSecondaryCta", type: "string", default: "Watch Demo" },
            {
              name: "features",
              type: "list",
              items: {
                type: "object", fields: [
                  { name: "badge", type: "string" },
                  { name: "title", type: "string" },
                  { name: "description", type: "string" },
                  { name: "imageSide", type: "enum", options: ["left", "right"], default: "right" },
                  { name: "buttonText", type: "string" },
                ]
              }
            }
          ]
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
        console.log('DEBUG: Document ID:', d.id);
        return {
          stableId: d.id,
          urlPath: page.slug === 'index' ? '/' : `/${page.slug}`,
          document: d,
          isHomePage: page.slug === 'index',
        };
      });
  },
});
