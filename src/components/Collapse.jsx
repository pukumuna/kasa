<<<<<<< HEAD
import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <section className={`collapse ${open ? ' collapse--open' : ''}`}>
      <button className="collapse__button" type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open} >
        <span>{title}</span>
        <ChevronUp
          size={32}
          className={`collapse__chevron ${open ? 'collapse__chevron--open' : ''}`}
          aria-hidden="true"
        />
      </button>
      
      <div className={`collapse__content ${open ? 'collapse__content--open' : ''}`}>
        <div className="collapse__content-inner">
            {children}
        </div>
    </div>
    </section>
  )
}
=======
import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <section className={`collapse ${open ? ' collapse--open' : ''}`}>
      <button className="collapse__button" type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open} >
        <span>{title}</span>
        <ChevronUp
          size={32}
          className={`collapse__chevron ${open ? 'collapse__chevron--open' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div className="collapse__body" hidden={!open}>
        {children}
      </div>
    </section>
  )
}
>>>>>>> 6f21324a53620c4f761d5e352b58394b8791b794
export default Collapse