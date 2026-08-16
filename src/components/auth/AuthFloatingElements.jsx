import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import AuthFloatingPost from './AuthFloatingPost';
import AuthNotification from './AuthNotification';
import AuthPeopleCard from './AuthPeopleCard';
import AuthShareCard from './AuthShareCard';

const AuthFloatingElements = () => {
  const floatingRefs = useRef([]);

  const addFloatingRef = (element) => {
    if (!element) return;

    if (!floatingRefs.current.includes(element)) {
      floatingRefs.current.push(element);
    }
  };

  useEffect(() => {
    const animations = [];

    floatingRefs.current.forEach((element, index) => {
      const entrance = gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.75,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.12,
          ease: 'power3.out',
        },
      );

      animations.push(entrance);

      const floating = gsap.to(element, {
        y: index % 2 === 0 ? -12 : 12,
        x: index % 2 === 0 ? 5 : -5,
        rotation: index % 2 === 0 ? 2 : -2,
        duration: 3 + index * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8 + index * 0.15,
      });

      animations.push(floating);
    });

    gsap.to('.pixster-auth-orb', {
      x: 30,
      y: -20,
      scale: 1.08,
      duration: 5,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: 'sine.inOut',
    });

    return () => {
      animations.forEach((animation) => animation.kill());

      gsap.killTweensOf('.pixster-auth-orb');
    };
  }, []);

  return (
    <>
      <AuthFloatingPost floatingRef={addFloatingRef} />
      <AuthNotification floatingRef={addFloatingRef} />
      <AuthPeopleCard floatingRef={addFloatingRef} />
      <AuthShareCard floatingRef={addFloatingRef} />
    </>
  );
};

export default AuthFloatingElements;
