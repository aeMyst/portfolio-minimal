import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useGsapReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>(
        '.reveal, .about-para, .about-photos-reveal'
      ).forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const ctx = gsap.context(() => {

      // ── Generic reveals ───────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── About — text paragraphs stagger in from left ──────────────────
      gsap.utils.toArray<HTMLElement>('.about-para').forEach((para, i) => {
        gsap.fromTo(
          para,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: para,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── About — photo collage: each image fades + scales up with stagger
      const photosContainer = document.querySelector<HTMLElement>('.about-photos-reveal')
      if (photosContainer) {
        const photos = photosContainer.querySelectorAll<HTMLElement>('.photo-placeholder')
        gsap.fromTo(
          photos,
          { opacity: 0, scale: 0.92, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: photosContainer,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // ── Timeline dots ─────────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.timeline-dot').forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── Skill groups — stagger scale + fade up per card ──────────────
      const skillsContainer = document.querySelector<HTMLElement>('.skills-stack')
      if (skillsContainer) {
        const groups = skillsContainer.querySelectorAll<HTMLElement>('.skill-group')
        gsap.fromTo(
          groups,
          { opacity: 0, scale: 0.94, y: 24 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: skillsContainer,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // ── Education card — scale up from slightly below ─────────────────
      const eduContainer = document.querySelector<HTMLElement>('.edu-card-inline')
      if (eduContainer) {
        gsap.fromTo(
          eduContainer,
          { opacity: 0, scale: 0.94, y: 24 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: eduContainer,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // ── Project cards — featured first, then pairs stagger in ─────────
      const featured = document.querySelector<HTMLElement>('.project-card.featured')
      if (featured) {
        gsap.fromTo(
          featured,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: featured,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      const regularCards = gsap.utils.toArray<HTMLElement>(
        '.project-card:not(.featured)'
      )
      regularCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.94, y: 28 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: (i % 2) * 0.12,
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])
}