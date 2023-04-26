import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair! docker 444
      </p>
    </>
  );
};

export default AboutPage;
