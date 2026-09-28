import LatestEntries from "@/app/_components/LatestEntries";

export const metadata = {
  title: "Home",
  description: "Portfolio Website Homepage",
};

function Homepage() {
  return (
    <div>
      <LatestEntries />
    </div>
  );
}

export default Homepage;
