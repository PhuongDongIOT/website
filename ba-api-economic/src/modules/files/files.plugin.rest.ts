import { Elysia, t } from 'elysia'

export const filesPluginRest = new Elysia()
  .post(
    '/mutiples',
    ({ body: { files } }) => files[0],
    {
      body: t.Object({
        files: t.Files({
          type: ['image', 'video']
        })
      }),
      detail: {
        summary: 'Upload',
      },
    }
  )