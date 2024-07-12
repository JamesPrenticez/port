import React, { forwardRef, useRef, useState, type ReactNode } from "react";

// this just needs a fix...
// when you hover for the first time all the refs are null.... which means your dont get the height...

function StripeNavbar(props) {
  return (
    <div className="bg-gray-50 h-full w-full">
      <div
        style={{
          backgroundImage: "linear-gradient(to right, rgb(217 70 239), rgb(244 63 94), rgb(250 204 21)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
          width: "100%",
          height: "500px",
        }}
      >
        <Navbar />
      </div>
    </div>
  );
}

export default StripeNavbar;

const Navbar = () => {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null);

  const refs = useRef<(HTMLElement | null)[]>([])

  const handleOnMouseEnter = (index: number, ele: HTMLElement) => {
    // console.log(index)
    setHovering(index);
    setPopoverLeft(ele.offsetLeft);

    // console.log(refs.current)
    const menuElement = refs.current[index]
    if(menuElement){
      setPopoverHeight(menuElement.offsetHeight);
      console.log(menuElement.offsetHeight)
    }
  }

  return (
    <nav className="flex items-center bg-slate-50/50">
      <div className="flex w-full max-w-7xl mx-auto bg-black/10 h-[4rem]"  onMouseLeave={() => { setHovering(null); }} >
        <div className="flex space-x-16 items-center justify-center text-white">
          <a className="text-white font-bold text-[25px] mb-1">
            stripe
          </a>
          <a
            href="/products"
            onMouseEnter={(e) => { handleOnMouseEnter(0, e.currentTarget) }}
          >
            Products
          </a>
          <a
            href="/products"
            onMouseEnter={(e) => { handleOnMouseEnter(1, e.currentTarget) }}
          >
            Solutions
          </a>
          <a 
            href="/developers"
            onMouseEnter={(e) => { handleOnMouseEnter(2, e.currentTarget) }}
          > 
            Developers
          </a>
          <a 
            href="/resources"
            onMouseEnter={(e) => { handleOnMouseEnter(3, e.currentTarget) }}
          > 
            Resources
          </a>
          <a 
            href="/pricing"
          > 
            Pricing
          </a>
        </div>

     
        {typeof hovering === "number" && (
          <div 
            className={`
              absolute top-12 pt-6 -ml-24 w-[600px] bg-white overflow-hidden rounded shadow-lg transform-gpu transition-all duration-300
              ${typeof(hovering) === "number" ? "asdfvisible" : "asdfinvisible"} 
            `}
            style={{
              left: popoverLeft || 0,
              height: popoverHeight || 0
            }}
          >
            <SlideWrapper index={0} hovering={hovering}>
              <Menu0 ref={ele => refs.current[0] = ele} />
            </SlideWrapper>
            <SlideWrapper index={1} hovering={hovering}>
              <Menu1 ref={ele => refs.current[1] = ele} />
            </SlideWrapper>
            <SlideWrapper index={2} hovering={hovering}>
              <Menu2 ref={ele => refs.current[2] = ele} />
            </SlideWrapper>
            <SlideWrapper index={3} hovering={hovering}>
              <Menu3 ref={ele => refs.current[3] = ele} />
            </SlideWrapper>
          </div>
        )}
      </div>
    </nav>
  );
};

const SlideWrapper = ({index, hovering, children}: {
  index: number;
  hovering: number | null;
  children: ReactNode;
}) => {
  return (
    <div className={`
      absolute transition-opacity 
      ${hovering === index ? "opacity-100" : "opacity-0"}
      
        // hovering === index 
        // ? "transform-none" 
        // : hovering! > index
        // ? "-translate-x-24"
        // : "translate-x-24"
      
    `}>
      {children}
    </div>
  )
}

const Menu0 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <nav ref={ref}className="justify-end bg-white pl-7 pr-10 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
          <div className="items-stretch self-stretch flex flex-col mt-7 max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d040bf1e-0cae-44c5-adb5-85d459116882?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Payments 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Online payments
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/323bf268-cd88-4a92-8b39-5090fd409123?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Checkout 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Prebuilt payment form
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5 pr-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b838887c-3250-4aea-9751-04a56510089a?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Elements 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Customizable payments UIs
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5 pr-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d6adb32-89b5-4919-901f-e8369acf10f2?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Payment Links 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  No-code payments
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9d6028-b972-4f4f-a95f-090f523b3a8a?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Radar 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Fraud & risk management
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/131401a3-4fd8-420d-bd81-45f11f9e8e8d?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Connect 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Payments for platforms
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch self-stretch flex flex-col mt-7 max-md:mt-10">
            <div className="items-center flex justify-between gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/657fbbf9-c5f6-40fd-ba8a-3ac586bda525?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Billing 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Subscription management
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ab1685c-e978-4415-a238-61419ca9439e?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Invoicing 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Online invoices
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d135d8d1-71bf-490e-90f3-61c430c9b9b2?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Terminal 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  In-person payments
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee61f2dd-39ee-4928-915d-05ac51889d82?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Financial Connections 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Linked financial account data
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06205628-560f-4f6e-8d9b-c0591ba931f2?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Identity 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Online identity verification
                </div>
              </div>
            </div>
            <div className="items-center flex justify-between gap-4 mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbd37668-7fca-4667-be69-7f3da6024b29?"
                className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
                  Climate 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap">
                  Carbon removal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

const Menu1 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <nav ref={ref} className="items-stretch bg-white flex flex-col">
      <div className="flex w-full flex-col items-stretch mt-8 pl-8 pr-20 max-md:max-w-full max-md:px-5">
        <div className="flex justify-between gap-2.5 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d9de7da-a3dd-4c2d-8a5c-7cd7350620a1?"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
            <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide whitespace-nowrap max-md:max-w-full">
              Documentation 
            </div>
            <div className="text-sky-950 text-sm font-light leading-5 tracking-wide whitespace-nowrap max-md:max-w-full">
              Start integrating Stripe’s products and tools
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[431px] mt-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
              <div className="flex grow pr-0 flex-col items-stretch max-md:mt-10">
                <div className="text-slate-500 text-sm font-medium leading-5 tracking-wide uppercase whitespace-nowrap max-md:mr-px">
                  Get started
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide opacity-80 whitespace-nowrap mt-3.5">
                  Prebuilt checkout 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide opacity-80 whitespace-nowrap mt-2">
                  Libraries and SDKs 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide opacity-80 whitespace-nowrap mt-2">
                  Plugins 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide opacity-80 whitespace-nowrap mt-2">
                  Code samples 
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow pr-0 flex-col items-stretch max-md:mt-10">
                <div className="text-slate-500 text-xs font-medium leading-5 tracking-wide uppercase whitespace-nowrap max-md:mr-px">
                  Guides
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide opacity-80 whitespace-nowrap mt-3.5">
                  Accept online payments 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide opacity-80 whitespace-nowrap mt-2">
                  Manage subscriptions 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide opacity-80 whitespace-nowrap mt-2">
                  Send payments 
                </div>
                <div className="text-sky-950 text-sm font-light leading-5 tracking-wide opacity-80 whitespace-nowrap mt-2">
                  Set up in-person payments 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch rounded bg-slate-100 flex w-full flex-col mt-7 mb-1 px-5 py-7 max-md:max-w-full">
        <div className="flex justify-between gap-5 py-0.5 max-md:max-w-full max-md:flex-wrap max-md:mr-2">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="flex justify-between gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a53c8baa-dee3-4d16-9f73-436a0ca53a25?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                Full API Reference 
              </div>
            </div>
            <div className="flex justify-between gap-2.5 mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a56b69d-0731-466f-bcb2-7cf4444ea08d?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                API Status 
              </div>
            </div>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="flex justify-between gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/313f44aa-bd80-49cf-9c98-309ccc9b9055?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                API Changelog 
              </div>
            </div>
            <div className="flex justify-between gap-2.5 mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b30693d-b005-44e7-93ff-10d1b49de24f?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                Build a Stripe App 
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

const Menu2 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <nav ref={ref} className="bg-white flex flex-col">
      <div className="w-[401px] max-w-full ml-8 mt-9 max-md:ml-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-10">
              <div className="flex justify-between gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1804ef21-fd23-4f9c-a70e-041b98de5256?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                  Support Center 
                </div>
              </div>
              <div className="flex justify-between gap-2.5 mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a9e7db-84b2-4356-a15e-55422e4c9834?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                  Support Plans 
                </div>
              </div>
              <div className="flex justify-between gap-2.5 mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/63dc8436-6913-4c7b-9f6e-384c1907ee89?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                  Guides 
                </div>
              </div>
              <div className="flex justify-between gap-2.5 mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b0c119e-a81a-4c9e-8470-55ac0141bacc?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                  Customer Stories 
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-10">
              <div className="flex justify-between gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4de1389-5531-47e7-8ccd-0a55c918328e?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                  Blog
                </div>
              </div>
              <div className="flex justify-between gap-2.5 mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d9f9751-c33e-4a25-b085-00fec7f719c2?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                  Annual Conference 
                </div>
              </div>
              <div className="flex justify-between gap-2.5 mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/66af6232-2c8a-470c-9789-f75c0d31e549?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                  Contact Sales 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center rounded bg-slate-100 self-stretch flex w-full flex-col mt-7 mb-1 px-5 py-7 max-md:max-w-full">
        <div className="flex w-full max-w-[470px] justify-between gap-5 py-0.5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="flex justify-between gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee93546-6d01-4d1f-bc4e-f26295a3f582?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch">
                Jobs 
              </div>
            </div>
            <div className="flex justify-between gap-2.5 mt-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/232c1d26-928e-45d7-bc3a-271675dc12cd?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                Newsroom 
              </div>
            </div>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="flex justify-between gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ba7944a-1271-410a-aff6-bf2d663de806?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                Stripe Press 
              </div>
            </div>
            <div className="flex justify-between gap-2.5 mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b291e88-26c3-4970-b7f3-951b7400cbca?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                Become a Partner 
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

const Menu3 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <nav ref={ref} className="justify-center items-center self-stretch shadow-2xl bg-white flex flex-col rounded-lg">
      <div className="flex w-[390px] max-w-full items-stretch justify-between gap-5 ml-8 mt-9 self-start max-md:ml-2.5">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-slate-500 text-xs font-medium leading-5 tracking-wide uppercase whitespace-nowrap">
            By stage
          </div>
          <div className="flex justify-between gap-2.5 mt-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9900a74f-7fa9-4a1a-96db-ae7a671f234d?"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
              Startups 
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 mt-8 self-end">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3229588f-ad60-470a-81d0-7aff1f9ad2f2?"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
            Enterprises 
          </div>
        </div>
      </div>
      <div className="self-stretch flex min-h-[1px] w-full flex-col mt-6 max-md:max-w-full" />
      <div className="self-center flex w-full max-w-[444px] flex-col mt-5 max-md:max-w-full">
        <div className="text-slate-500 text-xs font-medium leading-5 tracking-wide uppercase self-stretch whitespace-nowrap max-md:max-w-full">
          By Use Case
        </div>
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:mt-10">
                <div className="flex items-center justify-between gap-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/57717c7a-280a-4fdb-acd7-5fd4eafc6678?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch">
                    SaaS 
                  </div>
                </div>
                <div className="flex justify-between gap-2.5 mt-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a732dc9-9699-4cf5-aeca-0c289f937dd0?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                    Platforms 
                  </div>
                </div>
                <div className="flex justify-between gap-2.5 mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/84ad411f-c636-492f-9755-0a2139c1da50?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                    Ecommerce 
                  </div>
                </div>
                <div className="flex justify-between gap-2.5 mt-3.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/63358525-44a9-4a0a-b9ee-2a684ef45416?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                    Marketplaces 
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch mt-2.5 max-md:mt-10">
                <div className="flex justify-between gap-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d536a22-afb9-45df-84bc-e9a6bc9e0478?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                    Creator Economy 
                  </div>
                </div>
                <div className="flex justify-between gap-2.5 mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e3f3189-63a6-418e-972b-1df5632b8437?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                    Embedded Finance 
                  </div>
                </div>
                <div className="flex justify-between gap-2.5 mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9218d5c8-f25b-4b74-8ef2-5f286412be74?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                    Global Businesses 
                  </div>
                </div>
                <div className="flex justify-between gap-2.5 mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/de87b009-5c1f-47e6-bf63-bf04f5e54a6d?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                    Finance Automation 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[74px] max-w-full gap-2.5 mt-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cf221e7-3c7e-4201-afea-f6b0493bc051?"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
            Crypto 
          </div>
        </div>
      </div>
      <div className="rounded bg-slate-100 self-stretch w-full mt-7 mb-1 pl-7 pr-20 py-8 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-10">
              <div className="text-slate-600 text-xs font-medium leading-5 tracking-wide uppercase whitespace-nowrap">
                Integrations & Custom Solutions
              </div>
              <div className="items-stretch flex justify-between gap-5 mt-4 max-md:justify-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/60fbc3fd-5f30-4dc4-9ca1-eaa473c44478?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide my-auto">
                  App Marketplace 
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eae4553f-95e7-425c-9ec5-16b96464fa5a?"
                  className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
              <div className="flex justify-between gap-2.5 mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a8215da-c8b2-4f5d-9727-0c49f91ad64f?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                  Professional Services 
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex gap-2.5 my-auto max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/11e89c6e-616e-4dcd-af6c-87240e29c94c?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-sky-950 text-sm font-medium leading-5 tracking-wide self-stretch grow whitespace-nowrap">
                Partner Ecosystem 
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

// https://www.youtube.com/watch?v=gWw-DsSZVrQ

{
  /* <div className="bg-slate-50 flex flex-col items-stretch w-full bg-red-500">
<div className="items-stretch bg-white flex w-full flex-col pb-12 max-md:max-w-full">
  <div className="flex-col overflow-hidden relative flex min-h-[483px] w-full pb-0 items-center pl-20 pt-5 max-md:max-w-full max-md:pl-5">
    <img
      loading="lazy"
      srcSet="..."
      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
    />
    <div className="relative flex w-full max-w-[1213px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
      <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdfbee81-c0d7-4034-b6cc-802cb75ccd59?"
          className="aspect-[2.06] object-contain object-center w-[68px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
        />
        <div className="justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto">
          Products
        </div>
        <div className="justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto">
          Solutions
        </div>
        <div className="justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto">
          Developers
        </div>
        <div className="justify-center text-white text-center text-base font-medium leading-6 tracking-wide self-center my-auto">
          Resources
        </div>
        <div className="justify-center text-white text-base font-medium leading-6 tracking-wide self-center whitespace-nowrap my-auto">
          Pricing
        </div>
      </div>
      <div className="flex items-stretch justify-between gap-2.5 max-md:justify-center">
        <div className="justify-center text-white text-sm font-medium leading-6 self-center my-auto">
          Contact sales 
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45953f70-5705-4c47-812f-cee2eb929866?"
          className="aspect-square object-contain object-center w-2.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <div className="bg-white bg-opacity-20 flex items-stretch justify-between gap-2.5 pl-4 pr-3 py-2.5 rounded-2xl">
          <div className="justify-center text-white text-base font-medium leading-6">
            Sign in{" "}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cefd43-3ec9-480c-ad77-486f50d98896?"
            className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full self-start"
          />
        </div>
      </div>
    </div>
    <div className="relative z-[1] w-full max-w-[1213px] mt-9 pr-0.5 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
          <div className="justify-center text-neutral-700 text-8xl font-medium leading-[98px] tracking-tighter relative mt-24 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
            Financial
            <br />
            infrastructure
            <br />
            for the internet
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.83] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="flex w-[446px] max-w-full flex-col items-stretch ml-40 mt-3.5 mb-28 self-start max-md:mb-10">
    <div className="justify-center text-slate-600 text-lg font-light leading-7 tracking-wide max-md:max-w-full">
      Millions of companies of all sizes use Stripe online and in
      <br />
      person to accept payments, send payouts, automate
      <br />
      financial processes, and ultimately grow revenue.
    </div>
    <div className="flex w-[238px] max-w-full items-stretch gap-2.5 mt-9 self-start max-md:justify-center">
      <div className="bg-sky-950 flex items-stretch justify-between gap-2.5 pl-4 pr-3 py-3 rounded-2xl">
        <div className="justify-center text-white text-sm font-medium leading-6 tracking-wide">
          Start now 
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e324f168-e183-4f51-8293-4aaef35275c3?"
          className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <div className="justify-center text-sky-950 text-sm font-medium leading-6 tracking-wide self-center my-auto">
        Contact sales 
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f36ed64c-dcee-4168-acfe-7f35db371b88?"
        className="aspect-square object-contain object-center w-2.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
    </div>
  </div>
</div>
<div className="justify-center items-center bg-white flex min-h-[41px] w-full flex-col max-md:max-w-full" />
</div> */
}
