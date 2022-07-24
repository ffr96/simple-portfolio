import { useRef } from 'react';

import Image from 'next/image';

import { AnimateIn } from '@/components/AnimateIn';
import ImageAndList from '@/components/ImageAndList';
import { useVisibleComp } from '@/hook/useVisibleComp';
import { Main } from '@/layout/Main';
import ImageDark1 from '@/public/assets/images/imagedark1.png';
import ImageLight1 from '@/public/assets/images/imagelight1.png';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const About = () => {
  const cardsRef = useRef(null);
  const [, visibleTitle] = useVisibleComp({ options, ref: cardsRef });
  return (
    <Main>
      <div>
        <div className="float-left pr-6 lg:pl-24">
          <AnimateIn>
            <Image height={'250%'} width={'250%'} alt="test" src="/beans.png" />
          </AnimateIn>
        </div>
        <h3 className="animate-leftin text-ellipsis text-6xl tracking-widest text-black dark:text-orange-500">
          Hi
        </h3>
        <p className="animate-[leftIn_2s_cubic-bezier(.73,.39,.14,1.11)_backwards] text-4xl tracking-wider text-slate-800 dark:text-orange-400">
          Lorem ipsum dolor sit amet,{' '}
          <b className="text-slate-700 dark:text-orange-300">
            consectetur adipiscing
          </b>{' '}
          elit. Aenean
        </p>
        <p className="animate-[leftIn_3s_cubic-bezier(.73,.39,.14,1.11)_backwards] indent-3 text-xl tracking-wider text-slate-700 dark:text-orange-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          blandit dapibus dolor at rutrum. Praesent dui lorem, egestas vel quam
          ut, finibus aliquet libero. Mauris dignissim lobortis quam. Maecenas
          volutpat ornare lacus sit amet pretium. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; In
          tincidunt lacus vel eros pretium, pellentesque tristique risus
          posuere. Curabitur semper, nulla in aliquet eleifend, leo leo
          tristique elit, eget blandit lacus sem id nisl. Curabitur nec nisi
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          blandit dapibus dolor at rutrum. Praesent dui lorem, egestas vel quam
          ut, finibus aliquet libero. Mauris dignissim lobortis quam. Maecenas
          volutpat ornare lacus sit amet pretium. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; In
          tincidunt lacus vel eros pretium, pellentesque tristique risus
          posuere. Curabitur semper, nulla in aliquet eleifend, leo leo
          tristique elit, eget blandit lacus sem id nisl. Curabitur nec nisi
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          blandit dapibus dolor at rutrum. Praesent dui lorem, egestas vel quam
        </p>
        <div className={`flex flex-col pt-60`}>
          <h3
            ref={cardsRef}
            className={`pb-20 text-center text-4xl tracking-wide first-letter:text-6xl ${
              !visibleTitle ? 'opacity-0' : 'animate-rightin'
            }`}
          >
            Lorem ipsum dolor sit amet
          </h3>
          <div className="flex flex-col lg:flex-row lg:justify-evenly">
            <ImageAndList
              img={{ light: ImageLight1, dark: ImageDark1 }}
              alt={'Logo'}
              content={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Aenean blandit dapibus dolor at rutrum. Praesent dui lorem, egestas vel quam',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              ]}
              title={'Title One'}
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default About;
