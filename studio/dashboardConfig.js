export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624ec1bb534efc666bdb20da',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yvdvwqah',
                  apiId: '76dbb4a9-a526-41c6-ab36-50fe719178b8'
                },
                {
                  buildHookId: '624ec1bc9d96b869c458f711',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qau44rpf',
                  apiId: '01956c77-5a99-4bdf-883a-0a21e1581173'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ehsfoundation/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qau44rpf.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
