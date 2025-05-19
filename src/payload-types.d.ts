import type { CollectionConfig } from 'payload';

declare module 'payload' {
  export type CollectionSlug =
    | 'articles'
    | 'categories'
    | 'tags'
    | 'media';
}