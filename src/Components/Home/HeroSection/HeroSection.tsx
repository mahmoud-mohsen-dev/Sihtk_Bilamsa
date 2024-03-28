import { ITranslation } from '../../../types';
import Btn from '../../UI/Button/Btn';
import TwoLineShape from '../../UI/TwoLineShape/TwoLineShape';
import './HeroSection.scss';

function HeroSection({ t }: ITranslation) {
  return (
    <section className='hero-section'>
      <div className='container'>
        <div className='description'>
          <div className='info'>
            <TwoLineShape l1={{ height: '4px', width: '50%' }} />
            <h1>{t.homePage?.hero?.h1_1}</h1>
          </div>
          <h1 className='second-heading'>{t.homePage?.hero?.h1_2}</h1>
          <p>{t.homePage?.hero?.p}</p>

          <Btn
            size='lg'
            to='/contact'
            onClick={(e) => {
              if (e) {
                e.preventDefault();
              }
            }}
          >
            {t.homePage?.hero?.btn}
          </Btn>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
