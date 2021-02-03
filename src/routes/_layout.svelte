<script>
  export let segment;
</script>

<svelte:head>
  <meta name="version" content="pkg.version" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/favicons/apple-touch-icon.png?v=pkg.version"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/favicons/favicon-32x32.png?v=pkg.version"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/favicons/favicon-16x16.png?v=pkg.version"
  />
  <link
    rel="manifest"
    href="/favicons/site.webmanifest?v=pkg.version"
    crossorigin="use-credentials"
  />
  <link
    rel="mask-icon"
    href="/favicons/safari-pinned-tab.svg?v=pkg.version"
    color="#000000"
  />
  <link rel="shortcut icon" href="/favicons/favicon.ico?v=pkg.version" />
  <meta name="apple-mobile-web-app-title" content="Qudini" />
  <meta name="application-name" content="Qudini" />
  <meta name="msapplication-TileColor" content="#000000" />
  <meta
    name="msapplication-config"
    content="/favicons/browserconfig.xml?v=pkg.version"
  />
  <meta name="theme-color" content="#ffffff" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
</svelte:head>

<main>
  <slot {segment} />
</main>
