export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nazwa kategorii',
      description: 'Na przykład "Muzyka klasyczna", krótko 1-2 wyrazy najlepiej'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Opis (opcjonalnie)',
      description: 'Opis tylko czysto informacyjnie, nie ma wpływu na treści zamieszczonych na stronie'
    }
  ]
}
