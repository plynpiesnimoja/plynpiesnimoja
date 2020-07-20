export default {
  name: 'mediaThumb',
  title: 'Obraz miniaturka',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
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
    }
  }
}