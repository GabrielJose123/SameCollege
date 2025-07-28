import React, { useState, useEffect, useRef } from "react"

export function Expand() {
    
    const [size, setSize] = useState(defaultSize)
    return (
        <button></button>
    )

    function ExpandAction({ divRef, FinalSize }) {
        setSize(divRef - FinalSize)
    }
}

