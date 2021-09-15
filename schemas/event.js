export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Event Name",
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
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "writeup",
      title: "Write Up",
      type: "string",
    },

    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },

    {
      title: "Event Date",
      name: "eventedate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
    },

    {
      name: "youtubeembed",
      title: "Youtube",
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
