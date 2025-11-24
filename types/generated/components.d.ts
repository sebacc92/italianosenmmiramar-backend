import type { Schema, Struct } from '@strapi/strapi';

export interface ComponenteLink extends Struct.ComponentSchema {
  collectionName: 'components_componente_links';
  info: {
    displayName: 'Link';
    icon: 'code';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'book';
  };
  attributes: {
    imagenes: Schema.Attribute.Media<'images' | 'videos', true>;
    link: Schema.Attribute.Component<'componente.link', false>;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'componente.link': ComponenteLink;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
