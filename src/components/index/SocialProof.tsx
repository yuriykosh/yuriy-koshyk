import ApolloLogo from "../assets/logos/ApolloLogo";
import AtlascopcoLogo from "../assets/logos/AtlascopcoLogo";
import CollectiveLogo from "../assets/logos/CollectiveLogo";
import WorkrampLogo from "../assets/logos/WorkrampLogo";

const logos = [
  { component: CollectiveLogo, name: "Collective" },
  { component: AtlascopcoLogo, name: "Atlas Copco" },
  { component: ApolloLogo, name: "Apollo" },
  { component: WorkrampLogo, name: "WorkRamp" },
];

const SocialProof = () => {
  return (
    <section className="flex flex-col px-6 mt-20 mb-16">
      <ul className="flex flex-wrap gap-12 sm:gap-24 justify-center items-center text-fg-secondary">
        {logos.map(({ component: Logo, name }) => (
          <li
            key={name}
            className="flex items-center justify-center"
            aria-label={name}
          >
            <Logo />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialProof;
