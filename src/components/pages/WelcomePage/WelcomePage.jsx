import { WelcomeSection } from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <WelcomeSection>
      <img
        src="https://images.vexels.com/media/users/3/305954/isolated/preview/d5f144005b594ab9d9b1c03e13fce9f5-fairycore-cute-planets.png"
        alt="planets"
        height={400}
      />
      <h2>Welcome to planets App!</h2>
    </WelcomeSection>
  );
}
