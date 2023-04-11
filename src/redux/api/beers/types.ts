export type Beer = {
  id: number;
  name: string;
  image_url: string;
  description: string;
  tagline: string;
};

export type ListBeersParams = {
  page: number;
  per_page: number;
  beer_name?: string;
};
