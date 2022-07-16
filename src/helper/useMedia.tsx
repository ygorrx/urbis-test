import React from 'react'

const useMedia = (media: string) => {
  const [match, setMatch] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia('(max-width: 1365px')
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return match
}

export default useMedia
