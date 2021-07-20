import React from 'react'

type ContextType = {toggleAll:(status: boolean) => void}

const Context = React.createContext<ContextType>({
  toggleAll: () => { return }
})

export default Context
