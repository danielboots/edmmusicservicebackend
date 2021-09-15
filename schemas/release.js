export default {
  name: "release",
  title: "Release",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Release Name",
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
      name: "writeup",
      title: "Writeup",
      type: "string",
    },

    {
      name: "headline",
      title: "Headline",
      type: "string",
    },

    {
      title: "Release Date",
      name: "releasedate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
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
      name: "beatport",
      title: "Beatport",
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
