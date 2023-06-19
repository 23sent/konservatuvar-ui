export const QuestionTypes = {
  MultiSelection: 'MULTI_SELECTION',
  Flashcard: 'FLASH_CARD',
  TypedResponse: 'TYPED_RESPONSE',
  Rhythm: 'RHYTHM',
};

export const ContentTypes = {
  Text: 'TEXT',
  AbcNotation: 'ABC_NOTATION',
  Image: 'IMAGE',
  Sound: 'SOUND',
};

// Example
export const ExampleTextContent = {
  type: ContentTypes.Text,
  text: 'Example Content',
};

export const ExampleOption = {
  isTrue: true,
  contents: [ExampleTextContent, ExampleTextContent],
};

export const ExampleMultiSelectionQuestion = {
  type: QuestionTypes.MultiSelection,
  contents: [ExampleTextContent],
  options: [ExampleOption, ExampleOption, ExampleOption],
};

export const ExampleTextQuestion = {
  type: QuestionTypes.TypedResponse,
  contents: [ExampleTextContent],
  answer: ExampleTextContent,
};

export const ExampleFlasCards = {
  type: QuestionTypes.FlashCard,
  forward: [ExampleTextContent],
  backward: [ExampleTextContent],
};

export const ExampleMultiSelectionQuestion2 = {
  type: QuestionTypes.MultiSelection,
  contents: [ExampleTextContent],
  options: [
    {
      isTrue: false,
      contents: [{ type: ContentTypes.Text, text: 'Option 1' }],
    },
    { isTrue: true, contents: [{ type: ContentTypes.Text, text: 'Option 2' }] },
    { isTrue: false, contents: [{ type: ContentTypes.Text, text: 'Option 3' }] },
  ],
};
