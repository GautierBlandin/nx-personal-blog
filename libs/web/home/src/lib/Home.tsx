import { articleRoute, articles } from '@nx-personal-blog/web-articles';
import { NavbarLayout } from '@nx-personal-blog/navigation';

export function Home() {
  return (
    <NavbarLayout>
      <div>
        <p>
          Hey, I'm Gautier, and I love building things!
        </p>
        <p>
          I'm a software engineer at <a href="https://trackit.io/">TrackIt</a>, where I work on full-stack web development
          and cloud stuff with AWS.
        </p>
        <h5> Recent articles </h5>
        <ul>
          { Object.values(articles)
            .slice(0, 5)
            .map((article) => <li key={article.identifier}><a href={articleRoute(article.identifier)}>{article.title}</a></li>)}
        </ul>
      </div>
    </NavbarLayout>
  );
}
