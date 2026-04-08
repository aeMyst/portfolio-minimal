import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useGsapReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // reduced motion, make everything visible immediately
    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const ctx = gsap.context(() => {

      // ── Generic .reveal elements ──────────────────────────────
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── Timeline dots ─────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.timeline-dot').forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: 'back.out(2.5)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── Project cards stagger ─────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            delay: (i % 2) * 0.1, // stagger within each row (max 2 per row)
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── Skill groups stagger ──────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.skill-group').forEach((group, i) => {
        gsap.fromTo(
          group,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: group,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      ScrollTrigger.refresh()
    })

    // clean up
    return () => ctx.revert()
  }, [])
}