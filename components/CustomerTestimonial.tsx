import { AssetParamValue, flattenValues } from "@uniformdev/canvas";
import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";

type CustomerStoryProps = ComponentProps<{
  eyebrowHeading: string;
  quoteText?: string;
  jobTitle?: string;
  name?: string;
  picture: AssetParamValue;
  displayPicture?: boolean;
}>;

const CustomerTestimonial: React.FC<CustomerStoryProps> = ({
  eyebrowHeading,
  quoteText,
  jobTitle,
  name,
  picture,
  displayPicture,
}) => {
  const { url: imgSrc, title: alt } =
    flattenValues(picture, { toSingle: true }) || {};
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="text-gray-400">{eyebrowHeading}</p>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{quoteText}</p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{name}</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">{jobTitle}</div>
              {displayPicture && imgSrc ? (
                <img
                  alt={alt}
                  src={imgSrc}
                  className="mx-auto w-24 rounded-full"
                />
              ) : null}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

registerUniformComponent({
  type: "customerTestimonial",
  component: CustomerTestimonial,
});

export default CustomerTestimonial;
