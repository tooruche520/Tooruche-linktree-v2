import React from 'react'

type SectionProps = {
  customProp?: string;
} & React.ComponentPropsWithRef<"section">;

const Section = ({ customProp, children, ...rest }: SectionProps) => {
  return (
    <section className="w-full my-8 px-8 sm:my-12 sm:px-12" {...rest}>
      {customProp} {children}
    </section>
  );
};


export default Section