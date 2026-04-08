import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useGsapReveal() {
  useEffect(() => {
    // Small timeout ensures all React components have fully painted to the DOM
    const id = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Generic .reveal elements (section labels, titles, text blocks, cards)
        document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
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

        // Timeline dots scale in
        document.querySelectorAll<HTMLElement>('.timeline-dot').forEach((dot) => {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              ease: 'back.out(2)',
              scrollTrigger: { trigger: dot, start: 'top 88%' },
            }
          )
        })

        // Project cards stagger in
        document.querySelectorAll<HTMLElement>('.project-card').forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              delay: i * 0.08,
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          )
        })
      })

      ScrollTrigger.refresh()

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(id)
  }, [])
}