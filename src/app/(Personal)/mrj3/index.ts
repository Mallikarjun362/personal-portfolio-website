interface IFeatureDetails {
  title: string;
  link: string;
}

interface IProjectFeatures {
  LargeLanguageModels: IFeatureDetails;
  MySQL: IFeatureDetails;
  [feature: string]: IFeatureDetails;
}

export const RouteNameResolution: IProjectFeatures = {
  MySQL: { title: "MySQL", link: "./mrj3/library/mysql" },
  LargeLanguageModels: {
    link: "./mrj3/dsai/large-language-models/",
    title: "Training Large Language Models",
  },
};
