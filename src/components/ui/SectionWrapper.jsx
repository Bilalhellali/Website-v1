function SectionWrapper({ children, className = '', id = '', style = {} }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} style={style}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
