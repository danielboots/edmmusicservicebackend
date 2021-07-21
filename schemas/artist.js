export default {
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },

    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },

    {
      name: "spotifyembed",
      title: "Spotify",
      type: "string",
    },

    {
      name: "youtubeembed",
      title: "Youtube",
      type: "string",
    },

    {
      name: "instagram",
      title: "Instagram",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
