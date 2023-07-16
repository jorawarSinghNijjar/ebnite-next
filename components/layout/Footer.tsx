import Link from "next/link";
import FilledButton from "../Buttons/FilledButton";

const Footer = () => {
  return (
    <footer className="relative bg-dark mt-32">
      <div className="py-20 px-5 md:px-20 bg-dark">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 flex flex-col gap-y-10 mb-10">
            <div className="text-4xl font-extralight text-tertiary">EBNITE</div>
            <h6 className=" text-5xl md:text-6xl font-bold text-light">
              Want to talk about your project?
            </h6>
            <FilledButton
              size="small"
              className="uppercase w-max bg-tertiary text-dark"
            >
              Let&apos;s schedule a call
            </FilledButton>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-10 sm:items-start md:items-end">
            <div className="max-w-[300px] border-light border-l-4 pl-8">
              <h6 className="text-4xl font-thin text-light uppercase mb-8">
                Toronto
              </h6>
              <address className="text-light not-italic [&>*]:mb-2">
                <p>
                  <strong>Address:</strong> Rua Adriano Correia de Oliveira 4A,
                  1600-312
                </p>

                <p>
                  <strong> Phone:</strong> +1 963630105
                </p>

                <p>
                  <strong>Email:</strong> toronto@ebnite.com
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-20 px-5 md:px-20 bg-darker flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-y-1 [&>a]:text-light/[0.6] [&>a]:font-normal hover:[&>a]:text-light/[0.3]">
          <p className="text-base font-semibold uppercase text-lighter">
            Global
          </p>
          <Link href="/">Work</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Blog</Link>
          <Link href="/">News</Link>
          <Link href="/">Careers</Link>
        </div>

        <div className="flex flex-col gap-y-1 [&>a]:text-light/[0.6] [&>a]:font-normal hover:[&>a]:text-light/[0.3]">
          <p className="text-base font-semibold uppercase text-lighter">
            Technology
          </p>
          <Link href="/">Full Stack Apps</Link>
          <Link href="/">CRM</Link>
          <Link href="/">Artificial Intelligence</Link>
          <Link href="/">Open Source</Link>
        </div>

        <div className="flex flex-col gap-y-1 [&>a]:text-light/[0.6] [&>a]:font-normal hover:[&>a]:text-light/[0.3]">
          <p className="text-base font-semibold uppercase text-lighter">
            Services
          </p>
          <Link href="/">Product Scope</Link>
          <Link href="/">UX/UI</Link>
          <Link href="/">MVP Builder</Link>
          <Link href="/">Dedicated Teams</Link>
        </div>

        <div className="flex flex-col gap-y-1 [&>a]:text-light/[0.6] [&>a]:font-normal hover:[&>a]:text-light/[0.3]">
          <p className="text-base font-semibold uppercase text-lighter">
            Build
          </p>
          <Link href="/">Play with Pricing</Link>
          <Link href="/">Book a Call</Link>
        </div>
      </div>

      <div className="w-full py-6 px-5 md:px-20 bg-dark flex flex-row justify-between text-lighter">
        <div className="">© 2023 Ebnite.com all rights reserved.</div>
        <div className="flex flex-row gap-6 justify-end">
          <Link href="/">Twitter</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">Linkdin</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
