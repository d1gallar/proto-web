
const metadata = {
  title: "Proto",
  description: "A website for the Proto app.",
};

export default function LayoutHead() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={metadata.description} />
      <link rel="icon" type="image/png" href="img/favicon.png" />
    </head>
  )
}