import { ReactNode } from "react";

enum EEduSrcType {
  YOUTUBE = "Youtube",
  DOCUMENTATION = "Documentation",
}

interface EducationalResource {
  title: string;
  srcType: EEduSrcType;
}

interface TechnologyStack {
  [key: string]: {
    title?: string;
    description?: string;
    eduResrc?: [EducationalResource];
    [key: string]: any;
  };
}

const tools: TechnologyStack = {
  anacond: {
    description: "Python Data Science Virtual Envoirnment",
    title: "Anaconda",
  },
  cuda: {
    description: "Parallel Programming",
    title: "CUDA",
  },
  vscode: {
    description: "Integrated Development Envoirnment",
    title: "Visual Studio Code",
  },
};

const pythonLibraries: TechnologyStack = {
  matplotlib: {
    title: "Matplotlib",
    description: "Classic Data Visualization",
  },
  pylzma: {
    description: "Compression Algorithm",
  },
  numpy: {
    title: "NumPy",
    description: "Scientific Computation & Linear Algebra",
  },
  jupyter: {
    title: "Jupyter",
    description: "Interactive Python Runtime",
  },
  torch: {
    title: "PyTorch",
    description: "Deep Learning Research and Experimentation",
    eduResrc: [{ srcType: EEduSrcType.DOCUMENTATION, title: "PyTorch.org" }],
  },
};

export const mainContentPoints: Array<ReactNode> = [
  "Training Large Language Models with tools from python ecosystem. ",
];

export const importantKeywordsTerminology = [
  "Natural Language Understanding",
  "Natural Language Processing",
  "Character Level Tokenizer",
  "Traditional Programming",
  "Parts of Speech Tagging",
  "Text Generation Models",
  "Large Language Models",
  "Word Level Tokenizer",
  "Question and Answer",
  "Predictive Models",
  "Patterns in Data",
  "Natural Language",
  "Creative Writing",
  "Neural Networks",
  "Text Generation",
  "Deep Learning",
  "Summarization",
  "Web Scrapping",
  "Text Corpus",
  "Data Points",
  "Text Tokens",
  "TensorFlow",
  "Vocabulary",
  "Text Data",
  "Examples",
  "PyTorch",
  "LLMs",
  "NLP",
].sort((a, b) => b.length - a.length);

export const standardQuality_YoutubeChannels = ["Matthew Berman"];
