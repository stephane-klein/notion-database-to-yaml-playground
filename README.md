# Notion database to yaml playground

Issue context (in french): https://github.com/stephane-klein/backlog/issues/334

Getting started:

```sh
$ asdf install
$ pnpm install
$ source .envrc
$ ./playground.sh
---
{
  object: 'page',
  id: '5cc7139c-e709-4df6-b283-e61fbbd53a2c',
  created_time: '2023-10-26T12:29:00.000Z',
  last_edited_time: '2023-10-26T12:30:00.000Z',
  created_by: { object: 'user', id: '4b4488c3-f4ff-4cf6-9b6e-39337ec0fa93' },
  last_edited_by: { object: 'user', id: '4b4488c3-f4ff-4cf6-9b6e-39337ec0fa93' },
  cover: null,
  icon: null,
  parent: {
    type: 'database_id',
    database_id: '61b0ae8c-ade8-4ef0-8870-ca24680fd605'
  },
  archived: false,
  properties: {
    Age: { id: 'Jc%7DI', type: 'number', number: 10 },
    Name: {
      id: 'title',
      type: 'title',
      title: [
        {
          type: 'text',
          text: { content: 'John Doe', link: null },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default'
          },
          plain_text: 'John Doe',
          href: null
        }
      ]
    }
  },
  url: 'https://www.notion.so/John-Doe-5cc7139ce7094df6b283e61fbbd53a2c',
  public_url: null
}
---
{
  object: 'page',
  id: 'e5d4f699-adad-4bc1-a7a1-ee9c1f22aa9b',
  created_time: '2023-10-26T12:29:00.000Z',
  last_edited_time: '2023-10-26T12:30:00.000Z',
  created_by: { object: 'user', id: '4b4488c3-f4ff-4cf6-9b6e-39337ec0fa93' },
  last_edited_by: { object: 'user', id: '4b4488c3-f4ff-4cf6-9b6e-39337ec0fa93' },
  cover: null,
  icon: null,
  parent: {
    type: 'database_id',
    database_id: '61b0ae8c-ade8-4ef0-8870-ca24680fd605'
  },
  archived: false,
  properties: {
    Age: { id: 'Jc%7DI', type: 'number', number: 20 },
    Name: {
      id: 'title',
      type: 'title',
      title: [
        {
          type: 'text',
          text: { content: 'Alice Doe', link: null },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default'
          },
          plain_text: 'Alice Doe',
          href: null
        }
      ]
    }
  },
  url: 'https://www.notion.so/Alice-Doe-e5d4f699adad4bc1a7a1ee9c1f22aa9b',
  public_url: null
}
```
