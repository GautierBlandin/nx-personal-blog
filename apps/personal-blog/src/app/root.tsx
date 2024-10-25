import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles.css';

export function Root() {
  return (
    <html lang="en">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cactus+Classical+Serif&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
