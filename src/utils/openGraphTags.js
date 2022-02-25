const defaultOgTags = {
  title: 'sqill',
  description: 'sqill is the video app for athletes. We are disrupting the sports industry through short-form vídeos (sqills) and artificial intelligence, showcasing talent (athletes) and connecting them with demand (clubs, agents and brands).',
  url: 'https://app.heysqill.com',
  image: 'https://app.heysqill.com/images/media.png',
}

export function generateOpenGraphTags({
  title = defaultOgTags['title'],
  description = defaultOgTags['description'],
  image = defaultOgTags['image'],
  url = defaultOgTags['url'],
  video,
  videoType,
  ...rest,
} = {}) {
  const tags = [
    <meta key="twitter:card" name="twitter:card" content="summary_large_image" />,
    <meta key="twitter:site" name="twitter:site" content="@sqill_app" />,
  ];

  if (title) {
    tags.push(<meta key="og:title" property="og:title" content={title} />);
    tags.push(<meta key="twitter:title" property="twitter:title" content={title} />);
  }

  if (description) {
    tags.push(<meta key="og:description" property="og:description" content={description} />);
    tags.push(<meta key="twitter:description" property="twitter:description" content={description} />);
  }

  if (image) {
    tags.push(<meta key="og:image" property="og:image" content={image} />);
    tags.push(<meta key="twitter:image" property="twitter:image" content={image} />);
  }

  if (video) {
    tags.push(<meta key="twitter:card" property="twitter:card" content="player" />);
    tags.push(<meta key="twitter:player:stream" property="twitter:player:stream" content={video} />);
    tags.push(<meta key="twitter:player:stream:content_type" property="twitter:player:stream:content_type" content={videoType} />);
    if (videoType) {
      tags.push(<meta key="og:video:type" property="og:video:type" content={videoType} />);
      tags.push(<meta key="og:video" property="og:video" content={video} />);
    }
  }

  for (var [key, value] of Object.entries(rest)) {
    tags.push(<meta key={key} property={key} content={value} />);
  }

  return tags;
}
