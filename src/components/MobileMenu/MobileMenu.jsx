import {
  AuthorQuote,
  WelcomeDiv,
  WelcomeInfo,
  WelcomeSection,
} from 'pages/WelcomePage/WelcomePage.styled';

export default function MobileMenu() {
  return (
    <WelcomeSection>
      <img
        src="https://images.vexels.com/media/users/3/305954/isolated/preview/d5f144005b594ab9d9b1c03e13fce9f5-fairycore-cute-planets.png"
        alt="planets"
        height={500}
      />
      <WelcomeDiv>
        <h2>Welcome to the Planets App!</h2>
        <WelcomeInfo>
          Why should we go into space? What is the justification for spending
          all that effort and money on getting a few lumps of Moon rock? Aren’t
          there better causes here on Earth? <br />
          In a way, the situation is like that in Europe before 1492. People
          might well have argued that it was a waste of money to send Columbus
          on a wild goose chase. Yet the discovery of the New World made a
          profound difference to the old. If nothing else, we wouldn’t have had
          a Big Mac or KFC.
          <br /> Spreading out into space will have an even greater effect. It
          will completely change the future of the human race and maybe
          determine whether we have any future at all. It won’t solve any of our
          immediate problems on planet Earth, but it will give us a new
          perspective on them, and cause us to look outwards rather than
          inwards. Hopefully it would unite us to face a common challenge.
          <br /> This would be a long-term strategy, and by long-term I mean
          hundreds or thousands of years. We could have a base on the Moon
          within 30 years, reach Mars in 50 years, and explore the moons of the
          outer planets in 200 years. By “reach” I mean with manned, or should I
          say “personed,” space flight. We have already driven rovers on Mars
          and landed a probe on Titan, a moon of Saturn, but if one is
          considering the future of the human race we have to go there
          ourselves. <br />
          The human race has existed as a separate species for about 2 million
          years. Civilization began about 10,000 years ago, and the rate of
          development has been steadily increasing. If the human race is to
          continue for another million years, we will have to boldly go where no
          one has gone before.
        </WelcomeInfo>
        <AuthorQuote>
          Stephen Hawking: “Why We Should Go Into Space”
        </AuthorQuote>
      </WelcomeDiv>
    </WelcomeSection>
  );
}
