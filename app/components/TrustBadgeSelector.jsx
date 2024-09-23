import { useLoaderData } from "@remix-run/react";

const TrustBadgeSelector = () => {
  const badges = useLoaderData();

  return (
    <div>
      {badges.map(badge => (
        <div key={badge.id}>
          <img src={badge.image} alt={badge.name} />
          <p>{badge.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadgeSelector;