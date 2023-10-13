export default function Home() {
  return (
    <main className='bg-stone-900 flex flex-col'>
      <header className='self-center flex w-full max-w-[1224px] items-start justify-between gap-2 mt-4 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center'>
        <img
          loading='lazy'
          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/1f1e9636-e166-4bb3-9fe0-296403eb2341?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f1e9636-e166-4bb3-9fe0-296403eb2341?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f1e9636-e166-4bb3-9fe0-296403eb2341?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f1e9636-e166-4bb3-9fe0-296403eb2341?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f1e9636-e166-4bb3-9fe0-296403eb2341?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f1e9636-e166-4bb3-9fe0-296403eb2341?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f1e9636-e166-4bb3-9fe0-296403eb2341?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f1e9636-e166-4bb3-9fe0-296403eb2341?apiKey=5a218191b01e4319aa854707171a0621&'
          className='aspect-square object-cover object-center w-[39px] shrink-0'
        />
        <nav className='items-start self-center flex w-[449px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center'>
          <a
            href='#'
            className='text-yellow-400 text-center text-base font-semibold self-stretch w-[114px]'
          >
            Sample Page
          </a>
          <a
            href='#'
            className='text-neutral-200 text-center text-base font-semibold self-stretch'
          >
            Styleguide
          </a>
          <a
            href='#'
            className='text-neutral-200 text-center text-base font-semibold self-stretch'
          >
            Tutorial
          </a>
        </nav>
      </header>
      <section className='self-center flex w-[879px] max-w-full flex-col mt-36 px-5'>
        <h1 className='text-yellow-400 text-center text-base font-medium leading-7 self-center'>
          Webflow Agency
        </h1>
        <h2 className='text-neutral-200 text-center text-7xl leading-[88px] self-stretch mt-7 max-md:max-w-full max-md:text-4xl'>
          Your Webflow partner
        </h2>
        <p className='text-zinc-400 text-center text-base font-medium leading-7 self-center w-[449px] max-w-full mt-5'>
          We design and develop handcrafted websites for amazing companies who
          want to win the digital game.
        </p>
        <div className='justify-center items-center bg-yellow-400 self-center flex w-[207px] max-w-full grow flex-col mt-14 px-5 py-6 rounded-[50px]'>
          <a
            href='#'
            className='text-neutral-900 text-center text-sm leading-6 self-center w-[125px] -mb-px'
          >
            Let’s get in touch
          </a>
        </div>
      </section>
      <section className='justify-center items-center self-center flex w-full max-w-[1224px] flex-col mt-64 px-5 max-md:max-w-full max-md:mt-52'>
        <h2 className='text-neutral-200 text-center text-5xl leading-[57.6px] self-center max-md:text-4xl'>
          Our services
        </h2>
        <div className='self-stretch -mr-5 mt-12 max-md:max-w-full'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[33%] max-md:w-full'>
              <div className='bg-neutral-900 flex w-[392px] max-w-full grow flex-col mx-auto max-md:mt-6'>
                <div className='items-start border border-[color:var(--Black-50,#4A4A4A)] self-stretch flex w-full grow flex-col px-5 py-8 rounded-2xl border-solid'>
                  <h3 className='self-center text-neutral-200 text-3xl leading-9 w-[328px] max-w-full'>
                    Discover
                  </h3>
                  <p className='self-center text-zinc-400 text-base font-medium leading-7 w-[328px] max-w-full mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eros
                    elementum tristique.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full'>
              <div className='bg-neutral-900 flex w-[392px] max-w-full grow flex-col mx-auto max-md:mt-6'>
                <div className='items-start border border-[color:var(--Black-50,#4A4A4A)] self-stretch flex w-full grow flex-col px-5 py-8 rounded-2xl border-solid'>
                  <h3 className='self-center text-neutral-200 text-3xl leading-9 w-[328px] max-w-full'>
                    Design
                  </h3>
                  <p className='self-center text-zinc-400 text-base font-medium leading-7 w-[328px] max-w-full mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eros
                    elementum tristique.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full'>
              <div className='bg-neutral-900 flex w-[392px] max-w-full grow flex-col mx-auto max-md:mt-6'>
                <div className='items-start border border-[color:var(--Black-50,#4A4A4A)] self-stretch flex w-full grow flex-col px-5 py-8 rounded-2xl border-solid'>
                  <h3 className='self-center text-neutral-200 text-3xl leading-9 w-[328px] max-w-full'>
                    Develop
                  </h3>
                  <p className='self-center text-zinc-400 text-base font-medium leading-7 w-[328px] max-w-full mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eros
                    elementum tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='justify-center items-center self-center flex w-full max-w-[1224px] flex-col mt-64 max-md:max-w-full max-md:mt-52'>
        <div className='justify-between items-start self-center flex w-full gap-5 px-5 max-md:max-w-full max-md:flex-wrap'>
          <h2 className='text-neutral-200 text-5xl leading-[57.6px] max-w-[393px] self-stretch grow shrink-0 basis-auto my-auto max-md:text-4xl'>
            Latest projects
          </h2>
          <a
            href='#'
            className='justify-center items-center bg-neutral-900 self-stretch flex w-[194px] max-w-full flex-col px-5 py-7 rounded-[50px]'
          >
            <p className='text-neutral-200 text-center text-sm font-semibold self-center'>
              See all projects
            </p>
          </a>
        </div>
        <div className='self-stretch mt-12 px-5 max-md:max-w-full'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[33%] max-md:w-full'>
              <div className='items-start flex grow flex-col max-md:mt-6'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/f713b9dd-421c-4361-87a6-0014007233f2?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f713b9dd-421c-4361-87a6-0014007233f2?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f713b9dd-421c-4361-87a6-0014007233f2?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f713b9dd-421c-4361-87a6-0014007233f2?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f713b9dd-421c-4361-87a6-0014007233f2?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f713b9dd-421c-4361-87a6-0014007233f2?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f713b9dd-421c-4361-87a6-0014007233f2?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f713b9dd-421c-4361-87a6-0014007233f2?apiKey=5a218191b01e4319aa854707171a0621&'
                  className='aspect-[0.82] object-cover object-center w-full rounded-2xl'
                />
                <p className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                  Automotive UI design
                </p>
              </div>
            </div>
            <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full'>
              <div className='items-start flex grow flex-col max-md:mt-6'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bec3f-3e95-4f0b-aca3-e47feb2318c8?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bec3f-3e95-4f0b-aca3-e47feb2318c8?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bec3f-3e95-4f0b-aca3-e47feb2318c8?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bec3f-3e95-4f0b-aca3-e47feb2318c8?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bec3f-3e95-4f0b-aca3-e47feb2318c8?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bec3f-3e95-4f0b-aca3-e47feb2318c8?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bec3f-3e95-4f0b-aca3-e47feb2318c8?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bec3f-3e95-4f0b-aca3-e47feb2318c8?apiKey=5a218191b01e4319aa854707171a0621&'
                  className='aspect-[0.82] object-cover object-center w-full rounded-2xl'
                />
                <p className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                  Speaker UI design
                </p>
              </div>
            </div>
            <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full'>
              <div className='items-start flex grow flex-col max-md:mt-6'>
                <img
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/6e26f66b-7cfa-400e-b952-28cead45cdb4?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e26f66b-7cfa-400e-b952-28cead45cdb4?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e26f66b-7cfa-400e-b952-28cead45cdb4?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e26f66b-7cfa-400e-b952-28cead45cdb4?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e26f66b-7cfa-400e-b952-28cead45cdb4?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e26f66b-7cfa-400e-b952-28cead45cdb4?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e26f66b-7cfa-400e-b952-28cead45cdb4?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e26f66b-7cfa-400e-b952-28cead45cdb4?apiKey=5a218191b01e4319aa854707171a0621&'
                  className='aspect-[0.82] object-cover object-center w-full rounded-2xl'
                />
                <p className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                  Surf brand design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='justify-center self-center w-full max-w-[1224px] mt-64 px-5 max-md:max-w-full max-md:mt-52'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-6/12 max-md:w-full'>
            <img
              loading='lazy'
              srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/7b341053-f5d7-48eb-ade9-a3c8a6d2e646?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b341053-f5d7-48eb-ade9-a3c8a6d2e646?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b341053-f5d7-48eb-ade9-a3c8a6d2e646?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b341053-f5d7-48eb-ade9-a3c8a6d2e646?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b341053-f5d7-48eb-ade9-a3c8a6d2e646?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b341053-f5d7-48eb-ade9-a3c8a6d2e646?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b341053-f5d7-48eb-ade9-a3c8a6d2e646?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b341053-f5d7-48eb-ade9-a3c8a6d2e646?apiKey=5a218191b01e4319aa854707171a0621&'
              className='aspect-[1.5] object-cover object-center w-full grow rounded-2xl max-md:max-w-full max-md:mt-12'
            />
          </div>
          <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full'>
            <div className='flex flex-col my-auto max-md:max-w-full max-md:mt-12'>
              <h2 className='text-neutral-200 text-5xl leading-[57.6px] w-[313px] max-w-full max-md:text-4xl'>
                Your team of <br /> specialists
              </h2>
              <p className='text-zinc-400 text-base font-medium leading-7 w-[564px] max-w-full mt-12'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className='justify-center items-center bg-neutral-900 flex w-[186px] max-w-full grow flex-col mt-10 px-5 py-7 rounded-[50px]'>
                <p className='text-neutral-200 text-center text-sm font-semibold self-center'>
                  More about us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='justify-center items-center self-center flex w-full max-w-[1227px] flex-col mt-64 pr-0.5 max-md:max-w-full max-md:mt-52'>
        <div className='self-stretch flex flex-col max-md:max-w-full'>
          <div className='justify-between items-start self-center flex w-full max-w-[1224px] gap-5 px-5 max-md:max-w-full max-md:flex-wrap'>
            <h2 className='text-neutral-200 text-5xl leading-[57.6px] max-w-[383px] self-stretch grow shrink-0 basis-auto max-md:text-4xl'>
              Why you should <br /> work with us
            </h2>
            <p className='text-zinc-400 text-base font-medium leading-7 self-center max-w-[420px] grow shrink-0 basis-auto my-auto'>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum.
            </p>
          </div>
          <div className='self-center w-full max-w-[1153px] -ml-9 mt-16 px-5 max-md:max-w-full'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-[37%] max-md:w-full'>
                <div className='flex grow flex-col max-md:mt-12'>
                  <img
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/169b7435-9f20-4fb2-9b9c-63851eeb0c52?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/169b7435-9f20-4fb2-9b9c-63851eeb0c52?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/169b7435-9f20-4fb2-9b9c-63851eeb0c52?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/169b7435-9f20-4fb2-9b9c-63851eeb0c52?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/169b7435-9f20-4fb2-9b9c-63851eeb0c52?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/169b7435-9f20-4fb2-9b9c-63851eeb0c52?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/169b7435-9f20-4fb2-9b9c-63851eeb0c52?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/169b7435-9f20-4fb2-9b9c-63851eeb0c52?apiKey=5a218191b01e4319aa854707171a0621&'
                    className='aspect-square object-cover object-center w-12 shrink-0'
                  />
                  <div className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                    Euismod Consectetur
                  </div>
                  <div className='text-zinc-400 text-sm font-medium leading-6 w-[290px] max-w-full mt-4'>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet.
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[37%] ml-5 max-md:w-full'>
                <div className='flex grow flex-col max-md:mt-12'>
                  <img
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/68b9eafd-98c7-436b-94cc-32129144ef31?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68b9eafd-98c7-436b-94cc-32129144ef31?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68b9eafd-98c7-436b-94cc-32129144ef31?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68b9eafd-98c7-436b-94cc-32129144ef31?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68b9eafd-98c7-436b-94cc-32129144ef31?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68b9eafd-98c7-436b-94cc-32129144ef31?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68b9eafd-98c7-436b-94cc-32129144ef31?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68b9eafd-98c7-436b-94cc-32129144ef31?apiKey=5a218191b01e4319aa854707171a0621&'
                    className='aspect-square object-cover object-center w-12 shrink-0'
                  />
                  <div className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                    Euismod Consectetur
                  </div>
                  <div className='text-zinc-400 text-sm font-medium leading-6 w-[290px] max-w-full mt-4'>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet.
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[27%] ml-5 max-md:w-full'>
                <div className='flex grow flex-col max-md:mt-12'>
                  <img
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/7bfbcca2-ee48-4473-b62f-9aa26766391c?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bfbcca2-ee48-4473-b62f-9aa26766391c?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bfbcca2-ee48-4473-b62f-9aa26766391c?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bfbcca2-ee48-4473-b62f-9aa26766391c?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bfbcca2-ee48-4473-b62f-9aa26766391c?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bfbcca2-ee48-4473-b62f-9aa26766391c?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bfbcca2-ee48-4473-b62f-9aa26766391c?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bfbcca2-ee48-4473-b62f-9aa26766391c?apiKey=5a218191b01e4319aa854707171a0621&'
                    className='aspect-square object-cover object-center w-12 shrink-0'
                  />
                  <div className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                    Euismod Consectetur
                  </div>
                  <div className='text-zinc-400 text-sm font-medium leading-6 w-[290px] max-w-full mt-4'>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='self-center w-full max-w-[1153px] -ml-9 mt-16 px-5 max-md:max-w-full'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-[37%] max-md:w-full'>
                <div className='flex grow flex-col max-md:mt-12'>
                  <img
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/0fa91ab3-4df9-4c78-9c1c-227a26c68497?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fa91ab3-4df9-4c78-9c1c-227a26c68497?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fa91ab3-4df9-4c78-9c1c-227a26c68497?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fa91ab3-4df9-4c78-9c1c-227a26c68497?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fa91ab3-4df9-4c78-9c1c-227a26c68497?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fa91ab3-4df9-4c78-9c1c-227a26c68497?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fa91ab3-4df9-4c78-9c1c-227a26c68497?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fa91ab3-4df9-4c78-9c1c-227a26c68497?apiKey=5a218191b01e4319aa854707171a0621&'
                    className='aspect-square object-cover object-center w-12 shrink-0'
                  />
                  <div className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                    Euismod Consectetur
                  </div>
                  <div className='text-zinc-400 text-sm font-medium leading-6 w-[290px] max-w-full mt-4'>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet.
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[37%] ml-5 max-md:w-full'>
                <div className='flex grow flex-col max-md:mt-12'>
                  <img
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/98790ee8-9e82-42e9-8159-66838c465919?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98790ee8-9e82-42e9-8159-66838c465919?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98790ee8-9e82-42e9-8159-66838c465919?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98790ee8-9e82-42e9-8159-66838c465919?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98790ee8-9e82-42e9-8159-66838c465919?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98790ee8-9e82-42e9-8159-66838c465919?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98790ee8-9e82-42e9-8159-66838c465919?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98790ee8-9e82-42e9-8159-66838c465919?apiKey=5a218191b01e4319aa854707171a0621&'
                    className='aspect-square object-cover object-center w-12 shrink-0'
                  />
                  <div className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                    Euismod Consectetur
                  </div>
                  <div className='text-zinc-400 text-sm font-medium leading-6 w-[290px] max-w-full mt-4'>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet.
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[27%] ml-5 max-md:w-full'>
                <div className='flex grow flex-col max-md:mt-12'>
                  <img
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/46927826-28f0-45c0-8bf5-3c87457f2eb5?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46927826-28f0-45c0-8bf5-3c87457f2eb5?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46927826-28f0-45c0-8bf5-3c87457f2eb5?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46927826-28f0-45c0-8bf5-3c87457f2eb5?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46927826-28f0-45c0-8bf5-3c87457f2eb5?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46927826-28f0-45c0-8bf5-3c87457f2eb5?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46927826-28f0-45c0-8bf5-3c87457f2eb5?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46927826-28f0-45c0-8bf5-3c87457f2eb5?apiKey=5a218191b01e4319aa854707171a0621&'
                    className='aspect-square object-cover object-center w-12 shrink-0'
                  />
                  <div className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                    Euismod Consectetur
                  </div>
                  <div className='text-zinc-400 text-sm font-medium leading-6 w-[290px] max-w-full mt-4'>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='justify-center items-center bg-yellow-400 self-center flex w-[206px] max-w-full grow flex-col mt-16 px-5 py-6 rounded-[50px]'>
        <a
          href='#'
          className='text-neutral-900 text-center text-sm leading-6 self-center w-[125px] -mb-px'
        >
          Let’s get in touch
        </a>
      </section>
      <footer className='justify-center items-center border-t-[color:var(--Black-50,#4A4A4A)] bg-neutral-900 self-stretch flex w-full flex-col mt-32 px-5 py-10 border-t border-solid max-md:max-w-full'>
        <div className='self-center w-full max-w-[1224px] -ml-5 mt-24 mb-16 max-md:max-w-full'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[72%] max-md:w-full'>
              <img
                loading='lazy'
                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ce39b-f35c-4e76-a780-4d13847004d8?apiKey=5a218191b01e4319aa854707171a0621&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ce39b-f35c-4e76-a780-4d13847004d8?apiKey=5a218191b01e4319aa854707171a0621&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ce39b-f35c-4e76-a780-4d13847004d8?apiKey=5a218191b01e4319aa854707171a0621&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ce39b-f35c-4e76-a780-4d13847004d8?apiKey=5a218191b01e4319aa854707171a0621&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ce39b-f35c-4e76-a780-4d13847004d8?apiKey=5a218191b01e4319aa854707171a0621&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ce39b-f35c-4e76-a780-4d13847004d8?apiKey=5a218191b01e4319aa854707171a0621&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ce39b-f35c-4e76-a780-4d13847004d8?apiKey=5a218191b01e4319aa854707171a0621&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee8ce39b-f35c-4e76-a780-4d13847004d8?apiKey=5a218191b01e4319aa854707171a0621&'
                className='aspect-square object-cover object-center w-12 shrink-0'
              />
              <div className='text-neutral-200 text-xl leading-7 w-[328px] max-w-full mt-6'>
                Your Webflow partner
              </div>
              <div className='items-start self-stretch flex grow flex-col w-full mt-4'>
                <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full'>
                  About us
                </div>
                <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full mt-2'>
                  Team
                </div>
                <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full mt-2'>
                  Mission
                </div>
                <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full mt-2'>
                  Network
                </div>
              </div>
            </div>
            <div className='flex flex-col items-stretch w-[28%] ml-5 max-md:w-full'>
              <div className='flex grow flex-col w-80 max-md:mt-12'>
                <div className='self-stretch text-neutral-200 text-xl leading-7 w-full'>
                  Work with us
                </div>
                <div className='items-start self-stretch flex grow flex-col w-full mt-4'>
                  <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full'>
                    RFP firm
                  </div>
                  <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full mt-2'>
                    Mail us
                  </div>
                  <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full mt-2'>
                    Contact
                  </div>
                </div>
              </div>
              <div className='items-start self-stretch flex grow flex-col w-full mt-20'>
                <div className='self-stretch text-neutral-200 text-xl leading-7 w-full'>
                  Legal stuff
                </div>
                <div className='items-start self-stretch flex grow flex-col w-full mt-4'>
                  <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full'>
                    Legal notice
                  </div>
                  <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full mt-2'>
                    Privacy policy
                  </div>
                  <div className='self-stretch text-neutral-200 text-base font-medium leading-7 w-full mt-2'>
                    Cookies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
