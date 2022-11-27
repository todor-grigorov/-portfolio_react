import React from 'react';

export interface ParentProps {
  active: string;
}

const NavigationDots = ({ active }: ParentProps) => {
  return (
    <div className={'app__navigation'}>
      {['home', 'about', 'testimonials', 'work', 'skills', 'contact'].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className={'app__navigation-dot'}
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
