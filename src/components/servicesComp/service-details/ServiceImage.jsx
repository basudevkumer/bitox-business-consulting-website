import allImages from "@/components/helper/imageProvider";
import Container from "@/components/ui/Container";
import Image from "next/image";

const ServiceImage = () => {
  const { servivesDetailsBannaer } = allImages;
  return (
    <section className="py-[120px]">
      <Container>
        <div className="w-full h-[690px] relative z-10">
          <Image
            alt="servivesDetailsBannaer"
            className="object-cover rounded-[6px] z-0"
            fill
            src={servivesDetailsBannaer}
          />
          <div className="w-[470px] space-y-[10px] h-[242px]   flex flex-col justify-center items-center bottom-[35px] right-[30px]  absolute rounded-t-full bg-secondary">
            <h2 className="font-bold text-[90px]/[90px] text-bg-secondaryTwo ">
              29+{" "}
            </h2>
            <h5 className="  text-bg-secondaryTwo   headingSix font-medium">
              Our talented consultant
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceImage;
