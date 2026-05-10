import Container from "../ui/Container";
import FaqBody from "../ui/FaqBody";
import FaqHeading from "./FaqHeading";

const FaqSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-[120px]">
      <Container size="lg">
        <FaqHeading />
        <FaqBody />
      </Container>
    </section>
  );
};

export default FaqSection;
