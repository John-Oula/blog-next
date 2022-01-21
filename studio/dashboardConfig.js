export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61eacc3261123b17b4997eaa',
                  title: 'Sanity Studio',
                  name: 'blog-next-studio',
                  apiId: '95c9467c-c7e2-4704-8767-59b9a6786736'
                },
                {
                  buildHookId: '61eacc32a5e130269fd3d800',
                  title: 'Landing pages Website',
                  name: 'blog-next-web',
                  apiId: 'f522571c-1bdf-4e88-837e-3e8872f6ec15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/John-Oula/blog-next',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-next-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
