import { useContext, useRef } from 'react';

import { CarouselWithInfo } from '@/components/CarouselWithInfo';
import { SimpleSeparator } from '@/components/SimpleSeparator';
import { Contxt } from '@/ctx/provider';
import {
  project1,
} from '@/extra/projectsdata';
import { useVisibleComp } from '@/hook/useVisibleComp';
import { Main } from '@/layout/Main';

const Projects = () => {
  const [lang] = useContext(Contxt);
  const carouselOne = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [visibleOne] = useVisibleComp({
    options,
    ref: carouselOne,
  });

  return (
    <Main>
      <div>
        <div className="animate-fadein">
          <CarouselWithInfo
            title={project1.title}
            image={project1.image}
            description={
              (lang === 'SPA' && project1.description.spa) ||
              project1.description.eng
            }
            expandable={project1.expandable}
            gblink={project1.gblink}
          />
        </div>
        <SimpleSeparator position="center" pulse />
      </div>
    </Main>
  );
};

export default Projects;
