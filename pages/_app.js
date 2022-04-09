import { ThemeProvider } from "next-themes";
import "styles/app.scss";
import "styles/blog.scss";
import MainLayout from "layouts/main";
import WithoutSidebar from "layouts/withoutSidebar";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isExperimentPage = router.pathname.startsWith("/experiments");
  const canonicalUrl = (
    `https://rishimohan.me` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <DefaultSeo
        title="Hi, I'm sreehari jayaraj!"
        description="I'm a Full-stack developer who loves tech and startup."
        canonical={canonicalUrl}
        openGraph={{
          site_name: "Hi, I'm Sreehari jayaraj!",
          title: "Hi, I'm Sreehari jayaraj!",
          description: "I'm a Full-stack developer who loves tech and startup.",
          images: [
            {
              url: "https://rishimohan.vercel.app/images/site/meta.jpg",
              width: 800,
              height: 600,
              alt: "Kizie for Twitter",
            },
          ],
        }}
        twitter={{
          handle: "@thelifeofrishi",
          site: "@thelifeofrishi",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon-ipad-retina-152x152.png",
          },
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon-ipad-76x76.png",
            sizes: "60x60",
          },
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon-ipad-retina-152x152.png",
            sizes: "144x144",
          },
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon-iphone-60x60.png",
            sizes: "60x60",
          },
          {
            rel: "apple-touch-icon",
            href: "/touch-icons/apple-touch-icon-iphone-retina-120x120.png",
            sizes: "114x114",
          },
        ]}
      />
      {process.env.NODE_ENV == "production" ? (
        // Analytics Script
        <Script
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code={process.env.NEXT_PUBLIC_PIRSCH_KEY}
          strategy="afterInteractive"
        />
      ) : (
        ""
      )}
      {isExperimentPage ? (
        <WithoutSidebar>
          <Component {...pageProps} />
        </WithoutSidebar>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
