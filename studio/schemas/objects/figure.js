export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Podpis (opcjonalnie)',
      name: 'caption',
      type: 'string',
      description: 'Podpis pod zdjęciem (fig.), pojawi się jako osobny element pod obrazkiem (nie dot. zdjęć w tle). Przykład: "Zdjęcie wykonane przez Miśka Zdziśka"',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Tekst i opis alternatywny (wymagane)',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      description: 'Tzw. Alternative text. Ważne dla dostępności (accessiblity). W momencie niezaładowania obrazka pojawi się opis w ramce lub jako informacja dla osób niedowidzących wspierających się dodatkowymi urządzeniami. Przykład: "Zdjęcie Ziutka", "Ilustracja fletu Miśka" itd.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
